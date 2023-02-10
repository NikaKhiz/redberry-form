import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const sessionStorage = window.sessionStorage;
  const [shouldReplace, setShouldReplace] = useState(false);

  const getPageInfo = () => {
    const pageInfo = parseInt(sessionStorage.getItem("page"));
    if (pageInfo) {
      return pageInfo;
    } else {
      return 0;
    }
  };
  const [page, setPage] = useState(getPageInfo());

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

  const getSavedExperiences = () => {
    const savedExperiences = sessionStorage.getItem("experiences");
    if (savedExperiences) {
      const data = JSON.parse(savedExperiences);
      return data;
    } else {
      return [
        {
          position: "",
          employer: "",
          start_date: "",
          due_date: "",
          description: "",
        },
      ];
    }
  };
  const [experiences, setExperiences] = useState(getSavedExperiences());
  const [experience, setExperience] = useState({
    index: 0,
    position: "",
    employer: "",
    start_date: "",
    due_date: "",
    description: "",
  });

  const getSavedEducations = () => {
    const savedEducations = sessionStorage.getItem("educations");
    if (savedEducations) {
      const data = JSON.parse(savedEducations);
      return data;
    } else {
      return [
        {
          institute: "",
          degree: "",
          due_date: "",
          description: "",
        },
      ];
    }
  };
  const [educations, setEducations] = useState(getSavedEducations());
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
        setPage,
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
        shouldReplace,
        setShouldReplace,
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
