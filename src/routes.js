import { createBrowserRouter } from "react-router-dom";
import Overview from "./page/Overview/overview";
import LiveLocation from "./page/LiveLocation/liveLocation";
import ShipStatus from "./page/ShipStatus/shipStatus";
import LocationLog from "./page/LocationLog/locationLog";
import DangerLog from "./page/DangerLog/dangerLog";
import AllData from "./api/AllData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/liveloc",
    element: <LiveLocation />,
  },
  {
    path: "/shipstatus",
    element: <ShipStatus />,
  },
  {
    path: "/loclog",
    element: <LocationLog />,
  },
  {
    path: "/dangerlog",
    element: <DangerLog />,
  },
  {
    path: "/test",
    element: <AllData />,
  },
]);
