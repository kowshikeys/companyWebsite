import React from "react";
import Icon from "../../assets/images/Icon.svg";
import Footer from "../../assets/images/Footer.svg";
import "./Response.scss";

const Response: React.FC = () => {
  return (
    <div className="mobile-wrapper">
      <div className="center-content">
        <div className="gap">
          <img className="right" src={Icon} alt="" />
          <h1>mini website</h1>
        </div>

        <div className="company-title">
          <p>Company Profile</p>
        </div>
        <div className="profile">
          <p>Portfolio</p>
        </div>
      </div>
      <div className="footer">
        <img src={Footer} alt="" />
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Response;
