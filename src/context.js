import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  
  const [page, setPage] = useState(0);
  const sessionStorage = window.sessionStorage;
  const setPersonalInfo = () => {
    const personalInfo = sessionStorage.getItem("personal");
    if (personalInfo) {
      const data = JSON.parse(personalInfo);
      return data;
    } else {
      return {
        name: "",
        surname: "",
        image: "",
        about_me: "",
        email: "",
        phone_number: "",
      };
    }
  };
  const [privateInfo, setPrivateInfo] = useState(setPersonalInfo());
  const [experiences, setExperiences] = useState([
    {
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    },
  ]);
  const [experience, setExperience] = useState({
    index: 0,
    position: "",
    employer: "",
    start_date: "",
    due_date: "",
    description: "",
  });
  const [educations, setEducations] = useState([
    {
      institute: "",
      degree: "",
      due_date: "",
      description: "",
    },
  ]);
  const [education, setEducation] = useState({
    index: 0,
    institute: "",
    degree: "",
    due_date: "",
    description: "",
  });
  const addExperiences = () => {
    setExperiences([
      ...experiences,
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]);
    setExperience({
      index: experience.index + 1,
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    });
  };
  const addEducations = () => {
    setEducations([
      ...educations,
      {
        institute: "",
        degree: "",
        due_date: "",
        description: "",
      },
    ]);
    setEducation({
      index: education.index + 1,
      institute: "",
      degree: "",
      due_date: "",
      description: "",
    });
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
    setPrivateInfo({
      name: "",
      surname: "",
      image: "",
      about_me: "",
      email: "",
      phone_number: "",
    });
    setExperiences([
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]);
    setExperience({
      index: 0,
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    });
    setEducations([
      {
        institute: "",
        degree: "",
        due_date: "",
        description: "",
      },
    ]);
    setEducation({
      index: 0,
      institute: "",
      degree: "",
      due_date: "",
      description: "",
    });

    setPage(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPrivateInfo({
      name: "",
      surname: "",
      image: "",
      about_me: "",
      email: "",
      phone_number: "",
    });
    setExperiences({
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    });
    setEducation({
      institute: "",
      degree: "",
      due_date: "",
      description: "",
    });
    setPage(4);
  };

  const degreesUrl = "https://resume.redberryinternship.ge/api/degrees";
  const [degrees, setDegrees] = useState([]);
  const getDegrees = async () => {
    const response = await fetch(degreesUrl);
    const data = await response.json();
    setDegrees(data);
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
        educations,
        education,
        setEducation,
        setEducations,
        experiences,
        experience,
        setExperience,
        setExperiences,
        addExperiences,
        addEducations,
        degrees,
        getDegrees,
        sessionStorage,
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
