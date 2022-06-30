import React from "react";
import { FaTimes } from "react-icons/fa";
import "./style/SmallSideBar.css";
import Logo from "./Logo.js";
import "./style/SmallSideBar.css";
import { toggleSideBar } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import NavLinks from "./NavLinks";
const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="lg:hidden">
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="text-red-600 text-2xl flex m-5" onClick={toggle}>
            <FaTimes />
          </button>
          <header className="mb-10 flex justify-center">
            <Logo />
          </header>
          <div className="ml-10 pt-2">
            <NavLinks toggleSidebar={toggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar;
