import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <HashRouter basename="/">
      <ScrollToTop />
      <App />
    </HashRouter>,
    rootElement
  );
} else {
  ReactDOM.render(
    <HashRouter basename="/">
      <ScrollToTop />
      <App />
    </HashRouter>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
