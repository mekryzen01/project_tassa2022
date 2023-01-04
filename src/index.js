import React from "react";
import App from "./components/App";
import reportWebVitals from "./components/reportWebVitals";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();