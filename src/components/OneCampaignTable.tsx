import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IOneCampaign } from "../Types/oneCampaignTypes";
import { campaignDescription } from "../fakeApi";
import Loader from "../ui/Loader";
import "../AppLoyout.css";
import { BackLink } from "../ui/BackLink";

function OneCompaignTable() {
  const [campaignDesc, setCampaignDesc] = useState<IOneCampaign>();
  const { campaignId } = useParams();
  const location = useLocation();
  const backlinkRef = location.state?.from ?? "/active-table/";

  useEffect(() => {
    const idTimeout: number = setTimeout(() => {
      setCampaignDesc(campaignDescription);
    }, 500);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  if (!campaignDesc) {
    return null;
  }

  const { name, campLocation, products, staff, profit, operatingСosts } =
    campaignDesc;
  return (
    <div>
      <BackLink to={backlinkRef}>Back to campaigns</BackLink>
      <h2>Campaign Description Table</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Campaign Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Products</th>
              <th>Staff</th>
              <th>OperatingСosts</th>
              <th>profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{campaignId}</td>
              <td>{name}</td>
              <td>{campLocation}</td>
              <td>{products}</td>
              <td>{staff}</td>
              <td>{operatingСosts}</td>
              <td>{profit}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {!campaignDesc && <Loader />}
    </div>
  );
}

export default OneCompaignTable;
