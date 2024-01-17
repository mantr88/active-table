import { ReactElement, useEffect, useState } from "react";
import { accountsData } from "../api";
import "../App.css";
import { NavLink } from "react-router-dom";

export interface IAccount {
  accountId: string;
  email: string;
  authToken: string;
  creationDate: string;
}

function AccountsTable() {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  console.log(accounts.length);

  useEffect(() => {
    const idTimeout: number = setTimeout(() => {
      setAccounts(accountsData);
    }, 1000);

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
                <NavLink className="link" to="/active-table/profiles">
                  <tr>
                    <td>{item.accountId}</td>
                    <td>{item.authToken}</td>
                    <td>{item.email}</td>
                    <td>{item.creationDate}</td>
                  </tr>
                </NavLink>
              );
            })}
          </tbody>
        </table>
      </div>
      {accounts.length === 0 && <span className="loader"></span>}
    </div>
  );
}

export default AccountsTable;
