import React from "react";
import "./index.css";
import star from "../../assets/images/star.png";
const Resume = () => {
  return (
    <div className="resumeCont">
      <h1>resume output</h1>
      <div className="starImg">
        <img src={star} alt="starImg" />
      </div>
    </div>
  );
};

export default Resume;
