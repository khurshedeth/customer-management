import React from "react";
import { MdOutlineDelete } from "react-icons/md";

function CustomerTable({ filteredCustomers, handleDeleteCustomer }) {
  return (
    <div className="overflow-auto max-h-[500px]">
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 border-b text-start ml-3">User ID</th>
            <th className="py-2 border-b text-start ml-3">Name</th>
            <th className="py-2 border-b text-start ml-3">Email</th>
            <th className="py-2 border-b text-start ml-3">Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id} className="border-b">
              <td className="py-2 px-2">{customer.id}</td>
              <td className="py-2 px-2">{customer.firstName}</td>
              <td className="py-2 px-2">{customer.email}</td>
              <td className="py-2 px-2">{customer.phone}</td>
              <td>
                <button
                  onClick={() => handleDeleteCustomer(customer.id)}
                  className=" text-red-500"
                >
                  <MdOutlineDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
