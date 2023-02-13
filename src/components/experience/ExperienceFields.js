import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import warning from "../../assets/images/warning.png";
import success from "../../assets/images/ready.png";

const ExperienceFields = () => {
  const {
    experience,
    setExperience,
    experiences,
    setExperiences,
    addExperiences,
    shouldReplace,
    setShouldReplace,
    experiencesError,
    setExperiencesError,
  } = useGlobalContext();
  const {
    positionError,
    employerError,
    startError,
    endError,
    descriptionError,
  } = experiencesError;
  const handleChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "position") {
      if (value.length >= 2) {
        setExperiencesError({ ...experiencesError, positionError: false });
      } else {
        setExperiencesError({ ...experiencesError, positionError: true });
      }
    }
    if (name === "employer") {
      if (value.length >= 2) {
        setExperiencesError({ ...experiencesError, employerError: false });
      } else {
        setExperiencesError({ ...experiencesError, employerError: true });
      }
    }
    if (name === "start_date") {
      if (value) {
        setExperiencesError({ ...experiencesError, startError: false });
      } else {
        setExperiencesError({ ...experiencesError, startError: true });
      }
    }
    if (name === "due_date") {
      if (value) {
        setExperiencesError({ ...experiencesError, endError: false });
      } else {
        setExperiencesError({ ...experiencesError, endError: true });
      }
    }
    if (name === "description") {
      if (value.length >= 2) {
        setExperiencesError({ ...experiencesError, descriptionError: false });
      } else {
        setExperiencesError({ ...experiencesError, descriptionError: true });
      }
    }
    setExperience({ ...experiences[index], [name]: value, index: index });
    setShouldReplace(true);
  };
  useEffect(() => {
    if (shouldReplace) {
      experiences.splice(experience.index, 1, experience);
    }
    setExperiences([...experiences]);
    sessionStorage.setItem("experiences", JSON.stringify(experiences));
    sessionStorage.setItem("expError", JSON.stringify(experiencesError));
  }, [experience]);
  return (
    <>
      {experiences.map((item, index) => {
        return (
          <div className="groupsCont" key={index}>
            <div className="formGroup">
              <div className="formControl">
                <label htmlFor="position">თანამდებობა</label>
                <input
                  type="text"
                  placeholder="დეველოპერი, დიზაინერი, ა.შ."
                  id="position"
                  name="position"
                  value={item.position}
                  onChange={(e) => handleChange(e, index)}
                  className={positionError ? "error" : "success"}
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
                <label htmlFor="employer">დამსაქმებელი</label>
                <input
                  type="text"
                  placeholder="დამსაქმებელი"
                  id="employer"
                  name="employer"
                  value={item.employer}
                  onChange={(e) => handleChange(e, index)}
                  className={employerError ? "error" : "success"}
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
                <label htmlFor="start_date">დაწყების რიცხვი</label>
                <input
                  type="date"
                  name="start_date"
                  id="start_date"
                  value={item.start_date}
                  onChange={(e) => handleChange(e, index)}
                  className={startError ? "error" : "success"}
                />
                <div className="warning">
                  <img src={warning} alt="warning" />
                </div>
                <div className="ready">
                  <img src={success} alt="warning" />
                </div>
              </div>
              <div className="formControl">
                <label htmlFor="due_date">დამთავრების რიცხვი</label>
                <input
                  type="date"
                  name="due_date"
                  id="due_date"
                  value={item.due_date}
                  onChange={(e) => handleChange(e, index)}
                  className={endError ? "error" : "success"}
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
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  value={item.description}
                  onChange={(e) => handleChange(e, index)}
                  className={descriptionError ? "error" : "success"}
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
          addExperiences();
        }}
      >
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
