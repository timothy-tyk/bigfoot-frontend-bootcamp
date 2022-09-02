import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";
import {
  BrowserRouter,
  Link,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { BACKEND_URL } from "./constants.js";

export default function SightingsSearch() {
  const [sightings, setSightings] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { year } = useParams();
  const getSighting = async () => {
    const data = await axios.get(`${BACKEND_URL}/sightings?${year}`);
    console.log(data);
    setSightings(data.data);
  };

  useEffect(() => {
    getSighting();
  }, []);

  const sightingsList = sightings.map((sighting, index) => (
    <div key={index}>
      <div>
        <p>Report Number: {sighting.REPORT_NUMBER}</p>
      </div>
      <div>
        <p>
          Date: {sighting.DATE}/{sighting.MONTH}/{sighting.YEAR}
        </p>
      </div>
      <div>
        <p>
          Area: {sighting.STATE}/{sighting.COUNTY}
        </p>
      </div>
      <div>
        <p>Witness Report: {sighting.OBSERVED}</p>
      </div>
    </div>
  ));
  return (
    <div className="App">
      <header className="App-header">{sightingsList}</header>
    </div>
  );
}
