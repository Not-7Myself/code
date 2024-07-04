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

import { data } from "./data";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />} />
      <Route path="Team" element={<Team />} />
      <Route path="Event">
        {data.map((data) => {
          return <Route path={data.Nome} element={<Events data={data} />} />;
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
