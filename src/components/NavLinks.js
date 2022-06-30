import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive
                ? "nav-link active text-blue-500 flex font-medium mb-4 text-lg"
                : "nav-link font-medium text-lg flex mb-4 text-gray-800";
            }}
            key={id}
            onClick={toggleSidebar}
          >
            <span className="flex text-xl font-sans items-center mr-5">
              {icon}
            </span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
