import React from "react";
import { useState, useEffect } from "react";
import GetAllDevices from "./getAllDevices";

const AllData = () => {
  const deviceList = GetAllDevices();
  const id = deviceList.map((item) => item.id);
  const [hasil, setData] = useState({});
  const [updatedData, setUpdatedData] = useState({}); // Use state to store updated data
  const kumpulandata = {};

  const fetching = deviceList.map(
    (item) =>
      `https:api.qubitro.com/v2/projects/b9aabf51-edf2-4885-b211-8a424cb55208/devices/${item.id}/data?page=1&limit=1&range=all`
  );
  //   console.log(fetching);
  useEffect(() => {
    const fetchData = () => {
      for (const id of fetching) {
        fetch(id, {
          headers: {
            Authorization: "Bearer QB_BzKTp5dhQP3--u1T9q1MYcpYJTO4reb4IY81Qax-",
          },
          method: "GET",
        })
          .then((response) => response.json())

          .then(({ data }) => {
            console.log(data);
            // setData(data);
            // kumpulandata[id] = data;
          })
          .catch((error) => console.error("Error fetching data:", error));
      }
    };
    // const intervalId = setInterval(fetchData, 1000);

    return () => {
      fetchData();
    };
  }, []);

  return <div>hiya</div>;
};

export default AllData;
