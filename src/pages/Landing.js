import React from "react";
import { Link } from "react-router-dom";
import secimg from "../assets/images/secimg.jpg";
import { Logo } from "../components";
import "./style/Landing.css";
const Landing = () => {
  return (
    <main>
      <nav><Logo/></nav>
      <div className="container page">
        {/* info*/}
        <div className="info">
          <h1 className="title-h1">
            Job <span className="text-blue-600">Tracking</span> App
          </h1>
          <p className="info-text">
            Ready to build the future with the Amazon’s Global Robotics Team?
            Design, test, and build our dynamic fleet of robots and mechatronic
            systems. Inclusive workplace. Network of support. Full time careers.
            Solve real-world problems. Apply now. Work from home options.
          </p>
          <div>
            <Link className="btn-hero" to='/register'>Login/Register</Link>
          </div>
        </div>
        <img src={secimg} alt="job img" className="main-img" />
      </div>
    </main>
  );
};

export default Landing;
