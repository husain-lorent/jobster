import React, { useState } from "react";
import { FaUserCircle, FaAlignLeft, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearStore, toggleSideBar } from "../features/user/userSlice";
import "./style/Navbar.css";
import Logo from "./Logo";
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="h-[15vh] flex items-center w-full bg-white">
      <button
        type="button"
        className="toggle-btn pl-4 pr-2 lg:pl-8 text-blue-600 text-xl"
        onClick={toggle}
      >
        <FaAlignLeft />
      </button>
      <div>
        <div className="lg:hidden ml-3 block mb-4">
          <Logo />
        </div>
        <h3 className="hidden lg:block text-4xl font-semibold text-center pl-[50vh]">
          Dashboard
        </h3>
      </div>
      <div className="btn-container">
        <button
          className="btn"
          type="button"
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUserCircle />
          {user.name}
          <FaCaretDown />
        </button>
        <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
          <button
            className="text-center mr-3 text-blue-700 font-medium bg-blue-100 py-2 px-4 rounded "
            type="button"
            onClick={() => dispatch(clearStore("Logging Out..."))}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
