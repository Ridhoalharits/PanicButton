import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Qubitro from "../../api/qubitro";

const ShipStatus = () => {
  const qubitro = Qubitro();
  const formattedTime = qubitro.map(
    (time) =>
      new Date(
        time.time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short",
        })
      )
  );

  console.log(formattedTime);
  const render = qubitro.map((item) => (
    <div>
      {/* <p>{formattedTime}</p> */}
      {item.data.Btn === 0 ? (
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
      <p>{item.data.Lat}</p>
      <p>{item.data.Lon}</p>
      <p>{formattedTime[0][0]}</p>
    </div>
  ));
  return (
    <div class="flex flex-row">
      <SideBar />
      <p>qu</p>
      <div className="ml-8">{render}</div>
    </div>
  );
};

export default ShipStatus;
