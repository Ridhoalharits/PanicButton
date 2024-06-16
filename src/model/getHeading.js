export function getHeading(referencePoint, location) {
  console.log(location[0], location[1]);
  const toRadians = (degree) => (degree * Math.PI) / 180;
  const toDegrees = (radian) => (radian * 180) / Math.PI;

  const φ1 = toRadians(referencePoint[0]);
  const φ2 = toRadians(location.data.Lat);
  const Δλ = toRadians(location.data.Lon - referencePoint[1]);

  const x = Math.sin(Δλ) * Math.cos(φ2);
  const y =
    Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);

  const θ = Math.atan2(x, y);
  const bearing = (toDegrees(θ) + 360) % 360;

  return bearing.toFixed(2);
}
