import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "./styles.css";
import currectLocation from "../../model/getCurrent";
import DetailLiveLoc from "./detailLiveLoc";

// const ships = [
//   { name: "Kapal 1", latitude: -6.8909, longitude: 107.6105 }, // Coordinates around Telkom University
//   { name: "Kapal 2", latitude: -6.891, longitude: 107.6206 }, // Slightly adjusted coordinates
//   { name: "Kapal 3", latitude: -6.8911, longitude: 107.6307 }, // Slightly adjusted coordinates
// ];

const LiveLocation = () => {
  const ships = currectLocation();
  return (
    <div class="flex gap-3">
      <SideBar />
      <div class="m-8">
        <h1 className="text-2xl font-semibold mb-4">Live Location</h1>
        <div class="items-center">
          <div class="mt-6">
            <MapContainer
              center={[ships[0].data.Latitude, ships[0].data.Longitude]}
              zoom={12}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.sorg/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

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
          <DetailLiveLoc />
        </div>
      </div>
    </div>
  );
};

export default LiveLocation;
