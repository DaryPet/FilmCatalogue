import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/conmonents/App";
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);