import data from "../api/dataset.json";

const getAllDanger = () => {
  const danger = [];
  const allDanger = data.ship_data.forEach((ship) => {
    const filtered = ship.Data.filter((entry) => entry.Status === "danger");
    if (filtered.length > 0) {
      filtered.forEach((entry) => {
        entry.ShipID = ship.ShipID; // Add ShipID to each filtered data entry
      });
      danger.push({
        ShipID: ship.ShipID,
        Data: filtered,
      });
    }
  });

  return danger;
};

export default getAllDanger;
