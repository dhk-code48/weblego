import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/index.css";
import Routes from "./Routes";
import { AppContextProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  </React.StrictMode>
);
