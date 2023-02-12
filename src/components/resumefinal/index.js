import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import "./index.css";
import Resume from "../resume";
import reset from "../../assets/images/reset.png";

const ResumeFinal = () => {
  const { resetForm } = useGlobalContext();
  return (
    <>
      <div className="finalResume">
        <div>
          <button type="button" onClick={resetForm} className="resetBtn">
            <img src={reset} alt="" />
          </button>
        </div>
        <div className="resumeCont">
          <Resume />
        </div>
        <div className="modalCont"></div>
      </div>
    </>
  );
};

export default ResumeFinal;
