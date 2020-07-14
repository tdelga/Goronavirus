import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GetRequest } from "./components/GetRequest";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GetRequest />
  </React.StrictMode>,
  document.getElementById("root")
);
