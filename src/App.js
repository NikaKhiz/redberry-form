import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { useGlobalContext } from "./context";
import ApplicationForm from "./components/ApplicationForm";
function App() {
  const { page } = useGlobalContext();
  return (
    <>
      <GlobalStyles page={page} />
      <ApplicationForm />
    </>
  );
}

export default App;
