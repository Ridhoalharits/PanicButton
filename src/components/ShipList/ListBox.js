import React from "react";
import currectLocation from "../../model/getCurrent";

const ListBox = () => {
  const data = currectLocation();
  console.log(data);
  const renderList = data.map((item) => (
    <div class="bg-white border-2 border-gray rounded-lg p-2  flex flex-col mt-2">
      <div class="justify-between flex flex-row">
        <p>{item.shipID}</p>
        <p>{item.data.Latitude}</p>
        <p>{item.data.Longitude}</p>
        {item.data.Status === "safe" ? (
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
        <p>{item.data.Timestamp}</p>
      </div>
    </div>
  ));

  return renderList;
};

export default ListBox;
