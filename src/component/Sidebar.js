import React from "react";
import { FaHouseUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { IoCubeOutline } from "react-icons/io5";
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";

function Sidebar() {
  return (
    <div className=" flex   flex-col items-start  p-4 gap-4 w-[100%] h-[100vh] bg-cyan-800 text-white text-2xl">
      <div className=" border-b-2 border-gray-400 w-full p-4">Logo</div>
      <div className=" flex gap-3 justify-center items-center hover:scale-105">
        <FaHouseUser />
        <button>dasborad</button>
      </div>
      <div className=" flex gap-3 justify-center items-center hover:scale-105">
        <FaUser />
        <button>Customer</button>
      </div>
      <div className=" flex gap-3 justify-center items-center hover:scale-105 active:red-600">
        <IoCubeOutline />
        <button>dasborad</button>
      </div>
      <div className=" flex gap-3 justify-center items-center hover:scale-105">
        <BiSolidShoppingBags />
        <button>Good/Services</button>
      </div>
      <div className=" flex gap-3 justify-center items-center hover:scale-105">
        <IoSettingsOutline />
        <button>setting</button>
      </div>
      <div className=" flex gap-3 justify-center items-center hover:scale-105">
        <BiSolidReport />
        <button>Reports</button>
      </div>
    </div>
  );
}

export default Sidebar;
