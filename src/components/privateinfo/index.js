import React from "react";
import Resume from "../resume";
import reset from "../../assets/images/reset.png";
const PrivateInfo = () => {
  return (
    <>
      <div className="fieldsCont">
        <div className="reset">
          <img src={reset} alt="" />
        </div>
        <div className="fields">
          <div className="fieldsHeading">
            <h1>private info</h1>
            <p className="pages">1/3</p>
          </div>
          <form action="">
            <div className="groupsCont">
              <div className="formGroup">
                <div className="formControl">
                  <label htmlFor="name">სახელი</label>
                  <input
                    type="text"
                    placeholder="ანზორ"
                    id="name"
                    name="name"
                  />
                  <span className="hint">მინიმუმ 2 ასო, ქართული ასოები</span>
                </div>
                <div className="formControl">
                  <label htmlFor="lastName">სახელი</label>
                  <input
                    type="text"
                    placeholder="მუმლაძე"
                    id="lastName"
                    name="lastName"
                  />
                  <span className="hint">მინიმუმ 2 ასო, ქართული ასოები</span>
                </div>
              </div>
              <div className="formGroup">
                <div className="formControl">
                  <label htmlFor="privatePhoto">პირადი ფოტოს ატვირთვა</label>
                  <input type="file" name="privatePhoto" id="privatePhoto" />
                </div>
              </div>
              <div className="formGroup">
                <div className="formControl">
                  <label htmlFor="aboutMe">ჩემ შესახებ (არასავალდებულო)</label>
                  <textarea
                    name="aboutMe"
                    id="aboutMe"
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
                  <span className="hint">
                    უნდა მთავრდებოდეს @redberry.ge-ით
                  </span>
                </div>
              </div>
              <div className="formGroup">
                <div className="formControl">
                  <label htmlFor="mobile">მობილურის ნომერი</label>
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    placeholder="+995 551 12 34 56"
                  />
                  <span className="hint">
                    უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                  </span>
                </div>
              </div>
            </div>
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

export default PrivateInfo;
