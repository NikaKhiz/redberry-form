import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [privateInfo, setPrivateInfo] = useState({
    name: "",
    surname: "",
    image: "",
    about_me: "",
    email: "",
    phone_number: "",
  });
  const [experience, setExperience] = useState({
    position: "",
    employer: "",
    start_date: "",
    due_date: "",
    description: "",
  });
  const [education, setEducation] = useState({
    institute: "",
    degree: "",
    dueDate: "",
    description: "",
  });
  const addExperience = () => {
    setExperience({
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: "",
    });
  };
  const addEducation = () => {
    setEducation({
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
      aboutMe: "",
      email: "",
      phone: "",
    });
    setExperience({
      position: "",
      employer: "",
      startDate: "",
      dueDate: "",
      description: "",
    });
    setEducation({
      institute: "",
      degree: "",
      dueDate: "",
      description: "",
    });
    setPage(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
        education,
        setEducation,
        experience,
        setExperience,
        addExperience,
        addEducation,
        degrees,
        getDegrees,
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
