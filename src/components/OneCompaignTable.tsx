import { campaignsDescription } from "../fakeApi";

import { IOneCompaign } from "../Types/oneCompaignTypes";
import "../AppLoyout.css";
import { useEffect, useState } from "react";

function OneCompaignTable() {
  const [campaignsDesc, setCampaignsDesc] = useState<IOneCompaign[]>([]);

  useEffect(() => {
    const idTimeout: number = setTimeout(() => {
      setCampaignsDesc(campaignsDescription);
    }, 1000);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

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
              <th>profit</th>
              <th>operatingСosts</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((item: IOneCompaign): ReactElement<[]> => {
              return (
                <tr>
                  <td>{item.campaignId}</td>
                  <td>{item.clicks}</td>
                  <td>{item.cost}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {campaigns.length === 0 && <Loader />}
    </div>
  );
}

export default OneCompaignTable;
