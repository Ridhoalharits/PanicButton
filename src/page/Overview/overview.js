import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import StatusBox from "../../components/StatusBox/StatusBox";
import LiveLoc from "../../components/LiveLocation/LiveLoc";
import ShipList from "../../components/ShipList/ShipList";
import DangerLog from "../../components/DangerLog/DangerLog";
import HitManual from "../../api/getShipData";
import AllData from "../../api/AllData";

const Overview = () => {
  let status = "Loading";

  const datas = HitManual();
  const extractBtnData = (array) => {
    return array
      .flat() // Flatten the nested arrays
      .filter((item) => item.data && item.data.hasOwnProperty("Btn")) // Filter objects containing `btn` property
      .map((item) => item.data.Btn); // Map to `btn` values
  };

  const btnData = extractBtnData(datas);
  console.log("hasilnya adalah", btnData);
  if (btnData.includes(1)) {
    status = "Bahaya";
  } else {
    status = "Aman";
  }

  // Output: [0, 1]
  return (
    <div class="flex gap-3">
      <SideBar />
      <div class="m-8">
        <h1 className="text-2xl font-semibold mb-4">Beranda</h1>
        <div class="items-center">
          <div class="grid gap-4 grid-cols-2">
            <StatusBox head="Status" status={status} />
          </div>
          <div class="mt-6">
            <LiveLoc />
            <ShipList />
            <DangerLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
