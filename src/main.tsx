import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLoyout from "./AppLoyout.tsx";
import Accounts from "./pages/Accounts.tsx";
import Profiles from "./pages/Profiles.tsx";
import Campaigns from "./pages/Campaigns.tsx";
import OneCampaign from "./pages/OneCampaign.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <AppLoyout />,
    children: [
      {
        index: true,
        path: "/active-table/",
        element: <Accounts />,
      },
      { path: "/active-table/profiles", element: <Profiles /> },
      {
        path: "/active-table/campaigns",
        element: <Campaigns />,
      },
      {
        path: "/active-table/:campaignId",
        element: <OneCampaign />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
