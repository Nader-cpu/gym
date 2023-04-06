import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//theme
import "primereact/resources/themes/md-dark-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
