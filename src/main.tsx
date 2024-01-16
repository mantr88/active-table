import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accounts from "./pages/Accounts.tsx";
import Profiles from "./pages/Profiles.tsx";
import Campaigns from "./pages/Campaigns.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
