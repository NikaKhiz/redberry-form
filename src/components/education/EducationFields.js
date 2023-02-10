import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
const EducationFields = () => {
  const {
    educations,
    setEducations,
    education,
    setEducation,
    addEducations,
    degrees,
    getDegrees,
  } = useGlobalContext();
  useEffect(() => {
    getDegrees();
  }, [educations]);
  
  const handleChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    setEducation({ ...education, [name]: value, index: index });
  };
  useEffect(() => {
    educations.splice(education.index, 1, education);
    setEducations([...educations]);
  }, [education]);
  return (
    <>
      {educations.map((item, index) => {
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
                  value={item.institute}
                  onChange={(e) => handleChange(e, index)}
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
                  value={item.degree}
                  onChange={(e) => handleChange(e, index)}
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
                  value={item.due_date}
                  onChange={(e) => handleChange(e, index)}
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
                  value={item.description}
                  onChange={(e) => handleChange(e, index)}
                ></textarea>
              </div>
            </div>
            <StyledLine></StyledLine>
          </div>
        );
      })}

      <StyledButton
        type="button"
        onClick={() => {
          addEducations();
        }}
      >
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
