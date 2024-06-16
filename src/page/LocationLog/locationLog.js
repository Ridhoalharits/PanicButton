import React from "react";
import SideBar from "../../components/sidebar/SideBar";
// import Ship1Log from "../../api/ship1log";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  Polyline,
} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import GetShipLog from "../../api/GetShipLog";
import { dateFormatter } from "../../model/dateFormat";
import { useState, useEffect } from "react";

const LocationLog = () => {
  const coba = GetShipLog();
  const [filteredData, setFilteredData] = useState(coba);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    filterData();
  }, [startDate, endDate, coba]);

  const filterData = () => {
    const filtered = coba.filter((item) => {
      const itemDate = new Date(item.timestamp).toISOString().split("T")[0];
      return (
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate)
      );
    });
    setFilteredData(filtered);
  };
  // console.log(filteredData);
  const locations = coba.map((item) => ({
    latitude: item.latitude,
    longitude: item.longitude,
  }));

  const filteredCoordinates = filteredData.map((item) => ({
    latitude: item.latitude,
    longitude: item.longitude,
    timestamp: item.timestamp,
  }));

  const filteredPolyline = filteredCoordinates.map((item) => [
    item.latitude,
    item.longitude,
  ]);

  const filteredPin = filteredCoordinates.map((item) => [
    item.latitude,
    item.longitude,
    item.timestamp,
  ]);

  const dataLength = filteredCoordinates.length;
  const startEndPin = [
    filteredPin[0],
    filteredPin[dataLength - 1],
    // filteredCoordinates[filteredCoordinates.length],
  ];
  console.log(startEndPin);

  // console.log(filteredCoordinates);
  return (
    <div class="flex flex-row">
      <SideBar />
      <div className="mt-8 ml-8 flex flex-col gap-3">
        <h1 className="text-2xl font-semibold mb-4">Riwayat Lokasi</h1>
        {locations.length !== 0 ? (
          <div>
            {/* Contoh menggunakan Leaflet untuk pemetaan */}
            <MapContainer
              center={[locations[0].latitude, locations[0].longitude]}
              zoom={15}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Tambahkan marker untuk setiap lokasi */}

              {startEndPin[0] !== undefined ? (
                <div>
                  {startEndPin.map((item, idx) => (
                    <div>
                      <Marker
                        key={idx}
                        position={item}
                        icon={
                          new Icon({
                            iconUrl: markerIconPng,
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                          })
                        }
                      >
                        <Popup>{dateFormatter(item[2])}</Popup>
                      </Marker>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}

              <Polyline
                pathOptions={{ color: "blue" }}
                positions={filteredPolyline}
              />
            </MapContainer>
            <div>
              <div>
                <div className="mt-6 grid gap-4 grid-cols-2">
                  <label>
                    Tanggal Awal :
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </label>
                  <label>
                    Tanggal Akhir :
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </label>
                </div>

                {filteredData.length === 0 ? (
                  <h2 className="mt-4 font-semibold text-red-600">
                    {filteredData.length} Data Ditemukan
                  </h2>
                ) : (
                  <h2 className="mt-4 font-semibold text-green-600">
                    {filteredData.length} Data Ditemukan
                  </h2>
                )}
                <div className="mt-6 flow-root">
                  <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                      <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                          <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                            <th
                              scope="col"
                              className="px-3 py-5 font-bold text-lg "
                            >
                              Ship ID
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-5 font-bold text-lg "
                            >
                              Latitude
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-5 font-bold text-lg"
                            >
                              Longiture
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-5 font-bold text-lg"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-5 font-bold text-lg"
                            >
                              Waktu
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {filteredData.length === 0 ? (
                            <p class="font-bold">Data Not Founded</p>
                          ) : (
                            <>
                              {filteredData.map((item) => (
                                <>
                                  <tr className="w-full border-b py-3 text-m last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                      <div className="flex items-center gap-3">
                                        <p>{item.device_id}</p>
                                      </div>
                                    </td>

                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                      <div className="flex items-center gap-3">
                                        <p>{item.latitude}</p>
                                      </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                      {item.longitude}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                      {item.btn === 0 ? (
                                        <div class="flex items-center">
                                          <div class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                                          <div class="text-green-500">safe</div>
                                        </div>
                                      ) : (
                                        <div class="flex items-center">
                                          <div class="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                                          <div class="text-red-500">danger</div>
                                        </div>
                                      )}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                      {dateFormatter(item.timestamp)}
                                    </td>
                                  </tr>
                                </>
                              ))}
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>Loading</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationLog;
