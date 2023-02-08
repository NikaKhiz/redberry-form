import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
const EducationFields = () => {
  const { setEducation, education, addEducation, degrees, getDegrees } =
    useGlobalContext();
  useEffect(() => {
    getDegrees();
  }, []);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEducation({ ...education, [name]: value });
  };
  return (
    <>
      <div className="groupsCont">
        <div className="formGroup">
          <div className="formControl">
            <label htmlFor="institute">სასწავლებელი</label>
            <input
              type="text"
              placeholder="სასწავლებელი"
              id="institute"
              name="institute"
              value={education.institute}
              onChange={handleChange}
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
              value={education.degree}
              onChange={handleChange}
            >
              {degrees.map((degree) => {
                return (
                  <option value={degree.title} key={degree.id}>
                    {degree.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="formControl">
            <label htmlFor="due_date">დამთავრების რიცხვი</label>
            <input
              type="date"
              name="due_date"
              id="due_date"
              value={education.due_date}
              onChange={handleChange}
            />
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
              value={education.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <StyledLine></StyledLine>
      </div>
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
  cursor: pointer;
`;
export default EducationFields;
