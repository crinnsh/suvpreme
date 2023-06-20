import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ReactGA from "react-ga4";

// Multiple products (previously known as trackers)
ReactGA.initialize([
  {
    trackingId: "G-D0MV7Q0YR9",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "User Navigated Page",
});
