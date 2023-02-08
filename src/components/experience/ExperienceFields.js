import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const ExperienceFields = () => {
  const { experience, setExperience, addExperience } = useGlobalContext();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExperience({ ...experience, [name]: value });
  };
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
              value={experience.position}
              onChange={handleChange}
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
              value={experience.employer}
              onChange={handleChange}
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
              value={experience.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <StyledLine></StyledLine>
      </div>
      <StyledButton type="button" onClick={addExperience}>
        მეტი გამოცდილების დამატება
      </StyledButton>
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
  cursor: pointer;
`;
export default ExperienceFields;
