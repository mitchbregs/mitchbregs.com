import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@galaxy-io/dls/styles.css";
import "@galaxy-io/dls/tokens.css";
import "@galaxy-io/dls/fonts.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
