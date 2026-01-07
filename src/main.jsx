import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { ActivityProvider } from "./context/ActivityContext";
import "./index.css";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <ActivityProvider>
      <RouterProvider router={router} />
    </ActivityProvider>
    </ThemeProvider>
  </React.StrictMode>
);