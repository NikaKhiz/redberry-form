import React from "react";
import ReactDOM from "react-dom/client";
import { Globals } from "./components/Globals";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Globals />
      <App />
    </>
  </React.StrictMode>
);
