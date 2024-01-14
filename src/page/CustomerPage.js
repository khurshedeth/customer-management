import React, { useState, useEffect } from "react";
import CustomerTable from "../component/CustomerTable";
import AddCustomerModal from "../component/CustomerModel";
import Navbar from "../component/Navbar";
import { IoAddCircleOutline } from "react-icons/io5";
import Popover from "react-popover";
import { toast } from "react-toastify";

function CustomerPage({ customers, setCustomers }) {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  console.log("parent compo", customers);
  const [filteredCustomers, setFilteredCustomers] = useState(() => {
    // Retrieve filtered customers from local storage on component mount
    const storedFilteredCustomers = localStorage.getItem("filteredCustomers");
    return storedFilteredCustomers
      ? JSON.parse(storedFilteredCustomers)
      : customers;
  });

  const handleAddCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    setFilteredCustomers((prevFilteredCustomers) => [
      ...prevFilteredCustomers,
      newCustomer,
    ]);
    setPopoverOpen(false);
    toast.success("Customer added successfully!");
  };

  const handleSearch = (query) => {
    if (query.trim() === "") {
      // If the search query is empty, reset filteredCustomers to the original list
      setFilteredCustomers(customers);
    } else {
      const filtered = customers.filter(
        (customer) =>
          customer.firstName.toLowerCase().includes(query.toLowerCase()) ||
          customer.id.toString().includes(query)
      );
      setFilteredCustomers(filtered);
    }
  };

  const handleDeleteCustomer = (customerId) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== customerId
    );
    setCustomers(updatedCustomers);

    const updatedFilteredCustomers = filteredCustomers.filter(
      (customer) => customer.id !== customerId
    );
    setFilteredCustomers(updatedFilteredCustomers);

    toast.success("Customer deleted successfully!");
  };

  useEffect(() => {
    // Save filtered customers to local storage whenever it changes
    localStorage.setItem(
      "filteredCustomers",
      JSON.stringify(filteredCustomers)
    );
  }, [filteredCustomers]);

  return (
    <div className="mx-4 min-w-[1240px]">
      <div>
        <Navbar
          handleSearch={handleSearch}
          filteredCustomers={filteredCustomers}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className="text-xl font-medium mb-4 md:mb-0">Customer List</h1>
        <Popover
          isOpen={isPopoverOpen}
          body={
            <AddCustomerModal
              handleAddCustomer={handleAddCustomer}
              filteredCustomers={filteredCustomers}
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
      <CustomerTable
        filteredCustomers={filteredCustomers}
        handleDeleteCustomer={handleDeleteCustomer}
      />
    </div>
  );
}

export default CustomerPage;
