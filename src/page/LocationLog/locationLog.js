import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Ship1Log from "../../api/ship1log";
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

const LocationLog = () => {
  const data = Ship1Log();
  // console.log(data);
  const locations = data.map((item) => ({
    latitude: item.data.Lat,
    longitude: item.data.Lon,
  }));
  const coordinates = locations.map((location) => [
    location.latitude,
    location.longitude,
  ]);
  console.log(locations);
  return (
    <div class="flex flex-row">
      <SideBar />
      <div className="ml-8">
        <h1>ini Location Log</h1>
        {locations.length > 1 ? (
          <div>
            {/* Contoh menggunakan Leaflet untuk pemetaan */}
            <MapContainer
              center={[locations[0].latitude, locations[0].longitude]}
              zoom={13}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Tambahkan marker untuk setiap lokasi */}
              <Polyline
                pathOptions={{ color: "blue" }}
                positions={coordinates}
              />
            </MapContainer>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default LocationLog;
