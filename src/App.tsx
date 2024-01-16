import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/active-table/">Accounts</Link>
        <Link to="/active-table/profiles">Profiles</Link>
        <Link to="/active-table/campaigns">Campaigns</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
