import React from "react";
import ReactDOM from "react-dom/client";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";
// import NavBar from "./NavBar.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <App />;
root.render(element);
