import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(0);
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
