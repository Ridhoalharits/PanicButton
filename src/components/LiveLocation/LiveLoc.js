import React from "react";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { MapContainer, TileLayer } from "react-leaflet";
import locIcon from "../../assets/icons/liveLoc.png";
import { Icon, divIcon, point } from "leaflet";
import dangerIcon from "../../assets/icons/danger.png";

const ships = [
  { name: "Kapal 1", latitude: 51.5074, longitude: 0.1278 },
  { name: "Kapal 2", latitude: 51.5075, longitude: 0.1279 },
  { name: "Kapal 3", latitude: 51.5076, longitude: 0.128 },
];

// const customIcon = new Icon({
//   // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   iconUrl: require(`${dangerIcon}`),
//   iconSize: [38, 38], // size of the icon
// });

const LiveLoc = () => {
  return (
    <div class="bg-white border-2 border-gray rounded-lg p-8  flex flex-col">
      <div class="flex flex-row">
        <img class="w-6 h-6 mr-6" src={locIcon} alt="locIcon" />
        <h1 class="text-black text-2xl font-semibold mb-4">Live Location</h1>
      </div>

      <MapContainer center={[-6.972921797183535, 107.63168003104195]} zoom={15}>
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.sorg/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default LiveLoc;
