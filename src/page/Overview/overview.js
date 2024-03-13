import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import StatusBox from "../../components/StatusBox/StatusBox";
import LiveLoc from "../../components/LiveLocation/LiveLoc";

const Overview = () => {
  return (
    <div class="flex gap-3">
      <SideBar />
      <div class="m-8">
        <h1 className="text-2xl font-semibold mb-4">ini Overview</h1>
        <div class="items-center">
          <div class="grid gap-4 grid-cols-2">
            <StatusBox />
            <StatusBox />
          </div>
          <div class="mt-6">
            <LiveLoc />
          </div>
          <div>ship list</div>
          <div>danger log</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
