import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [privateInfo, setPrivateInfo] = useState([
    {
      name: "",
      surname: "",
      image: "",
      aboutMe: "",
      email: "",
      phone: "",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      position: "",
      employer: "",
      startDate: "",
      dueDate: "",
      description: "",
    },
  ]);
  const [education, setEducation] = useState([
    {
      indsitute: "",
      degree: "",
      dueDate: "",
      description: "",
    },
  ]);
  const addExperience = () => {
    setExperience([
      ...experience,
      {
        id: experience.length + 1,
        indsitute: "",
        degree: "",
        dueDate: "",
        description: "",
      },
    ]);
  };
  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: education.length + 1,
        indsitute: "",
        degree: "",
        dueDate: "",
        description: "",
      },
    ]);
  };
  const nextPage = () => {
    setPage((prevState) => {
      return prevState + 1;
    });
  };
  const prevPage = () => {
    setPage((prevState) => {
      return prevState - 1;
    });
  };
  const resetForm = () => {
    setPage(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(4);
  };

  return (
    <AppContext.Provider
      value={{
        page,
        nextPage,
        prevPage,
        handleSubmit,
        resetForm,
        privateInfo,
        setPrivateInfo,
        education,
        setEducation,
        experience,
        setExperience,
        addExperience,
        addEducation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
