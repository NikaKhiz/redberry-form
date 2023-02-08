import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const EducationFields = () => {
  const { education, addEducation } = useGlobalContext();
  return (
    <>
      {education.map((item, index) => {
        return (
          <div className="groupsCont" key={index}>
            <div className="formGroup">
              <div className="formControl">
                <label htmlFor="institute">სასწავლებელი</label>
                <input
                  type="text"
                  placeholder="სასწავლებელი"
                  id="institute"
                  name="institute"
                />
                <span className="hint">მინიმუმ 2 სიმბოლო</span>
              </div>
            </div>
            <div className="formGroup">
              <div className="formControl">
                <label htmlFor="degree">ხარისხი</label>
                <select
                  name="degree"
                  id="degree"
                  defaultValue={"airchie xarisxi"}
                ></select>
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
                  placeholder="განათლების აღწერა"
                ></textarea>
              </div>
            </div>
            <StyledLine></StyledLine>
          </div>
        );
      })}
      <StyledButton type="button" onClick={addEducation}>
        სხვა სასწავლებლის დამატება
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
`;
export default EducationFields;
