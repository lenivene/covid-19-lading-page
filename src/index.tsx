import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ResetGlobalCSS from "./ResetGlobalCSS";

ReactDOM.render(
  <React.StrictMode>
    <ResetGlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
