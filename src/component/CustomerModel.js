import React, { useState } from "react";

function AddCustomerModal({ setShowModal, handleAddCustomer, customers }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const newCustomer = {
      id: customers.length + 1,
      firstName,
      email,
      phone,
    };

    handleAddCustomer(newCustomer);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block text-sm mb-1">Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1">Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 mr-2 rounded"
      >
        Submit
      </button>
      <button
        onClick={() => setShowModal(false)}
        className="border border-gray-300 py-2 px-4 rounded"
      >
        Cancel
      </button>
    </div>
  );
}

export default AddCustomerModal;
