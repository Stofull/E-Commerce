import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import style from "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Rootes";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
