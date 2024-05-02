import { useEffect, useState } from "react";

const Qubitro = () => {
  const endpoint = `https://api.qubitro.com/v2/projects/b9aabf51-edf2-4885-b211-8a424cb55208/devices/d0b022b0-a221-4599-82a7-9307c21fb97f/data?page=1&limit=1&range=all`;
  const [hasil, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(endpoint, {
        headers: {
          Authorization: "Bearer QB_BzKTp5dhQP3--u1T9q1MYcpYJTO4reb4IY81Qax-",
        },
      })
        .then((response) => response.json())

        .then(({ data }) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
    const intervalId = setInterval(fetchData, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return hasil;
};

export default Qubitro;
