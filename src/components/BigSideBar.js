import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import "./style/BigSidebar.css";
const BigSideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <div className="hidden lg:block">
      <div
        className={
          isSidebarOpen
            ? "big-bar-container"
            : "big-bar-container show-container-big"
        }
      >
        <div className="lg:sticky">
          <header>
            <Logo />
          </header>
          <div className="mt-10 flex justify-center">
            <NavLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSideBar;
