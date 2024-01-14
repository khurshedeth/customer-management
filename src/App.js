import React, { useState, useEffect } from "react";
import CustomerPage from "./page/CustomerPage";
import Sidebar from "./component/Sidebar";
import "./App.css";
function App() {
  const [customers, setCustomers] = useState([]);
  const apiUrl = "https://dummyjson.com/users";

  const getData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setCustomers(data.users);
  };
  console.log(customers);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" flex  h-full w-full">
      <div>
        <Sidebar />
      </div>
      <div>
        <div>
          <CustomerPage customers={customers} setCustomers={setCustomers} />
        </div>
      </div>
    </div>
  );
}

export default App;
