import { IOneCampaign } from "../Types/oneCampaignTypes";
import "../AppLoyout.css";
import { useEffect, useState } from "react";
import { campaignDescription } from "../fakeApi";
import Loader from "../ui/Loader";

interface IOneCampProps {
  campaignId: string;
}

function OneCompaignTable({ campaignId }: IOneCampProps) {
  const [campaignDesc, setCampaignDesc] = useState<IOneCampaign>();

  useEffect(() => {
    const idTimeout: number = setTimeout(() => {
      setCampaignDesc(campaignDescription);
    }, 1000);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  if (!campaignDesc) {
    return null; // Or render some placeholder content
  }

  const { name, location, products, staff, profit, operatingСosts } =
    campaignDesc;
  return (
    <div>
      <h2>Campaigns Table</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>campaignId</th>
              <th>name</th>
              <th>location</th>
              <th>products</th>
              <th>staff</th>
              <th>operatingСosts</th>
              <th>profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{campaignId}</td>
              <td>{name}</td>
              <td>{location}</td>
              <td>{products}</td>
              <td>{staff}</td>
              <td>{operatingСosts}</td>
              <td>{profit}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {campaignDescription && <Loader />}
    </div>
  );
}

export default OneCompaignTable;
