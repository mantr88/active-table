import { ReactElement, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { accountsData } from "../fakeApi";
import { IAccount } from "../Types/accountTypes";
import Loader from "../ui/Loader";
import "../AppLoyout.css";
import Pagination from "../ui/Pagination/Pagination";

function AccountsTable() {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  // const [visibleItems, setvisibleItems] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const location = useLocation();

  useEffect(() => {
    const idTimeout: number = setTimeout(() => {
      setAccounts(accountsData);
    }, 500);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  const clickBtnLoadMoreHandler = () => {
    setvisibleItems((pervState) => pervState + 10);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = accounts.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      <h2>Accounts Table</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>accountId</th>
              <th>authToken</th>
              <th>email</th>
              <th>creationDate</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item: IAccount): ReactElement<[]> => {
              return (
                <NavLink
                  className="link"
                  to="/active-table/profiles"
                  state={{ from: location, accountId: item.accountId }}
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
          clickHandler={clickBtnLoadMoreHandler}
          rowsPerPage={rowsPerPage}
          totalRows={accounts.length}
        />
        <button type="button" onClick={clickBtnLoadMoreHandler}>
          Load more
        </button>
      </div>
      {accounts.length === 0 && <Loader />}
    </div>
  );
}

export default AccountsTable;
