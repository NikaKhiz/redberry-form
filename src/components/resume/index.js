import React from "react";
import "./index.css";
import { useGlobalContext } from "../../context";
import star from "../../assets/images/star.png";

const Resume = () => {
  const { educations, experiences, privateInfo } = useGlobalContext();
  
  return (
    <div className="resumeCont">
      <h1>works fine</h1>
      <div className="starImg">
        <img src={star} alt="starImg" />
      </div>
    </div>
  );
};

export default Resume;
