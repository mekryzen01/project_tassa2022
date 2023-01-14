import React from "react";

import reportWebVitals from "./components/reportWebVitals";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Router/>
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();