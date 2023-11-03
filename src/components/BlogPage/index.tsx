import React, { useState } from "react";
import "./Blog.scss";
import Logohover from "../../assets/icons/Logohover.svg";
import Moon from "../../assets/icons/moon.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tooltip from "../Tooltip";
import Post1 from "./BlogList/BlogList1";
import Post2 from "./BlogList/BlogList2";
import Post3 from "./BlogList/BlogList3";

const BlogPage: React.FC = () => {
  const [isActive, setIsActive] = useState("Blog");
  return (
    <div className="BlogPage-wrapper">

      {/* ========================= Header ========================= */}
      <motion.div
        className="header-wrapper"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
      >
        <div className="logo">
          <Link to="/">
            <img className="logo1" src={Logohover} alt="" />
          </Link>
        </div>
        <div className="navbar-content">
          <div
            onClick={() => setIsActive("About")}
            className={`nav ${isActive === "About" ? "active" : ""}`}
          >
            <Link to="/">
              <p>ABOUT</p>
            </Link>
          </div>
          <div
            onClick={() => setIsActive("Work")}
            className={`nav ${isActive === "Work" ? "active" : ""}`}
          >
            <Link to="/">
              <p>WORK</p>
            </Link>
          </div>
          <div
            onClick={() => setIsActive("Blog")}
            className={`nav ${isActive === "Blog" ? "active" : ""}`}
          >
            <Link to="/blog">
              <p>BLOG</p>
            </Link>
          </div>
          <Tooltip text={"work in progress"}>
          <img src={Moon} alt="" />
          </Tooltip>
        </div>
      </motion.div>

      <div className="blogPost">
        <Post1 />
        <Post2 />
        <Post3 />

      </div>
    </div>
  );
};

export default BlogPage;