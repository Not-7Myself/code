import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Team from "./Team";
import Events from "./Events";
import Contacts from "./Contact";

const events = [
  "HackAIthon",
  "Ad_Making",
  "Movie Making",
  "Photography",
  "Digital_Imaging",
  "DCrypt",
  "Keynote",
  "Group_Discussion",
  "Robotics",
  "PyCODE",
  "CODE++",
  "Quiz",
  "Gaming PC",
  "Music Matrix",
  "Scratch",
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />} />
      <Route path="Team" element={<Team />} />
      <Route path="Event">
        {events.map((events) => {
          return <Route path={events} element={<Events />} />;
        })}
      </Route>
      <Route path="Contact" element={<Contacts />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
