import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const Experience = () => {
  return (
    <>
      <div className="groupsCont">
        <div className="formGroup">
          <div className="formControl">
            <label htmlFor="position">თანამდებობა</label>
            <input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              id="position"
              name="position"
            />
            <span className="hint">მინიმუმ 2 სიმბოლო</span>
          </div>
        </div>
        <div className="formGroup">
          <div className="formControl">
            <label htmlFor="employer">დამსაქმებელი</label>
            <input
              type="text"
              placeholder="დამსაქმებელი"
              id="employer"
              name="employer"
            />
            <span className="hint">მინიმუმ 2 სიმბოლო</span>
          </div>
        </div>
        <div className="formGroup">
          <div className="formControl">
            <label htmlFor="start_date">დაწყების რიცხვი</label>
            <input type="date" name="start_date" id="start_date" />
          </div>
          <div className="formControl">
            <label htmlFor="due_date">დამთავრების რიცხვი</label>
            <input type="date" name="due_date" id="due_date" />
          </div>
        </div>
        <div className="formGroup">
          <div className="formControl">
            <label htmlFor="description">აღწერა</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            ></textarea>
          </div>
        </div>
      </div>
      <StyledLine></StyledLine>
      <StyledButton>მეტი გამოცდილების დამატება</StyledButton>
    </>
  );
};
const StyledLine = styled.div`
  height: 1px;
  width: 100%;
  background: var(--clr-lighter-gray);
`;
const StyledButton = styled.button`
  color: var(--clr-primary-white);
  padding: 10px 21px;
  background-color: var(--clr-primary-blue);
  border: none;
  border-radius: 5px;
  max-width: max-content;
`;
export default Experience;
