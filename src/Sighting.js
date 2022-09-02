import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "./constants";

export default function Sighting() {
  const [sighting, setSighting] = useState({});
  const [sightingIndex, setSightingIndex] = useState("");

  const { id } = useParams();

  useEffect(() => {
    setSightingIndex(id);
  }, []);

  useEffect(() => {
    getSightingsData();
  }, [sightingIndex]);

  const getSightingsData = async () => {
    const data = await axios.get(`${BACKEND_URL}/sightings/${id}`);
    setSighting(data.data[0]);
  };

  return (
    <div>
      {console.log(sighting, sightingIndex)}
      {Object.keys(sighting).length > 0 ? (
        <div>
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
      ) : (
        <p>Data Unavailable</p>
      )}
    </div>
  );
}
