import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ReactGA from "react-ga4";

ReactGA.initialize("G-D0MV7Q0YR9");

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};
