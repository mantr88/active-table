import { ReactElement, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { campaignsData } from "../fakeApi";
import { ICampaign } from "../Types/campaignTypes";
import Loader from "../ui/Loader/Loader";
import { BackLink } from "../ui/BackLink/BackLink";
import Pagination from "../ui/Pagination/Pagination";
import getTargetId from "../helpers/getTargetId";
import { SortConfig } from "../Types/SortConfig";
import { cssClassTHeadType } from "../Types/cssClassTHeadType";
import Filter from "../ui/Filter/Filter";
import TableHead from "../ui/TableHead/TableHead";
import { sortedData } from "../helpers/sortedData";
import "../AppLoyout.css";

function CampaignsTable() {
  const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig<ICampaign>>({
    key: "campaignId",
    direction: "ascending",
  });
  const location = useLocation();
  const backlinkRef = "/active-table/profiles";
  const id = location.state?.profileId;
  const targetProfileId = getTargetId(id, "profileId");

  useEffect(() => {
    const idTimeout: number = setTimeout(() => {
      const campaigns = campaignsData.reduce(
        (arr: ICampaign[], item: ICampaign) => {
          if (item.profileId === targetProfileId) {
            arr.push(item);
            return arr;
          }
          return arr;
        },
        []
      );
      setCampaigns(campaigns);
    }, 500);

    return () => {
      clearTimeout(idTimeout);
    };
  }, [targetProfileId]);

  const clickHeadCellHandler = (key: keyof ICampaign) => {
    setSortConfig((prevState) => ({
      key: key,
      direction:
        prevState.direction === "ascending" ? "descending" : "ascending",
    }));
  };
  const sortedCampaigns = sortedData(campaigns, sortConfig);

  const sortedCellsCls = (key: string): cssClassTHeadType => {
    return sortConfig.key === key && sortConfig.direction === "ascending"
      ? "down"
      : sortConfig.key === key && sortConfig.direction === "descending"
      ? "up"
      : "default";
  };

  const filteredCampaigns = sortedCampaigns.filter(
    (campaign) =>
      campaign.campaignId.includes(filter) ||
      campaign.clicks.toString().includes(filter) ||
      campaign.cost.toString().includes(filter) ||
      campaign.date.toString().includes(filter) ||
      campaign.profileId.includes(filter)
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredCampaigns.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      <h2>Campaigns Table</h2>
      <BackLink to={backlinkRef}>Back to profiles</BackLink>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="table-wrapper">
        <table className="fl-table">
          <TableHead
            data={campaigns}
            clickHeadCellHandler={clickHeadCellHandler}
            sortedCellsCls={sortedCellsCls}
            skippedProp="profileId"
          />
          <tbody>
            {campaigns.length !== 0 &&
              currentRows.map((item: ICampaign): ReactElement<[]> => {
                return (
                  <NavLink
                    key={item.campaignId}
                    className="link"
                    to={`/active-table/${item.campaignId}`}
                    state={{ from: location }}
                  >
                    <tr key={item.campaignId}>
                      <td>{item.campaignId}</td>
                      <td>{item.clicks}</td>
                      <td>{item.cost}</td>
                      <td>{item.date.toDateString()}</td>
                    </tr>
                  </NavLink>
                );
              })}
          </tbody>
        </table>
      </div>
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={campaigns.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
      {campaigns.length === 0 && <Loader />}
    </div>
  );
}

export default CampaignsTable;
