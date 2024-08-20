import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out border-r-2`}
      >
        <div className="">
          <div className="p-4">
            <h3 className="text-2xl font-bold">Sedap</h3>
            <h5 className="text-gray-500 text-sm">Modern Admin Dashboard</h5>
          </div>
          {/* <button
            onClick={toggleDrawer}
            className="p-2 m-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          >
            ☰
          </button> */}
        </div>

        <div className="p-4">
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-blue-600">Dashboard</li>
            <li className="cursor-pointer hover:text-blue-600">Order List</li>
            <li className="cursor-pointer hover:text-blue-600">Order Detail</li>
            <li className="cursor-pointer hover:text-blue-600">Customer</li>
            <li className="cursor-pointer hover:text-blue-600">Analytics</li>
            <li className="cursor-pointer hover:text-blue-600">Reviews</li>
            <li className="cursor-pointer hover:text-blue-600">Foods</li>
            <li className="cursor-pointer hover:text-blue-600">Food Detail</li>
            <li className="cursor-pointer hover:text-blue-600">
              Customer Detail
            </li>
            <li className="cursor-pointer hover:text-blue-600">Calendar</li>
            <li className="cursor-pointer hover:text-blue-600">Chat</li>
            <li className="cursor-pointer hover:text-blue-600">Wallet</li>
          </ul>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <img
              className="w-full h-auto"
              src="your-image-src"
              alt="Your Alt Text"
            />
          </div>
          <div>
            <p className="mb-4">
              Please, organize your menus through button below!
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              + Add Menus
            </button>
          </div>
        </div>
        <p className="p-4">Dashboard</p>
      </div>
    </>
  );
};

export default Sidebar;
