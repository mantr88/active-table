import "../../AppLoyout.css";
import { IAccount } from "../../Types/accountTypes";
import { ICampaign } from "../../Types/campaignTypes";
import { cssClassTHeadType } from "../../Types/cssClassTHeadType";
import { IProfile } from "../../Types/profileTypes";

type DataType = IAccount | IProfile | ICampaign;

interface ITHeadProps<T> {
  data: T[];
  clickHeadCellHandler: (key: keyof T) => void;
  sortedCellsCls: (key: string) => cssClassTHeadType;
}

function TableHead({
  data,
  clickHeadCellHandler,
  sortedCellsCls,
}: ITHeadProps<DataType>) {
  return (
    <thead>
      <tr>
        {data.length !== 0 &&
          Object.keys(data[1]).map((item: string): JSX.Element => {
            const keyItem = item as keyof DataType;
            return (
              <th
                className={sortedCellsCls(keyItem)}
                onClick={() => clickHeadCellHandler(keyItem)}
              >
                {`${item}`}
              </th>
            );
          })}
      </tr>
    </thead>
  );
}

export default TableHead;
