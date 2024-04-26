import { useState, useEffect } from "react";

const Ship1Log = () => {
  const [api, setapi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.qubitro.com/v2/projects/b9aabf51-edf2-4885-b211-8a424cb55208/devices/d0b022b0-a221-4599-82a7-9307c21fb97f/data?page=1&limit=25&range=all",
          {
            headers: {
              Authorization:
                "Bearer QB_BzKTp5dhQP3--u1T9q1MYcpYJTO4reb4IY81Qax-",
            },
            method: "GET",
          }
        );
        const { data } = await response.json();

        setapi(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 2000);

    return () => {
      clearInterval(intervalId);
    };
    // Call the fetchData function when component mounts
  }, []);
  return api;
};

export default Ship1Log;
