import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SightingsList from "./Sightings";
import Sighting from "./Sighting";
import SearchedSightings from "./SearchedSightings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/sightings" element={<SightingsList />}></Route>
      <Route path="/sightings/:id" element={<Sighting />}></Route>
    </Routes>
  </BrowserRouter>
);
