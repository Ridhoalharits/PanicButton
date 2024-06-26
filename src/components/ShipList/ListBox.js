import React from "react";
import currectLocation from "../../model/getCurrent";
import HitManual from "../../api/getShipData";
import { format } from "date-fns";

const formatTime = (isoString) => {
  const date = new Date(isoString);
  return format(date, "MMMM dd, yyyy  HH:mm:ss");
};

const ListBox = () => {
  const datas = HitManual();
  console.log(datas);
  // const renderList = datas.map((nestedArray, index) => (
  //   <div class="bg-white border-2 border-gray rounded-lg p-2  flex flex-col mt-2">
  //     <div>
  //       {nestedArray.map((item, innerIndex) => (
  //         <div class="justify-between flex flex-row">
  //           <p>1</p>
  //           <p>{item.data.Lat}</p>
  //           <p>{item.data.Lon}</p>
  //           {item.data.Btn === 0 ? (
  //             <div class="flex items-center">
  //               <div class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
  //               <div class="text-green-500">safe</div>
  //             </div>
  //           ) : (
  //             <div class="flex items-center">
  //               <div class="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
  //               <div class="text-red-500">danger</div>
  //             </div>
  //           )}
  //           <p>{formatTime(item.time)}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // ));

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <th scope="col" className="px-3 py-5 font-bold text-lg ">
                  Ship ID
                </th>
                <th scope="col" className="px-3 py-5 font-bold text-lg ">
                  Latitude
                </th>
                <th scope="col" className="px-3 py-5 font-bold text-lg">
                  Longitude
                </th>
                <th scope="col" className="px-3 py-5 font-bold text-lg">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-bold text-lg">
                  Waktu
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {datas.length == 0 ? (
                <p class="font-bold">Data Loading, Please Wait...</p>
              ) : (
                <>
                  {datas.map((nestedArray, index) => (
                    <>
                      {nestedArray.map((item) => (
                        <tr className="w-full border-b py-3 text-m last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                          <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex items-center gap-3">
                              <p>Kapal {index + 1}</p>
                            </div>
                          </td>

                          <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex items-center gap-3">
                              <p>{item.data.Lat}</p>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {item.data.Lon}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
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
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {formatTime(item.time)}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListBox;
