import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const location = useLocation();
  const isMobileLayout = () =>
    window.matchMedia(
      "(max-width: 1100px), (max-device-width: 1100px), (hover: none) and (pointer: coarse)"
    ).matches;
  const [isMobile, setIsMobile] = React.useState(isMobileLayout());

  React.useEffect(() => {
    const handleResize = () => setIsMobile(isMobileLayout());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const path = location.pathname || "/";
  const isSummaryRoute = path === "/" || path === "/dashboard";
  const shouldShowWatchList = !isMobile || isSummaryRoute;

  return (
    <div className="dashboard-container">
      {shouldShowWatchList ? (
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      ) : null}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/dashboard" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/dashboard/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/dashboard/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/dashboard/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/dashboard/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
