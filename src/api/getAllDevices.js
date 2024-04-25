import { useState, useEffect } from "react";

export const GetAllDevices = () => {
  const endpoint = `https://api.qubitro.com/v2/projects/b9aabf51-edf2-4885-b211-8a424cb55208/devices`;
  const [hasil, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(endpoint, {
        headers: {
          Authorization: "Bearer QB_BzKTp5dhQP3--u1T9q1MYcpYJTO4reb4IY81Qax-",
        },
        method: "GET",
      })
        .then((response) => response.json())

        .then(({ data }) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
    // const intervalId = setInterval(fetchData, 1000);

    return () => {
      fetchData();
    };
  }, []);

  const deviceID = hasil.map((item) => ({ id: item.id }));
  return deviceID;
};

export default GetAllDevices;
