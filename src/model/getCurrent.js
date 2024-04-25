import data from "../api/dataset.json";
// console.log(data);

const currectLocation = () => {
  const newestData = [];
  data.ship_data.map((ship) => {
    const newestEntry = ship.Data.reduce((max, current) =>
      new Date(current.Timestamp) > new Date(max.Timestamp) ? current : max
    );
    newestData[ship.id] = { data: newestEntry, shipID: ship.ShipID };
  });

  // console.log(newestData);
  return newestData;
};

export default currectLocation;
