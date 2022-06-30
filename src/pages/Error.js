import React from "react";
import error from "../assets/images/error.jpg";
import { Link } from "react-router-dom";
import "./style/Error.css";
const Error = () => {
  return (
    <div className="Error-wrapper">
      <img src={error} alt="Error" className="error-img" />
      <div>
        <Link to="/" className="link-error">
          <h2>Back Home</h2>
        </Link>
      </div>
    </div>
  );
};

export default Error;
