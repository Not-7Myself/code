import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import Team from "./Team";
import Events from "./Events";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Team />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

/*function OtherHeader() {
  return (
    <div className="header other">
      <NavBar />
      <hr />
    </div>
  );
}*/
