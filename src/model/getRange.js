function getRange(referencePoint, location) {
  const lat1 = referencePoint[0];
  const lon1 = referencePoint[1];
  const lat2 = location[0];
  const lon2 = location[1];

  console.log(lat1, lon1, lat2, lon2);

  const earthRadiusKm = 6371;
  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadiusKm * c;
  if (distance < 0.3) {
    return "Docked";
  } else {
    return "Sailing";
  }
  //   return distance.toFixed(2);
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export default getRange;
