import React, { useState, useContext } from "react";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const sessionStorage = window.sessionStorage;
  const [shouldReplace, setShouldReplace] = useState(false);
  const [privateInfoError, setPrivateInfoError] = useState({
    nameError: true,
    surnameError: true,
    imageError: true,
    phoneError: true,
    emailError: true,
  });

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

  const [experiencesError, setExperiencesError] = useState({
    positionError: true,
    employerError: true,
    startError: true,
    endError: true,
    descriptionError: true,
  });
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
  const [educationsError, setEducationsError] = useState({
    instituteError: true,
    dueDateError: true,
    descrError: true,
  });
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
    const { nameError, surnameError, imageError, emailError, phoneError } =
      privateInfoError;
    const {
      positionError,
      employerError,
      endError,
      startError,
      descriptionError,
    } = experiencesError;
    const { instituteError, dueDateError, descrError } = educationsError;
    page === 0 &&
      setPage((prevState) => {
        return prevState + 1;
      });

    !nameError &&
      !surnameError &&
      !imageError &&
      !emailError &&
      !phoneError &&
      page === 1 &&
      setPage((prevState) => {
        return prevState + 1;
      });

    !positionError &&
      !employerError &&
      !startError &&
      !endError &&
      !descriptionError &&
      page === 2 &&
      setPage((prevState) => {
        return prevState + 1;
      });
    !dueDateError &&
      !instituteError &&
      !descrError &&
      page === 3 &&
      setPage((prevState) => {
        return prevState + 1;
      });
  };
  const prevPage = () => {
    setPage((prevState) => {
      return prevState + 1;
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
    setPrivateInfoError({
      nameError: true,
      surnameError: true,
      imageError: true,
      phoneError: true,
      emailError: true,
    });
    setExperiencesError({
      positionError: true,
      employerError: true,
      startError: true,
      endError: true,
      descriptionError: true,
    });
    setEducationsError({
      instituteError: true,
      dueDateError: true,
      descrError: true,
    });
    setPage(0);
  };
  const [test, setTest] = useState([]);
  const cvsUrl = "https://resume.redberryinternship.ge/api/cvs";

  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let file = dataURLtoFile(privateInfo.imageBase, "image.png");
    let dataToSend = {
      name: privateInfo.name,
      surname: privateInfo.surname,
      email: privateInfo.email,
      phone_number: privateInfo.phone_number.replace(/\s/g, ""),
      image: file,
      experiences: [...experiences],
      educations: [...educations],
    };
    try {
      const resp = await axios.post(cvsUrl, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(await resp.data);
    } catch (error) {
      console.log(error.response);
    }
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
    setPrivateInfoError({
      nameError: true,
      surnameError: true,
      imageError: true,
      phoneError: true,
      emailError: true,
    });
    setExperiencesError({
      positionError: true,
      employerError: true,
      startError: true,
      endError: true,
      descriptionError: true,
    });
    setEducationsError({
      instituteError: true,
      dueDateError: true,
      descrError: true,
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
        privateInfoError,
        setPrivateInfoError,
        experiencesError,
        setExperiencesError,
        educationsError,
        setEducationsError,
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
