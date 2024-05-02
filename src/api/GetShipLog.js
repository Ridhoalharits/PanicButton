import React from "react";
import { useEffect, useState } from "react";
const GetShipLog = () => {
  const [hasil, setData] = useState([]);
  const url = "https://pb-backend-sepia.vercel.app/ambil";

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // Parse response body as JSON
        })
        .then((hasil) => setData(hasil))
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchData();
  }, []);
  return hasil;
};

export default GetShipLog;
