import React from "react";
import { useGlobalContext } from "../../context";

const ResumeFinal = () => {
  const { resetForm } = useGlobalContext();
  
  return (
    <>
      <div className="resumeFinal">
        <h1>final resume</h1>
      </div>
    </>
  );
};

export default ResumeFinal;
