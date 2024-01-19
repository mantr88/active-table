import { ReactElement, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { accountsData } from "../fakeApi";
import { IAccount } from "../Types/accountTypes";
import Loader from "../ui/Loader/Loader";
import Pagination from "../ui/Pagination/Pagination";
import Filter from "../ui/Filter/Filter";
import TableHead from "../ui/TableHead/TableHead";
import { cssClassTHeadType } from "../Types/cssClassTHeadType";
import { SortConfig } from "../Types/SortConfig";
import { sortedData } from "../helpers/sortedData";
import "../AppLoyout.css";

function AccountsTable() {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig<IAccount>>({
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
  const sortedAccounts = sortedData(accounts, sortConfig);
  console.log("🪲 ~ AccountsTable ~ accounts:", accounts);

  const sortedCellsCls = (key: string): cssClassTHeadType => {
    return sortConfig.key === key && sortConfig.direction === "ascending"
      ? "down"
      : sortConfig.key === key && sortConfig.direction === "descending"
      ? "up"
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
      <Filter filter={filter} setFilter={setFilter} />
      <div className="table-wrapper">
        <table className="fl-table">
          <TableHead
            data={accounts}
            clickHeadCellHandler={clickHeadCellHandler}
            sortedCellsCls={sortedCellsCls}
            skippedProp=""
          />
          <tbody>
            {accounts.length !== 0 &&
              currentRows.map((item: IAccount): ReactElement<[]> => {
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
        {accounts.length === 0 && <Loader />}
        <Pagination
          rowsPerPage={rowsPerPage}
          totalRows={accounts.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default AccountsTable;
