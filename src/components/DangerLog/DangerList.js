import React from "react";
import allDanger from "../../model/getAllDanger";

const DangerList = () => {
  const danger = allDanger();
  // console.log(danger);

  const renderList = danger.map((item) => (
    <div>
      {item.Data.map((entry) => (
        <div class="bg-white border-2 border-gray rounded-lg p-2  flex flex-col mt-2">
          <div class="justify-between flex flex-row">
            <p>{entry.ShipID}</p>
            <p>{entry.Latitude}</p>
            <p>{entry.Longitude}</p>
            {entry.Status === "safe" ? (
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
            <p>{entry.Timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  ));
  return renderList;
};

export default DangerList;
