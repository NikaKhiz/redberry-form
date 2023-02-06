import React from "react";
import { useState } from "react";
import Welcome from "./welcome";
import PrivateInfo from "./privateinfo";
import Experience from "./experience";
import Education from "./education";
import ResumeFinal from "./resumefinal";
const ApplicationForm = () => {
  const [page, setPage] = useState(3);
  return (
    <>
      <div className="wrapper">
        {page === 0 && <Welcome />}
        {page === 1 && <PrivateInfo />}
        {page === 2 && <Experience />}
        {page === 3 && <Education />}
        {page === 4 && <ResumeFinal />}
      </div>
    </>
  );
};

export default ApplicationForm;
