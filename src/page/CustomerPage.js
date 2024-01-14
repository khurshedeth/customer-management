import React, { useState } from "react";
import CustomerTable from "../component/CustomerTable";
import AddCustomerModal from "../component/CustomerModel";
import Navbar from "../component/Navbar";
import { IoAddCircleOutline } from "react-icons/io5";
import Popover from "react-popover";

function CustomerPage({ customers, setCustomers }) {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleAddCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    setPopoverOpen(false);
  };

  return (
    <div className="mx-4 min-w-[1240px]">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className="text-xl font-medium mb-4 md:mb-0">Customer List</h1>
        <Popover
          isOpen={isPopoverOpen}
          body={
            <AddCustomerModal
              handleAddCustomer={handleAddCustomer}
              customers={customers}
            />
          }
          preferPlace="below"
          onOuterAction={() => setPopoverOpen(false)}
        >
          <button
            onClick={() => setPopoverOpen(!isPopoverOpen)}
            className="flex items-center bg-blue-900 text-white px-3 py-2 mt-2 md:mt-0"
          >
            <IoAddCircleOutline size={25} />
            <span className="ml-1">Customer</span>
          </button>
        </Popover>
      </div>
      <CustomerTable customers={customers} />
    </div>
  );
}

export default CustomerPage;
