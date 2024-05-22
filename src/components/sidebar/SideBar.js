import radarIcon from "../../assets/icons/radar.png";
import loctrackIcon from "../../assets/icons/liveLoc.png";
import shipIcon from "../../assets/icons/ship.png";
import locIcon from "../../assets/icons/location.svg";
import dangerIcon from "../../assets/icons/danger.png";
import { Link } from "react-router-dom";

const navLink = [
  {
    name: "Beranda",
    icon: radarIcon,
    link: "/",
  },

  {
    name: "Lokasi Kapal",
    icon: loctrackIcon,
    link: "/liveloc",
  },
  // {
  //   name: "Status Kapal",
  //   icon: shipIcon,
  //   link: "/shipstatus",
  // },
  {
    name: "Riwayat Lokasi",
    icon: locIcon,
    link: "/loclog",
  },
  {
    name: "Riwayat Bahaya",
    icon: dangerIcon,
    link: "/dangerlog",
  },
];

const SideBar = () => {
  return (
    <div className="bg-[#F3CE4B] text-black h-1000 w-64 flex flex-col justify-between">
      {/* Sidebar content */}
      <div className="py-4 px-6 ">
        <div class="flex flex-row mb-24">
          <h2 className="text-2xl font-semibold mb-4">Panic Button</h2>
        </div>

        {navLink.map((item) => (
          <Link key={item.name} to={item.link}>
            <div className="mt-3 flex p-3 rounded-md items-center hover:bg-[#AE922E] ease-in duration-150">
              <img class="h-6 w-6 mr-6" src={item.icon} />
              <h3 className="mr-2">{item.name}</h3>
            </div>
          </Link>
        ))}

        <div class="">
          {/* <div className="mt-6">
            <a href="#" className="flex items-center">
              <img class="h-6 w-6 mr-6" src="/icons/radar.png" />
              <h3 className="mr-2">Live Location</h3>
            </a>
          </div>

          <div className="mt-6">
            <a href="#" className="flex items-center">
              <img class="h-6 w-6 mr-6" src="/icons/radar.png" />
              <h3 className="mr-2">Ship Status</h3>
            </a>
          </div> */}
        </div>
      </div>

      {/* Sidebar footer */}
      <div className="py-4 px-6">
        <p className="text-sm">© 2024 Antech</p>
      </div>
    </div>
  );
};

export default SideBar;
