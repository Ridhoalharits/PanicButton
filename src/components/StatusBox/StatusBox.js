import React from "react";
import dangerIcon from "../../assets/icons/danger.png";
import HitManual from "../../api/getShipData";

const StatusBox = (props) => {
  const data = HitManual();
  const date = data[0];
  console.log(date);

  return (
    <div class="w-400 h-128 bg-white border-2 border-gray rounded-lg">
      <div class=" flex-row al items-center">
        <div class="m-8 flex flex-row ">
          <img class="w-10 h-10 mr-6" src={dangerIcon} />
          <div>
            <p class="items-center text-xl">{props.head}</p>
            <p class="items-center text-xl">Safe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBox;
