import React from "react";
import { useEffect, useState } from "react";

const HitManual = () => {
  const fetching = [
    "https://api.qubitro.com/v2/projects/b9aabf51-edf2-4885-b211-8a424cb55208/devices/d0b022b0-a221-4599-82a7-9307c21fb97f/data?page=1&limit=1&range=all",
    "https://api.qubitro.com/v2/projects/b9aabf51-edf2-4885-b211-8a424cb55208/devices/d61baf1c-29d6-45c3-a748-2b839dc612fc/data?page=1&limit=1&range=all",
  ];
  console.log(fetching);
  const [apiResults, setApiResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          fetching.map(async (url) => {
            const response = await fetch(url, {
              headers: {
                Authorization:
                  "Bearer QB_BzKTp5dhQP3--u1T9q1MYcpYJTO4reb4IY81Qax-",
              },
              method: "GET",
            });
            const { data } = await response.json();
            return data;
          })
        );
        setApiResults(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return apiResults;
};

export default HitManual;
