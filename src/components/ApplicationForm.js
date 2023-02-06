import React from "react";
import { useGlobalContext } from "../context";
import Welcome from "./welcome";
import PrivateInfo from "./privateinfo";
import Experience from "./experience";
import Education from "./education";
import Resume from "./resume";
import reset from "../assets/images/reset.png";

const ApplicationForm = () => {
  const { page, resetForm, nextPage, prevPage, handleSubmit } =
    useGlobalContext();

  if (page === 0) {
    return (
      <div className="wrapper">
        <Welcome />
      </div>
    );
  }
  if (page === 4) {
    return (
      <>
        <div className="wrapper">
          <Resume />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="wrapper">
        <div className="fieldsCont">
          <div>
            <button type="button" onClick={resetForm} className="resetBtn">
              <img src={reset} alt="" />
            </button>
          </div>
          <div className="fields">
            <div className="fieldsHeading">
              {page === 1 && <h1>პირადი ინფო</h1>}
              {page === 2 && <h1>გამოცდილება</h1>}
              {page === 3 && <h1>განათლება</h1>}
              <p className="pages">{page}/3</p>
            </div>
            <form action="" onSubmit={handleSubmit}>
              {page === 1 && <PrivateInfo />}
              {page === 2 && <Experience />}
              {page === 3 && <Education />}
              <div className="formButtons">
                {page > 1 && (
                  <button type="button" onClick={prevPage}>
                    უკან
                  </button>
                )}
                {page <= 2 && (
                  <button type="button" onClick={nextPage}>
                    შემდეგი
                  </button>
                )}
                {page === 3 && <button type="submit">დასრულება</button>}
              </div>
            </form>
          </div>
        </div>
        <Resume />
      </div>
    </>
  );
};

export default ApplicationForm;
