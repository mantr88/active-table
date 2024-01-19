import "./AppLoyout.css";
import { Outlet } from "react-router-dom";

function AppLoyout() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default AppLoyout;
