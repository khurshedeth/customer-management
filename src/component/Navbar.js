import { IoIosArrowForward } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import Images from "../assets/crop-circle.png";
import React, { useState } from "react";

function Navbar({ handleSearch, filteredCustomers }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchInput(query);
    handleSearch(query);
  };

  return (
    <div className="flex justify-between items-center border-b-2 py-4">
      <div className="flex gap-2 items-center ">
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
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <IoNotifications size={25} />
        </div>
        <div>
          <img src={Images} alt="" className=" w-10" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
