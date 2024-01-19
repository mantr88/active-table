import { ReactElement, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { accountsData } from "../fakeApi";
import { IAccount } from "../Types/accountTypes";
import Loader from "../ui/Loader";
import "../AppLoyout.css";
import Pagination from "../ui/Pagination/Pagination";

type SortDirection = "ascending" | "descending";

interface SortConfig {
  key: keyof IAccount;
  direction: SortDirection;
}

function AccountsTable() {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [isSorted, setIsSorted] = useState("");
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "accountId",
    direction: "ascending",
  });
  const location = useLocation();

  useEffect(() => {
    const idTimeout: number = setTimeout(() => {
      setAccounts(accountsData);
    }, 500);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  const clickHeadCellHandler: React.MouseEventHandler<HTMLTableCellElement> = (
    evt: React.MouseEvent<HTMLTableCellElement>
  ) => {
    const target = evt.target as HTMLElement;
    setIsSorted(target.innerHTML);
    setSortConfig((pervState) => {
      return {
        key: "accountId",
        direction:
          pervState.direction === "ascending" ? "descending" : "ascending",
      };
    });
  };

  const sortedAccounts = accounts.slice().sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "descending" ? 1 : -1;
    }
    return 0;
  });

  const sortedCellscls =
    isSorted === sortConfig.key && sortConfig.direction === "ascending"
      ? "down"
      : isSorted === sortConfig.key && sortConfig.direction === "descending"
      ? "up"
      : "default";

  const filteredAccounts = sortedAccounts.filter(
    (account) =>
      account.accountId.includes(filter) ||
      account.authToken.includes(filter) ||
      account.email.includes(filter)
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredAccounts.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      <h2>Accounts Table</h2>
      <div className="inputWrap">
        <div className="inputContainer">
          <input
            className="input"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter..."
          />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th className={sortedCellscls} onClick={clickHeadCellHandler}>
                accountId
              </th>
              <th className={sortedCellscls} onClick={clickHeadCellHandler}>
                authToken
              </th>
              <th>email</th>
              <th className={sortedCellscls} onClick={clickHeadCellHandler}>
                creationDate
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item: IAccount): ReactElement<[]> => {
              return (
                <NavLink
                  className="link"
                  to="/active-table/profiles"
                  state={{ from: location, accountId: item.accountId }}
                  key={item.accountId}
                >
                  <tr key={item.accountId}>
                    <td>{item.accountId}</td>
                    <td>{item.authToken}</td>
                    <td>{item.email}</td>
                    <td>{item.creationDate.toDateString()}</td>
                  </tr>
                </NavLink>
              );
            })}
          </tbody>
        </table>
        <Pagination
          rowsPerPage={rowsPerPage}
          totalRows={accounts.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      {accounts.length === 0 && <Loader />}
    </div>
  );
}

export default AccountsTable;
