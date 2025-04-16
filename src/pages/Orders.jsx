import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Orders = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-12 lg:px-20 bg-gray-100">
      <div className="grid grid-cols-12">
        <div className="col-span-2  min-h-screen py-4 pr-3 border-gray-200 border-r-1">
          <h3 className="text-gray-500 text-sm pt-4">Menu</h3>
          <Sidebar />
        </div>
        {/* right column */}
        <div className="col-span-10 py-5  px-4 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Data cards */}
            <div className="bg-gray-50 py-4 rounded-sm col-span-4 flex items-center gap-12 px-8 ">
              <div className="">
                <p className="text-sm font-medium text-gray-500 mb-1">Total Revenue</p>
                <p className="text-md font-medium text-gray-500 mb-2">Tsh 200,000</p>
                <p className="text-xs font- text-red-500 font-medium">Tsh 1200 last month</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fb2c36" viewBox="0 0 256 256">
                  <path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path>
                </svg>
              </div>
            </div>
            <div className="bg-gray-50 py-4 rounded-sm col-span-4 flex items-center gap-12 px-8 ">
              <div className="">
                <p className="text-sm font-medium text-gray-500 mb-1">Total Customers</p>
                <p className="text-md font-medium text-gray-500 mb-2">100</p>
                <p className="text-xs font- text-red-500 font-medium">10 users last month</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fb2c36" viewBox="0 0 256 256">
                  <path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path>
                </svg>
              </div>
            </div>
            <div className="bg-gray-50 py-4 rounded-sm col-span-4 flex items-center gap-12 px-8 ">
              <div className="">
                <p className="text-sm font-medium text-gray-500 mb-1">Total Orders</p>
                <p className="text-md font-medium text-gray-500 mb-2">137</p>
                <p className="text-xs font- text-red-500 font-bold">25 orders last month</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#05c46b" viewBox="0 0 256 256">
                  <path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full bg-white rounded-md">
            <h2 className="text-sm font-medium text-gray-500 py-4 px-8">Transactions</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
