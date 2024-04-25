import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "./styles.css";
import currectLocation from "../../model/getCurrent";
import DetailLiveLoc from "./detailLiveLoc";
import HitManual from "../../api/getShipData";

// const ships = [
//   { name: "Kapal 1", latitude: -6.8909, longitude: 107.6105 }, // Coordinates around Telkom University
//   { name: "Kapal 2", latitude: -6.891, longitude: 107.6206 }, // Slightly adjusted coordinates
//   { name: "Kapal 3", latitude: -6.8911, longitude: 107.6307 }, // Slightly adjusted coordinates
// ];

const LiveLocation = () => {
  // const ships = currectLocation();
  const ships = HitManual();
  return (
    <div class="flex gap-3">
      <SideBar />
      <div class="m-8">
        <h1 className="text-2xl font-semibold mb-4">Live Location</h1>
        <div class="items-center">
          <div class="mt-6">
            <div>
              {ships.length > 1 ? (
                <MapContainer
                  center={[-6.9784646, 107.63230896]}
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
                          <Popup>{item.time}</Popup>
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
          <DetailLiveLoc />
        </div>
      </div>
    </div>
  );
};

export default LiveLocation;
