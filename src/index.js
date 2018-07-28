import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App/";
import "./index.css";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
  // registerServiceWorker();
})
