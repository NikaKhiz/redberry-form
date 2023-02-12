import React from "react";
import "./index.css";
import { useGlobalContext } from "../../context";
import star from "../../assets/images/star.png";
import mail from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";

const Resume = () => {
  const {
    educations,
    experiences,
    privateInfo: { name, surname, imageBase, about_me, email, phone_number },
  } = useGlobalContext();
  return (
    <>
      <div className="resume">
        {name || surname || imageBase || about_me || email || phone_number ? (
          <div className="personal">
            <div className="personalInfo">
              <h1 className="heading">
                {name} {surname}
              </h1>
              <div className="contacts">
                {email && (
                  <p className="contact">
                    <img src={mail} alt="" />
                    {email}
                  </p>
                )}
                {phone_number && (
                  <p className="contact">
                    <img src={phone} alt="" />
                    {phone_number}
                  </p>
                )}
              </div>
              {about_me && (
                <div className="description">
                  <p className="heading">ჩემ შესახებ</p>
                  {about_me}
                </div>
              )}
            </div>
            {imageBase && (
              <div className="applicantImg">
                <img src={imageBase} alt="" />
              </div>
            )}
          </div>
        ) : null}

        <div className="experiences">
          {experiences.map((item, index) => {
            const { position, employer, start_date, due_date, description } =
              item;
            return (
              <div className="experience" key={index}>
                {position ||
                employer ||
                start_date ||
                due_date ||
                description ? (
                  <p className="heading">გამოცდილება</p>
                ) : null}

                <div className="subheading">
                  <p>
                    {position ? position + "," : null}{" "}
                    {employer ? employer : null}
                  </p>
                  <p style={{ fontStyle: "italic" }}>
                    {start_date ? start_date + " - " : null}
                    {due_date ? due_date : null}
                  </p>
                </div>
                {description ? (
                  <div className="description">{description}</div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="educations">
          {educations.map((item, index) => {
            const { institute, degree, due_date, description } = item;
            return (
              <div className="education" key={index}>
                {institute || degree || due_date || description ? (
                  <p className="heading">განათლება </p>
                ) : null}
                <div className="subheading">
                  <p>
                    {institute ? institute + "," : null}{" "}
                    {degree ? degree : null}
                  </p>
                  <p style={{ fontStyle: "italic" }}>
                    {due_date ? due_date : null}
                  </p>
                </div>
                {description ? (
                  <div className="description">{description}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="starImg">
        <img src={star} alt="starImg" />
      </div>
    </>
  );
};

export default Resume;
