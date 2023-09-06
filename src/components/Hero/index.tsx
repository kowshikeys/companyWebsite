import React from "react";
import Header from "../Header";
import Image from "../../assets/images/Hero.png";
import Text1 from "../../assets/images/Handheld..svg";
import Text2 from "../../assets/images/All the way..svg";
import "./Hero.scss";
import Logo from "../../assets/icons/Logo.svg";
import Moon from "../../assets/icons/moon.svg";
import { useState } from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import Blog from "../Blog";
import Logohover from "../../assets/icons/Logohover.svg";

const Hero: React.FC = () => {
  const [isActive, setIsActive] = useState("About");
  return (
    <div className="hero-wrapper">
      <div className="header-wrapper">
        <div className="logo">
          <img className="logo1" src={Logo} alt="" />
          <img className="logohover" src={Logohover} alt="" />
        </div>
        <div className="navbar-content">
          <div
            onClick={() => setIsActive("About")}
            className={`nav ${isActive === "About" ? "active" : ""}`}
          >
            <p>ABOUT</p>
          </div>
          <div
            onClick={() => setIsActive("Work")}
            className={`nav ${isActive === "Work" ? "active" : ""}`}
          >
            <p>WORK</p>
          </div>
          <div
            onClick={() => setIsActive("Blog")}
            className={`nav ${isActive === "Blog" ? "active" : ""}`}
          >
            <Link to="/blog">
              <p>BLOG</p>
            </Link>
          </div>

          <img src={Moon} alt="" />
        </div>
      </div>
      {isActive === "About" && (
        <>
          <div className="hero-box">
            <div className="text">
              <img className="hand" src={Text1} alt="" />
              <img className="way" src={Text2} alt="" />
            </div>
          </div>
          <p className="request">CLICK ANYWHERE TO DOWNLOAD COMPANY PROFILE</p>
          <div className="img">{/* <img src={Image} alt="" /> */}</div>
        </>
      )}

      {isActive === "Work" && (
        <>
          <div className="work-box">
            <div className="box1">
              <div className="background"></div>
              <h5>OUR CLIENT</h5>
              <p>BEST SERVICE WE’RE EVER COME ACROSS</p>
            </div>
            <div className="box2"></div>
          </div>
          <p className="request">CLICK ANYWHERE TO DOWNLOAD COMPANY PROFILE</p>
        </>
      )}

      {isActive === "Blog" && (
        <div>
          <h1>Hello</h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
