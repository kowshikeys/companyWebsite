import React from "react";
import Not from "../../assets/images/Bar.svg";
import "./NotFound.scss";

const NotFound: React.FC = () => {
  return (
    <div className="notFound">
      <img src={Not} alt="" />
    </div>
  );
};

export default NotFound;
