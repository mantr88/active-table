import { ReactElement, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { profilesData } from "../fakeApi";
import { IProfile } from "../Types/profileTypes";
import Loader from "../ui/Loader/Loader";
import { BackLink } from "../ui/BackLink/BackLink";
import Pagination from "../ui/Pagination/Pagination";
import getTargetId from "../helpers/getTargetId";
import { SortConfig } from "../Types/SortConfig";
import Filter from "../ui/Filter/Filter";
import TableHead from "../ui/TableHead/TableHead";
import { sortedData } from "../helpers/sortedData";
import { cssClassTHeadType } from "../Types/cssClassTHeadType";
import "../AppLoyout.css";

function ProfilesTable() {
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig<IProfile>>({
    key: "profileId",
    direction: "ascending",
  });

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

  const clickHeadCellHandler = (key: keyof IProfile) => {
    setSortConfig((prevState) => ({
      key: key,
      direction:
        prevState.direction === "ascending" ? "descending" : "ascending",
    }));
  };
  const sortedProfiles = sortedData(profiles, sortConfig);

  const sortedCellsCls = (key: string): cssClassTHeadType => {
    return sortConfig.key === key && sortConfig.direction === "ascending"
      ? "down"
      : sortConfig.key === key && sortConfig.direction === "descending"
      ? "up"
      : "default";
  };

  const filteredProfiles = sortedProfiles.filter(
    (profile) =>
      profile.profileId.includes(filter) ||
      profile.country.includes(filter) ||
      profile.marketplace.includes(filter) ||
      profile.accountId.includes(filter)
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredProfiles.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      <h2>Profiles Table</h2>
      <BackLink to={backlinkRef.current}>Back to accounts</BackLink>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="table-wrapper">
        <table className="fl-table">
          <TableHead
            data={profiles}
            clickHeadCellHandler={clickHeadCellHandler}
            sortedCellsCls={sortedCellsCls}
            skippedProp={"accountId"}
          />
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
