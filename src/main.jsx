import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./Context/Context"; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
