import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/app.scss";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
