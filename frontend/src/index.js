import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"; // Make sure this is correct
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Router should be here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
