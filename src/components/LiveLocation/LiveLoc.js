import React from "react";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import locIcon from "../../assets/icons/liveLoc.png";
import HitManual from "../../api/getShipData";

const LiveLoc = () => {
  const ships = HitManual();
  console.log(ships);

  return (
    <div class="bg-white border-2 border-gray rounded-lg p-8  flex flex-col mb-6">
      <div class="flex flex-row">
        <img class="w-6 h-6 mr-6" src={locIcon} alt="locIcon" />
        <h1 class="text-black text-2xl font-semibold mb-4">Lokasi Terkini</h1>
      </div>
      <div>
        {ships.length === 3 ? (
          <MapContainer
            center={[-6.96928787, 107.62825012]}
            zoom={13}
            style={{ height: "400px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {ships.map((nestedArray, index) => (
              <div>
                {nestedArray.map((item, innerIndex) => (
                  <Marker
                    position={[item.data.Lat, item.data.Lon]}
                    icon={
                      new Icon({
                        iconUrl: markerIconPng,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                      })
                    }
                  >
                    <Popup>Kapal {index + 1}</Popup>
                  </Marker>
                ))}
              </div>
            ))}
          </MapContainer>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default LiveLoc;
