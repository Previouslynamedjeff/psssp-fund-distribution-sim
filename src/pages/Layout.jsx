import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="basis-16">
        <Navigation />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
