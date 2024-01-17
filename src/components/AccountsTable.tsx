import { ReactElement, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { accountsData } from "../fakeApi";
import { IAccount } from "../Types/accountTypes";
import Loader from "../ui/Loader";
import "../AppLoyout.css";

function AccountsTable() {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const location = useLocation();

  useEffect(() => {
    const idTimeout: number = setTimeout(() => {
      setAccounts(accountsData);
    }, 500);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

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
            {accounts.map((item: IAccount): ReactElement<[]> => {
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
      </div>
      {accounts.length === 0 && <Loader />}
    </div>
  );
}

export default AccountsTable;
