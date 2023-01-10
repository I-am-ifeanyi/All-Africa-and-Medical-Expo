import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextApi } from "./ContextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextApi>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextApi>
);
