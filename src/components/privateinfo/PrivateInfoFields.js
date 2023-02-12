import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import warning from "../../assets/images/warning.png";
import success from "../../assets/images/ready.png";

const PrivateInfoFields = () => {
  const {
    privateInfo,
    setPrivateInfo,
    sessionStorage,
    privateInfoError,
    setPrivateInfoError,
  } = useGlobalContext();
  const {
    nameError,
    nameSuccess,
    surnameSuccess,
    surnameError,
    imageSuccess,
    imageError,
    emailSuccess,
    emailError,
    phoneError,
    phoneSuccess,
  } = privateInfoError;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
      const nameReg = /^([ა-ჰ]{2,12})$/.test(value);
      if (nameReg) {
        setPrivateInfoError({ ...privateInfoError, nameError: false });
      } else {
        setPrivateInfoError({ ...privateInfoError, nameError: true });
      }
    }
    if (name === "surname") {
      const nameReg = /^([ა-ჰ]{2,12})$/.test(value);
      if (nameReg) {
        setPrivateInfoError({ ...privateInfoError, surnameError: false });
      } else {
        setPrivateInfoError({ ...privateInfoError, surnameError: true });
      }
    }
    if (name === "email") {
      const mailReg = /^[a-zA-Z0-9.]+@redberry.ge$/.test(value);
      if (mailReg) {
        setPrivateInfoError({ ...privateInfoError, emailError: false });
      } else {
        setPrivateInfoError({ ...privateInfoError, emailError: true });
      }
    }
    if (name === "phone_number") {
      const phoneReg = /^(\+?995)?\s\d\d\d\s\d\d\s\d\d\s\d\d$/.test(value);
      if (phoneReg) {
        setPrivateInfoError({ ...privateInfoError, phoneError: false });
      } else {
        setPrivateInfoError({ ...privateInfoError, phoneError: true });
      }
    }
    if (name === "image") {
      // get a file and tarnsform it to base64 format
      const file = e.target.files[0];
      if (file) {
        setPrivateInfoError({ ...privateInfoError, imageError: false });
      } else {
        setPrivateInfoError({ ...privateInfoError, imageError: true });
      }
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      toBase64(file).then((data) => {
        setPrivateInfo({
          ...privateInfo,
          imageBase: data,
        });
      });
    }
    setPrivateInfo({ ...privateInfo, [name]: value });
  };

  useEffect(() => {
    sessionStorage.setItem("personal", JSON.stringify(privateInfo));
  });
  return (
    <>
      <div className="groupsCont">
        <div className="formGroup">
          <div className="formControl">
            <label htmlFor="name">სახელი</label>
            <input
              type="text"
              placeholder="ანზორ"
              id="name"
              name="name"
              value={privateInfo.name}
              onChange={handleChange}
              className={nameError ? "error" : "success"}
            />
            <div className="warning">
              <img src={warning} alt="warning" />
            </div>
            <div className="ready">
              <img src={success} alt="warning" />
            </div>
            <span className="hint">მინიმუმ 2 ასო, ქართული ასოები</span>
          </div>
          <div className="formControl">
            <label htmlFor="surname">გვარი</label>
            <input
              type="text"
              placeholder="მუმლაძე"
              id="surname"
              name="surname"
              value={privateInfo.surname}
              onChange={handleChange}
              className={surnameError ? "error" : "success"}
            />
            <div className="warning">
              <img src={warning} alt="warning" />
            </div>
            <div className="ready">
              <img src={success} alt="warning" />
            </div>
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
              className={imageError ? "error" : "success"}
              style={{ display: "none" }}
              onChange={handleChange}
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
            <label htmlFor="about_me">ჩემ შესახებ (არასავალდებულო)</label>
            <textarea
              name="about_me"
              id="about_me"
              cols="30"
              rows="5"
              placeholder="ზოგადი ინფო შენ შესახებ"
              value={privateInfo.about_me}
              onChange={handleChange}
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
              value={privateInfo.email}
              onChange={handleChange}
              className={emailError ? "error" : "success"}
            />
            <div className="warning">
              <img src={warning} alt="warning" />
            </div>
            <div className="ready">
              <img src={success} alt="warning" />
            </div>
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
              value={privateInfo.phone_number}
              onChange={handleChange}
              className={phoneError ? "error" : "success"}
            />
            <div className="warning">
              <img src={warning} alt="warning" />
            </div>
            <div className="ready">
              <img src={success} alt="warning" />
            </div>
            <span className="hint">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </span>
          </div>
        </div>
      </div>
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
