import { IoIosArrowForward } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import Images from "../assets/crop-circle.png";

function Navbar({ customers }) {
  return (
    <div className="flex justify-between items-center border-b-2 py-4">
      <div className="flex gap-2 items-center capitalize">
        <span>Application</span>
        <span>
          <IoIosArrowForward />
        </span>
        <span>Dashboard</span>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <div className="border border-gray-400 p-2 rounded-2xl bg-white">
          <input
            className="outline-none px-2"
            placeholder="Search by name and id"
          />
        </div>
        <div>
          <IoNotifications />
        </div>
        <div>
          <img src={Images} alt="" className=" w-10" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
