import React, { useEffect } from "react";
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
import { motion } from "framer-motion";

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
  autoplaySpeed: 5000,
};

const Hero: React.FC = () => {
  const [isActive, setIsActive] = useState("About");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isActive !== "About") {
      setShowLoader(false);
      return;
    }
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 8600);

    return () => {
      clearTimeout(timeout);
    };
  }, [isActive]);

  return (
    <div className="hero-wrapper">
      <motion.div
        className="header-wrapper"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
      >
        <div className="logo">
          <img className="logo1" src={Logohover} alt="" />
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
      </motion.div>
      {isActive === "About" && (
        <div className="about-wrapper">
          <motion.div
            className="hero-box"
            initial={{ opacity: 0, marginTop: "0" }}
            animate={{ opacity: 1, marginTop: "20px", transition: { duration: 1 } }}
          >
            <motion.div
              className="hero-box-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.7, duration: 2 } }}
            >
              <div className="text">
                <motion.img
                  className="hand"
                  src={Text1}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 4.5, duration: 1 } }}
                />
                <div className="flex">
                  <motion.img
                    className="way"
                    src={All}
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 5.5, duration: 1.5 } }}
                  />
                  <motion.img
                    className="way"
                    src={The}
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 6.5, duration: 0.7 } }}
                  />
                  <motion.img
                    className="way"
                    src={Way}
                    alt=""
                    style={{ marginTop: "15px" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 6.6, duration: 0.7 } }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.p
            className="request"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
          >
            CLICK ANYWHERE TO DOWNLOAD COMPANY PROFILE
          </motion.p>
          {showLoader && (
            <motion.div
              className="loading-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            >
              <Loading setIsActive={setIsActive} />
            </motion.div>
          )}

          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 1 } }}
          ></motion.div>
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
