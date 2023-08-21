import React, { useState, useEffect } from "react";
import Sidebar from "./../components/dashboard/Sidebar";
import Topbar from "./../components/dashboard/TopBar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Profile from "../components/dashboard/Profile";
import AddPackage from "../components/dashboard/AddPackage";
import { useLocation } from "react-router-dom";
import Packages from "../components/dashboard/Packages";

export const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const [tab, setTab] = useState(null);
  const { pathname } = useLocation();

  const dashboardRouter = () => {
    switch (pathname.split("/")[2]) {
      case "Add":
        setTab(1);
        break;
      case "Profile":
        setTab(2);
        break;
      case "Packages":
        setTab(3);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dashboardRouter();
  }, [pathname]);

  return (
    <>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          {tab == 1 ? <AddPackage /> : tab == 2 ? <Profile /> : tab == 3 ? <Packages/> : null}
        </main>
      </div>
    </>
  );
};
