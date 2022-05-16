import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// target container is not a DOM element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
