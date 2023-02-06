import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import logo from "../../assets/images/logo.png";
import agencyRing from "../../assets/images/agencyRing.png";
import "./index.css";

const Welcome = () => {
  const { nextPage } = useGlobalContext();
  return (
    <div className="welcomeCont">
      <StyledHeader>
        <StyledImgCont>
          <StyledImg src={logo} alt="RDB logo" />
        </StyledImgCont>
      </StyledHeader>
      <StyledButton onClick={nextPage}>რეზიუმეს დამატება</StyledButton>
    </div>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 25px;
  border-bottom: 1px solid var(--clr-off-black);
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: flex-start;
`;
const StyledImgCont = styled.div`
  > * {
    width: 240px;
    height: 40px;
    display: block;
    object-fit: contain;
  }
`;
const StyledImg = styled.img``;
const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 20px 130px;
  background-color: var(--clr-off-black);
  color: var(--clr-primary-white);
  font-size: 20px;
  font-weight: var(--fw-neutral);
  cursor: pointer;
  position: relative;
  &:after {
    content: url(" ${agencyRing} ");
    position: absolute;
    top: -100%;
    right: -50%;
    transform: translate(-10%, 5%);
    pointer-events: none;
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

export default Welcome;
