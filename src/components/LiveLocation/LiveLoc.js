import React from "react";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  Polyline,
} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import locIcon from "../../assets/icons/liveLoc.png";
import currectLocation from "../../model/getCurrent";
import hasil from "../../model/getCurrent";
// import { Icon, divIcon, point } from "leaflet";
// import dangerIcon from "../../assets/icons/danger.png";

// const ships = [
//   { name: "Kapal 1", latitude: -6.8909, longitude: 107.6105 }, // Coordinates around Telkom University
//   { name: "Kapal 2", latitude: -6.891, longitude: 107.6206 }, // Slightly adjusted coordinates
//   { name: "Kapal 3", latitude: -6.8911, longitude: 107.6307 }, // Slightly adjusted coordinates
// ];

// const customIcon = new Icon({
//   // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   iconUrl: require(`${dangerIcon}`),
//   iconSize: [38, 38], // size of the icon
// });

const LiveLoc = () => {
  const ships = currectLocation();
  console.log(ships);
  // console.log(ships[0]);
  // ships.map((item) => {
  //   console.log(item.data.Latitude);
  // });
  return (
    <div class="bg-white border-2 border-gray rounded-lg p-8  flex flex-col mb-6">
      <div class="flex flex-row">
        <img class="w-6 h-6 mr-6" src={locIcon} alt="locIcon" />
        <h1 class="text-black text-2xl font-semibold mb-4">Live Location</h1>
      </div>

      <MapContainer
        center={[ships[0].data.Latitude, ships[0].data.Longitude]}
        zoom={12}
      >
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.sorg/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Polyline pathOptions={{ color: "red" }} positions={latLngs} /> */}

        {ships.map((item) => (
          <Marker
            position={[item.data.Latitude, item.data.Longitude]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>{item.shipID}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LiveLoc;
