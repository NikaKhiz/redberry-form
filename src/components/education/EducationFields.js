import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import dropdown from "../../assets/images/dropdown.png";
import warning from "../../assets/images/warning.png";
import success from "../../assets/images/ready.png";

const EducationFields = () => {
  const {
    educations,
    setEducations,
    education,
    setEducation,
    addEducations,
    degrees,
    getDegrees,
    shouldReplace,
    setShouldReplace,
    educationsError,
    setEducationsError,
  } = useGlobalContext();
  useEffect(() => {
    getDegrees();
  }, [educations]);
  const { instituteError, dueDateError, descrError } = educationsError;
  const handleChange = (e, index, id) => {
    const name = e.target.name;
    const value = e.target.value;
    id = 1;
    if (name === "degree") {
      for (let i = 0; i < degrees.length; i++) {
        if (degrees[i].title === value) {
          id = degrees[i].id;
          break;
        }
      }
    }
    if (name === "institute") {
      if (value.length >= 2) {
        setEducationsError({ ...educationsError, instituteError: false });
      } else {
        setEducationsError({ ...educationsError, instituteError: true });
      }
    }
    if (name === "description") {
      if (value.length >= 2) {
        setEducationsError({ ...educationsError, descrError: false });
      } else {
        setEducationsError({ ...educationsError, descrError: true });
      }
    }
    if (name === "due_date") {
      if (value) {
        setEducationsError({ ...educationsError, dueDateError: false });
      } else {
        setEducationsError({ ...educationsError, dueDateError: true });
      }
    }
    setEducation({
      ...educations[index],
      [name]: value,
      index: index,
      degree_id: id,
    });
    setShouldReplace(true);
  };
  useEffect(() => {
    if (shouldReplace) {
      educations.splice(education.index, 1, education);
    }
    setEducations([...educations]);
    sessionStorage.setItem("educations", JSON.stringify(educations));
    sessionStorage.setItem("eduError", JSON.stringify(educationsError));
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
                  className={instituteError ? "error" : "success"}
                />
                <div className="warning">
                  <img src={warning} alt="warning" />
                </div>
                <div className="ready">
                  <img src={success} alt="warning" />
                </div>
                <span className="hint">მინიმუმ 2 სიმბოლო</span>
              </div>
            </div>
            <div className="formGroup">
              <div className="formControl">
                <label htmlFor="degree">ხარისხი</label>
                <StyledDropdown>
                  <StyledSelect
                    name="degree"
                    id="degree"
                    value={item.degree}
                    onChange={(e, id) => handleChange(e, index, id)}
                  >
                    {degrees.map((degree) => {
                      return (
                        <option value={degree.title} key={degree.id}>
                          {degree.title}
                        </option>
                      );
                    })}
                  </StyledSelect>

                  <StyledDropImg>
                    <img src={dropdown} alt="" />
                  </StyledDropImg>
                </StyledDropdown>
              </div>
              <div className="formControl">
                <label htmlFor="due_date">დამთავრების რიცხვი</label>
                <input
                  type="date"
                  name="due_date"
                  id="due_date"
                  value={item.due_date}
                  onChange={(e) => handleChange(e, index)}
                  className={dueDateError ? "error" : "success"}
                />
                <div className="warning">
                  <img src={warning} alt="warning" />
                </div>
                <div className="ready">
                  <img src={success} alt="warning" />
                </div>
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
                  className={descrError ? "error" : "success"}
                ></textarea>
                <div className="warning">
                  <img src={warning} alt="warning" />
                </div>
                <div className="ready">
                  <img src={success} alt="warning" />
                </div>
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
const StyledDropdown = styled.div`
  min-width: 250px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
`;
const StyledSelect = styled.select`
  border: none;
  appearance: none;
  outline: none;
  background: none;
  padding: 0 30px 0 15px;
  color: #1a1a1a;
`;
const StyledDropImg = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default EducationFields;
