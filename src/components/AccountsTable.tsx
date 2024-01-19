import { ReactElement, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { accountsData } from "../fakeApi";
import { IAccount } from "../Types/accountTypes";
import Loader from "../ui/Loader";
import "../AppLoyout.css";
import Pagination from "../ui/Pagination/Pagination";

type SortDirection = "ascending" | "descending";

type CssClassType = "up" | "default" | "down";

interface SortConfig {
  key: keyof IAccount;
  direction: SortDirection;
}

function AccountsTable() {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
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

  const clickHeadCellHandler = (key: keyof IAccount) => {
    setSortConfig((prevState) => ({
      key: key,
      direction:
        prevState.direction === "ascending" ? "descending" : "ascending",
    }));
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

  const sortedCellscls = (key: keyof IAccount): CssClassType => {
    return sortConfig.key === key && sortConfig.direction === "ascending"
      ? "up"
      : sortConfig.key === key && sortConfig.direction === "descending"
      ? "down"
      : "default";
  };

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
              <th
                className={sortedCellscls("accountId")}
                onClick={() => clickHeadCellHandler("accountId")}
              >
                accountId
              </th>
              <th
                className={sortedCellscls("authToken")}
                onClick={() => clickHeadCellHandler("authToken")}
              >
                authToken
              </th>
              <th>email</th>
              <th
                className={sortedCellscls("creationDate")}
                onClick={() => clickHeadCellHandler("creationDate")}
              >
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
