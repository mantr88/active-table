import { ReactElement, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { profilesData } from "../fakeApi";
import { IProfile } from "../Types/profileTypes";
import Loader from "../ui/Loader";
import "../AppLoyout.css";
import { BackLink } from "../ui/BackLink";
import Pagination from "../ui/Pagination/Pagination";
import getTargetId from "../helpers/getTargetId";

function ProfilesTable() {
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const location = useLocation();
  const backlinkRef = useRef(location.state?.from ?? "/active-table/");
  const id = location.state?.accountId;
  const targetAccountId = getTargetId(id, "accountId");

  useEffect(() => {
    const idTimeout: number = setTimeout(() => {
      const profiles = profilesData.reduce(
        (arr: IProfile[], item: IProfile) => {
          if (item.accountId === targetAccountId) {
            arr.push(item);
            return arr;
          }
          return arr;
        },
        []
      );
      setProfiles(profiles);
    }, 500);

    return () => {
      clearTimeout(idTimeout);
    };
  }, [targetAccountId]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = profiles.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      <BackLink to={backlinkRef.current}>Back to accounts</BackLink>
      <h2>Profiles Table</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>profileId</th>
              <th>country</th>
              <th>marketplace</th>
            </tr>
          </thead>
          <tbody>
            {profiles.length !== 0 &&
              currentRows.map((item: IProfile): ReactElement<[]> => {
                return (
                  <NavLink
                    key={item.profileId}
                    className="link"
                    to="/active-table/campaigns"
                    state={{ from: location, profileId: item.profileId }}
                  >
                    <tr key={item.profileId}>
                      <td>{item.profileId}</td>
                      <td>{item.country}</td>
                      <td>{item.marketplace}</td>
                    </tr>
                  </NavLink>
                );
              })}
          </tbody>
        </table>
      </div>
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={profiles.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
      {profiles.length === 0 && <Loader />}
    </div>
  );
}

export default ProfilesTable;
