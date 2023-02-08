import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const PrivateInfoFields = () => {
  const { privateInfo } = useGlobalContext();
  return (
    <>
      {privateInfo.map((item, index) => {
        return (
          <div className="groupsCont" key={index}>
            <div className="formGroup">
              <div className="formControl">
                <label htmlFor="name">სახელი</label>
                <input type="text" placeholder="ანზორ" id="name" name="name" />
                <span className="hint">მინიმუმ 2 ასო, ქართული ასოები</span>
              </div>
              <div className="formControl">
                <label htmlFor="surname">გვარი</label>
                <input
                  type="text"
                  placeholder="მუმლაძე"
                  id="surname"
                  name="surname"
                />
                <span className="hint">მინიმუმ 2 ასო, ქართული ასოები</span>
              </div>
            </div>
            <div className="formGroup">
              <div className="formControl">
                <label htmlFor="image">
                  პირადი ფოტოს ატვირთვა <StyledLabel>ატვირთვა</StyledLabel>
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="formGroup">
              <div className="formControl">
                <label htmlFor="about_me">ჩემ შესახებ (არასავალდებულო)</label>
                <textarea
                  name="about_me"
                  id="about_me"
                  cols="30"
                  rows="5"
                  placeholder="ზოგადი ინფო შენ შესახებ"
                ></textarea>
              </div>
            </div>
            <div className="formGroup">
              <div className="formControl">
                <label htmlFor="email">ელ.ფოსტა</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="anzorr@redberry.ge"
                />
                <span className="hint">უნდა მთავრდებოდეს @redberry.ge-ით</span>
              </div>
            </div>
            <div className="formGroup">
              <div className="formControl">
                <label htmlFor="phone_number">მობილურის ნომერი</label>
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="+995 551 12 34 56"
                />
                <span className="hint">
                  უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
const StyledLabel = styled.p`
  cursor: pointer;
  display: inline-block;
  background: var(--clr-primary-blue);
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 14px;
  color: var(--clr-primary-white);
  margin-left: 15px;
`;
export default PrivateInfoFields;
