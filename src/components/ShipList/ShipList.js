import React from "react";
import locIcon from "../../assets/icons/liveLoc.png";
import ListBox from "./ListBox";

const ShipList = () => {
  return (
    <div class="bg-white border-2 border-gray rounded-lg p-8  flex flex-col mb-3">
      <div class="flex flex-row">
        <img class="w-6 h-6 mr-6" src={locIcon} alt="locIcon" />
        <h1 class="text-black text-2xl font-semibold mb-4">Ship List</h1>
      </div>
      {/* <div class="flex flex-row justify-between mb-4">
        <h2 class="font-bold">Ship Id</h2>
        <h2 class="font-bold">Latitude</h2>
        <h2 class="font-bold">Longitude</h2>
        <h2 class="font-bold">Status</h2>
        <h2 class="font-bold">Last Updated</h2>
      </div> */}
      <ListBox />
    </div>
  );
};

export default ShipList;
