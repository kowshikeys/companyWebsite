import React from "react";
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
import Loading from "../Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import All from "../../assets/images/All.svg";
import The from "../../assets/images/the.svg";
import Way from "../../assets/images/way.svg";
import video from "../../assets/images/video.mp4";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  touchThreshold: 100,
  arrows: false,
};

const Hero: React.FC = () => {
  const [isActive, setIsActive] = useState("About");
  return (
    <div className="hero-wrapper">
      <div className="header-wrapper">
        <div className="logo">
          <img className="logo1" src={Logo} alt="" />
          {/* <img className="logohover" src={Logohover} alt="" /> */}
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
        <div className="about-wrapper">
          <div className="hero-box">
            <div className="text">
              <img className="hand" src={Text1} alt="" />
              <div className="flex">
                <img className="way" src={All} alt="" />
                <img className="way" src={The} alt="" />
                <img className="way" src={Way} alt="" />
              </div>
            </div>
          </div>
          <p className="request">CLICK ANYWHERE TO DOWNLOAD COMPANY PROFILE</p>
          <div className="loading-content">
            <Loading setIsActive={setIsActive} />
          </div>
        </div>
      )}

      {isActive === "Work" && (
        <>
          <div className="work-box">
            <div className="box1">
              <div className="slider-carousel">
                {/* <Slider {...settings}>
                  <div className="slider-card">
                    <div className="background"></div>
                  </div>
                  <div className="slider-card">
                    <div
                      className="background"
                      style={{ backgroundColor: "red" }}
                    ></div>
                  </div>
                  <div className="slider-card">
                    <div
                      className="background"
                      style={{ backgroundColor: "green" }}
                    ></div>
                  </div>
                  <div className="slider-card">
                    <div className="background"></div>
                  </div>
                </Slider> */}
              </div>

              {/* <h5>OUR CLIENT</h5> */}
              <div className="slider-carousel">
                <Slider {...settings}>
                  <div className="slider-card-content">
                    <p>BEST SERVICE WE’RE EVER COME ACROSS 1</p>
                    <h5>BEST SERVICE WE’RE EVER COME ACROSS</h5>
                  </div>
                  <div className="slider-card-content">
                    <p>BEST SERVICE WE’RE EVER COME ACROSS 2</p>
                    <h5>BEST SERVICE WE’RE EVER COME ACROSS</h5>
                  </div>
                  <div className="slider-card-content">
                    <p>BEST SERVICE WE’RE EVER COME ACROSS 3</p>
                    <h5>BEST SERVICE WE’RE EVER COME ACROSS</h5>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="box2">
              <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </div>
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
