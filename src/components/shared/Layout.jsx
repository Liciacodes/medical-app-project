import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../shared/SideBar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex bg-[#f5f6fa] w-screen h-screen gap-0">
      <SideBar />

      <div className="flex-1">
        <Header />
        <div className="p-4">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
