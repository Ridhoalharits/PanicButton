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
            <p class="items-center text-xl">
              {props.status === "Aman" ? (
                <div class="flex items-center">
                  <div class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <div class="text-green-500">{props.status}</div>
                </div>
              ) : (
                <div class="flex items-center">
                  <div class="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                  <div class="text-red-500 font-bold">{props.status}</div>
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBox;
