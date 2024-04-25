import React from "react";
import currectLocation from "../../model/getCurrent";
import HitManual from "../../api/getShipData";

const ListBox = () => {
  const data = currectLocation();
  const datas = HitManual();
  console.log(datas);
  const renderList = datas.map((nestedArray, index) => (
    <div class="bg-white border-2 border-gray rounded-lg p-2  flex flex-col mt-2">
      <div>
        {nestedArray.map((item, innerIndex) => (
          <div class="justify-between flex flex-row">
            <p>1</p>
            <p>{item.data.Lat}</p>
            <p>{item.data.Lon}</p>
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
            <p>{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  ));

  return renderList;
};

export default ListBox;
