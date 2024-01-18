import { ReactElement, useEffect, useState } from "react";
import { campaignsData } from "../fakeApi";
import { ICampaign } from "../Types/campaignTypes";
import Loader from "../ui/Loader";
import "../AppLoyout.css";
import { useLocation } from "react-router-dom";
import { BackLink } from "../ui/BackLink";
import Pagination from "../ui/Pagination/Pagination";

function CompaignsTable() {
  const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const location = useLocation();
  const backlinkRef = location.state?.from ?? "/active-table/";
  const targetProfileId = location.state?.profileId;

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
    }, 1000);

    return () => {
      clearTimeout(idTimeout);
    };
  }, [targetProfileId]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = campaigns.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div>
      <BackLink to={backlinkRef}>Back to profiles</BackLink>
      <h2>Campaigns Table</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>campaignId</th>
              <th>clicks</th>
              <th>cost</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item: ICampaign): ReactElement<[]> => {
              return (
                <tr key={item.campaignId}>
                  <td>{item.campaignId}</td>
                  <td>{item.clicks}</td>
                  <td>{item.cost}</td>
                  <td>{item.date.toDateString()}</td>
                </tr>
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

export default CompaignsTable;