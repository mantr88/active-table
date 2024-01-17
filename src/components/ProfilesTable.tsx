import { ReactElement, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { profilesData } from "../fakeApi";
import { IProfile } from "../Types/profileTypes";
import Loader from "../ui/Loader";
import "../AppLoyout.css";
import { BackLink } from "../ui/BackLink";

function ProfilesTable() {
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const location = useLocation();
  const backlinkRef = location.state?.from ?? "/active-table/";
  const targetAccountId = location.state?.accountId;

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

  return (
    <div>
      <BackLink to={backlinkRef}>Back to accounts</BackLink>
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
              profiles.map((item: IProfile): ReactElement<[]> => {
                return (
                  <NavLink
                    className="link"
                    to="/active-table/campaigns"
                    state={{ location, profileId: item.profileId }}
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
      {profiles.length === 0 && <Loader />}
    </div>
  );
}

export default ProfilesTable;
