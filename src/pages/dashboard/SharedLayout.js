import React from "react";
import { Outlet } from "react-router-dom";
import { BigSideBar, Navbar, SmallSidebar } from "../../components";

const SharedLayout = () => {
  return (
    <div className="dashboard bg-white shadow-lg flex min-h-screen">
      <SmallSidebar />
      <BigSideBar />
      <div className="w-full min-h-screen">
        <Navbar />
        <div className="bg-slate-100 h-[85vh] overflow-auto border-l border-t border-gray-400 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
