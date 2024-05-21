import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import homeicon from "../../icons/homeicon.png";
import { Icon } from "leaflet";
import "./styles.css";
import HitManual from "../../api/getShipData";
import { format } from "date-fns";
import { dateFormatter } from "../../model/dateFormat";

function calculateJarak(referencePoint, device) {
  const lat1 = referencePoint[0];
  const lon1 = referencePoint[1];
  const lat2 = device.data.Lat;
  const lon2 = device.data.Lon;

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
  return distance.toFixed(2);
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function formatedTime(data) {
  const nofixtime = data.time;
  const jadi = format(nofixtime, "MMMM dd, yyyy HH:mm:ss");

  return jadi;
}

const LiveLocation = () => {
  const referencePoint = [-6.968835, 107.627964];
  const [jarak, setjarak] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [fixedtime, setfixedtime] = useState(null);
  const ships = HitManual();
  const handleMarkerClick = (Location) => {
    console.log(Location);
    const hasil = calculateJarak(referencePoint, Location);
    const fixedTime = formatedTime(Location);
    setfixedtime(fixedTime);
    setjarak(hasil);
    setSelectedDevice(Location);
  };

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
                  <Marker
                    position={referencePoint}
                    icon={
                      new Icon({
                        iconUrl: homeicon,
                        iconSize: [25, 25],
                        iconAnchor: [25, 25],
                      })
                    }
                  >
                    <Popup>Reference Point</Popup>
                  </Marker>

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
                          eventHandlers={{
                            click: () => handleMarkerClick(item),
                          }}
                        >
                          <Popup>{dateFormatter(item.time)}</Popup>
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
          <div class="bg-white border-2 border-gray rounded-lg p-8 flex flex-col mb-3 mt-6">
            <div class="flex flex-row">
              <div>
                <div className="px-4 sm:px-0">
                  <h1 class="text-black text-2xl font-semibold mb-4">
                    Ship Information
                  </h1>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                    Detail Information from the ship
                  </p>
                </div>
                {selectedDevice == null ? (
                  <p>Select Ship to Show the data</p>
                ) : (
                  <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Ship ID
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Margot Foster
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Latitude
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {selectedDevice.data.Lat}
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Longitude
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {selectedDevice.data.Lon}
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Last Updated
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {fixedtime}
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Range
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {jarak} Km
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLocation;
