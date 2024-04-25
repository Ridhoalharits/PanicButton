import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [firstApiData, setFirstApiData] = useState([]);
  const [secondApiData, setSecondApiData] = useState([]);
  const bearerToken = "QB_BzKTp5dhQP3--u1T9q1MYcpYJTO4reb4IY81Qax-";

  useEffect(() => {
    // Function to fetch data from the first API
    const fetchDataFromFirstApi = async () => {
      try {
        const response = await axios.get(
          "https://api.qubitro.com/v2/projects/b9aabf51-edf2-4885-b211-8a424cb55208/devices",
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
        setFirstApiData(response.data);
      } catch (error) {
        console.error("Error fetching data from first API:", error);
      }
    };

    fetchDataFromFirstApi();
  }, []);

  useEffect(() => {
    // Function to fetch data from the second API using IDs from the response of the first API
    const fetchDataFromSecondApi = async () => {
      try {
        const ids = firstApiData.map((item) => item.id);
        const promises = ids.map((id) =>
          axios.get(
            `https://api.qubitro.com/v2/projects/b9aabf51-edf2-4885-b211-8a424cb55208/devices/${id}/data?page=1&limit=1&range=all`,
            {
              headers: {
                Authorization: `Bearer ${bearerToken}`,
              },
            }
          )
        );
        const responses = await Promise.all(promises);
        const data = responses.map((response) => response.data);
        setSecondApiData(data);
      } catch (error) {
        console.error("Error fetching data from second API:", error);
      }
    };

    if (firstApiData.length > 0) {
      fetchDataFromSecondApi();
    }
  }, [firstApiData]);

  return firstApiData;
};

export default MyComponent;
