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
    privateInfo: { name, surname, image, about_me, email, phone_number },
  } = useGlobalContext();
  console.log(experiences);
  return (
    <>
      <div className="resume">
        {name || surname || image || about_me || email || phone_number ? (
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
            {image && (
              <div className="applicantImg">
                <img src={image} alt="" />
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
                <p className="heading">გამოცდილება</p>
                <div className="subheading">
                  <p>
                    {item.position}, {employer}
                  </p>
                  <p>
                    {item.start_date}
                    {item.due_date}
                  </p>
                </div>
                <div className="description">{item.description}</div>
              </div>
            );
          })}
        </div>
        <div className="educations">
          {educations.map((item, index) => {
            const { institute, degree, due_date, description } = item;
            return (
              <div className="education" key={index}>
                <p className="heading">განათლება </p>
                <div className="subheading">
                  <p>
                    {institute}, {degree}
                  </p>
                  <p>{due_date}</p>
                </div>
                <div className="description">{description}</div>
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
