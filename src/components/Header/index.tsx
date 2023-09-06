import React from "react";
import Logo from "../../assets/icons/Logo.svg";
import Moon from "../../assets/icons/moon.svg";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="navbar-content">
          <div>
            <p>ABOUT</p>
          </div>
          <div>
            <p>WORK</p>
          </div>
          <div>
            <p>BLOG</p>
          </div>

          <img src={Moon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
