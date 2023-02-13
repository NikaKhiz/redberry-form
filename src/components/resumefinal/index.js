import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import FinalResumeGlobal from "./FinalResumeGlobal";
import reset from "../../assets/images/reset.png";
import star from "../../assets/images/star.png";
import mail from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
const ResumeFinal = () => {
  const [modal, setModal] = useState(true);
  const { resetForm, gottenData } = useGlobalContext();
  const {
    name,
    surname,
    email,
    phone_number,
    image,
    experiences,
    educations,
    about_me,
  } = gottenData;
  return (
    <>
      <FinalResumeGlobal modal={modal} />
      <div className="finalResumeCont">
        <div className="reset">
          <button type="button" onClick={resetForm} className="resetBtn">
            <img src={reset} alt="" />
          </button>
        </div>
        <div className="finalResume">
          <div className="resumeOutput">
            <div className="privateInfo">
              <div className="private">
                <h1>
                  {name} {surname}
                </h1>
                <div className="contacts">
                  <p className="contact">
                    <img src={mail} alt="" /> <span>{email}</span>
                  </p>
                  <p className="contact">
                    <img src={phone} alt="" /> <span>{phone_number}</span>
                  </p>
                </div>
                <div className="aboutMe">
                  <p className="heading">ჩემ შესახებ</p>
                  <p>{about_me}</p>
                </div>
              </div>
              <div className="privateImg">
                <img
                  src={`https://resume.redberryinternship.ge${image}`}
                  alt=""
                />
              </div>
            </div>
            <div className="experiences">
              {experiences &&
                experiences.map((item, index) => {
                  const {
                    position,
                    employer,
                    start_date,
                    due_date,
                    description,
                  } = item;
                  return (
                    <div className="experience" key={index}>
                      <p className="heading">გამოცდილება</p>
                      <p className="subheading">
                        {position}, {employer}
                      </p>
                      <p>
                        {start_date} - {due_date}
                      </p>
                      <p className="description">{description}</p>
                    </div>
                  );
                })}
            </div>
            <div className="educations">
              {educations &&
                educations.map((item, index) => {
                  const { institute, degree, due_date, description } = item;
                  return (
                    <div className="experience" key={index}>
                      <p className="heading">განათლება</p>
                      <p className="subheading">
                        {institute}, {degree}
                      </p>
                      <p>{due_date}</p>
                      <p className="description">{description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="starImg">
            <img src={star} alt="starImg" />
          </div>
        </div>
        <div className="modalCont">
          <div className="modal">
            <p className="modalText">რეზიუმე წარმატებით გაიგზავნა</p>
            <button className="closeModal" onClick={() => setModal(!modal)}>
              <span>x</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeFinal;
