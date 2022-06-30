import React from "react";
import { SiJoplin } from "react-icons/si";
import "./style/Logo.css"
const Logo = () => {
  return (
      <nav>
        <SiJoplin className="logo" />
        <h1 className="logo-jobs">Jobs</h1>
      </nav>
  );
};

export default Logo;
