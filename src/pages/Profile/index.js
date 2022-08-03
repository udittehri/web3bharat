import React from "react";
import "./profileStyles.css";
import Rectangle from "../../images/rectangle1.png";
import Group1 from "../../images/Group1.svg";
import Group2 from "../../images/Group2.svg";
import Group3 from "../../images/Group3.svg";
import Group4 from "../../images/Group4.svg";
import Group5 from "../../images/Group5.svg";
import Group6 from "../../images/Group6.svg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="profile-background">
        <img src={Rectangle} alt="Rectangle" className="rectangle" />
        <div className="profile-container">
          <div className="profile-header">
            <h1 className="profile-header-1">Welcome to 30 Days </h1>
            <h1 className="profile-header-2">Web3Bharat Bootcamp</h1>
          </div>

          <div>
            <img src={Group1} className="profile-bootcamp-section" />
            <img src={Group2} className="profile-bootcamp-section" />
            <img src={Group3} className="profile-bootcamp-section" />
            <img src={Group4} className="profile-bootcamp-section" />
            <img src={Group5} className="profile-bootcamp-section" />
            <img src={Group6} className="profile-bootcamp-section" />
          </div>
          <Link to="/lesson-track">
            <button className="profile-button">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
