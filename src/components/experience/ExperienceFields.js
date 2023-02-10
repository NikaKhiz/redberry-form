import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const ExperienceFields = () => {
  const {
    experience,
    setExperience,
    experiences,
    setExperiences,
    addExperiences,
    shouldReplace,
    setShouldReplace,
  } = useGlobalContext();
  const handleChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    setExperience({ ...experiences[index], [name]: value, index: index });
    setShouldReplace(true);
  };
  useEffect(() => {
    if (shouldReplace) {
      experiences.splice(experience.index, 1, experience);
    }
    setExperiences([...experiences]);
    sessionStorage.setItem("experiences", JSON.stringify(experiences));
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
                  value={item.employer}
                  onChange={(e) => handleChange(e, index)}
                />
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
                />
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
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
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
