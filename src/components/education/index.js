import React from "react";
import styled from "styled-components";
import Resume from "../resume";
import reset from "../../assets/images/reset.png";

const Education = () => {
  return (
    <>
      <div className="fieldsCont">
        <div className="reset">
          <img src={reset} alt="" />
        </div>
        <div className="fields">
          <div className="fieldsHeading">
            <h1>განათლება</h1>
            <p className="pages">3/3</p>
          </div>
          <form action="">
            <div className="groupsCont underline">
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
                  {/* <input
                    type="text"
                    placeholder="degree dropdown"
                    id="degree"
                    name="degree"
                  /> */}
                  <select
                    name="degree"
                    id="degree"
                    defaultValue={"airchie xarisxi"}
                  >
                  </select>
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
            </div>
            <StyledLine></StyledLine>
            <StyledButton>სხვა სასწავლებლის დამატება</StyledButton>
            <div className="formButtons">
              <button>უკან</button>
              <button>შემდეგი</button>
            </div>
          </form>
        </div>
      </div>
      <Resume />
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
export default Education;
