import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import { BACKEND_URL } from "./constants.js";

export default function SightingsList() {
  const [sightings, setSightings] = useState([]);
  const [search, setSearch] = useState("");
  // const [didSearch, setDidSearch] = useState(false);
  const getSighting = async () => {
    const data = await axios.get(`${BACKEND_URL}/sightings`);
    console.log(data);
    setSightings(data.data);
  };

  useEffect(() => {
    getSighting();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(search);
    const searchData = await axios.get(
      `${BACKEND_URL}/sightings?YEAR=${search}`
    );
    console.log("1", searchData);
    setSightings(searchData.data);
    // setDidSearch(true);
  };

  const sightingsList = sightings.map((sighting, index) => (
    <div key={index}>
      <div>
        <Link to={`${sighting.REPORT_NUMBER}`}>{index}</Link>
      </div>
      <div>
        Area:{sighting.STATE} {sighting.COUNTY}
      </div>
      <div>
        Date: {sighting.DATE}/{sighting.MONTH}/{sighting.YEAR}
      </div>
      <br />
    </div>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search Year"
          />
          <input type="submit" value="Search" />
        </form>
        {/* {sightings.length > 0 ? { sightingsList } : null} */}
        {sightingsList}
      </header>
    </div>
  );
}
