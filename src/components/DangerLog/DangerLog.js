import React from "react";
import locIcon from "../../assets/icons/liveLoc.png";
import DangerList from "./DangerList";
import getAllDanger from "../../model/getAllDanger";
import { dateFormatter } from "../../model/dateFormat";
import GetDangerLog from "../../api/getLog";

const DangerLog = () => {
  const data = GetDangerLog();
  console.log(data);
  return (
    <div class="bg-white border-2 border-gray rounded-lg p-8  flex flex-col mb-3">
      <div class="flex flex-row">
        <img class="w-6 h-6 mr-6" src={locIcon} alt="locIcon" />
        <h1 class="text-black text-2xl font-semibold mb-4">Danger Log</h1>
      </div>

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
                    Longiture
                  </th>
                  <th scope="col" className="px-3 py-5 font-bold text-lg">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-5 font-bold text-lg">
                    Last Update
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.length === 0 ? (
                  <p class="font-bold">Data Loading, Please Wait...</p>
                ) : (
                  <>
                    {data.map((item) => (
                      <>
                        <tr className="w-full border-b py-3 text-m last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                          <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex items-center gap-3">
                              <p>{item.device_id}</p>
                            </div>
                          </td>

                          <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex items-center gap-3">
                              <p>{item.latitude}</p>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {item.longitude}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {item.btn === 0 ? (
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
                            {dateFormatter(item.timestamp)}
                          </td>
                        </tr>
                      </>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <DangerList /> */}
    </div>
  );
};

export default DangerLog;
