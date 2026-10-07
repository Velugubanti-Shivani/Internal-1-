import React from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App";
import "./App.css";

const dsn = import.meta.env.VITE_SENTRY_DSN;

console.log("Sentry DSN loaded:", Boolean(dsn));

if (dsn) {
  Sentry.init({
    dsn: dsn,
    environment: "development",
    debug: true,
    tracesSampleRate: 1.0
  });

  
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);