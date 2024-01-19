import { HiArrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./Backlink.css";

interface IBackLinkProps {
  to: string;
  children: string;
}

export const BackLink = ({ to, children }: IBackLinkProps) => {
  return (
    <div className="backLinkWrap">
      <NavLink className="backLink" to={to}>
        <HiArrowLeft size="24" />
        {children}
      </NavLink>
    </div>
  );
};
