import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
const Inventory = () => {
  const { showModal, handleShowModal } = useContext(ShopContext);

  return (
    <div className="w-full min-h-screen px-4 md:px-12 lg:px-20 bg-gray-100 relative">
      <div className="grid grid-cols-12">
        <div className="col-span-2  min-h-screen py-4 pr-3 border-gray-200 border-r-1">
          <h3 className="text-gray-500 text-sm pt-4">Menu</h3>
          <Sidebar />
        </div>
        {/* right column */}
        <div className="col-span-10 py-2 px-4 lg:px-8">
          <div className="mt-5 w-full bg-white rounded-md">
            <h2 className="text-sm font-medium text-gray-500 py-4 px-8">List of Products</h2>
            <div className="flex justify-between items-center px-8 py-4">
              <div>
                <span className="text-gray-500 py-4 px-8">All</span>
              </div>
              <div className="flex gap-2">
                <button className="bg-red-400 text-white px-4 py-2 text-xs cursor-pointer rounded-md flex items-center gap-2">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" viewBox="0 0 256 256">
                      <path d="M48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,0,1,85.78,206.4,30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.57,4.57,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.82-.56A8,8,0,0,0,142,145.86c-2.12-.55-21-5.22-32.84,2.76a20.58,20.58,0,0,0-9,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.14,3.93-4.6,3.06-15.17,1.56-19.55.36A8,8,0,0,0,109.94,214a61.34,61.34,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C154,179,137.49,174.17,127.6,171.31Zm83.09-26.84a8,8,0,0,0-10.23,4.84L188,184.21l-12.47-34.9a8,8,0,0,0-15.07,5.38l20,56a8,8,0,0,0,15.07,0l20-56A8,8,0,0,0,210.69,144.47ZM216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z"></path>
                    </svg>
                  </span>{" "}
                  Export CSV
                </button>

                <button className="bg-red-400 text-white px-4 py-2 text-xs cursor-pointer rounded-md flex items-center gap-2" onClick={handleShowModal}>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" viewBox="0 0 256 256">
                      <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                    </svg>
                  </span>{" "}
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal component */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex items-center justify-center"
        style={{ display: showModal ? "flex" : "none" }}
      >
        <div className="bg-white z-40 w-1/2 h-1/2 rounded-md p-8 shadow-lg flex flex-col gap-4">
          <h2 className="text-lg font-medium text-gray-500">Add Product</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Product Name" className="border border-gray-300 rounded-md p-2" />
            <input type="text" placeholder="Product Price" className="border border-gray-300 rounded-md p-2" />
            <input type="text" placeholder="Product Description" className="border border-gray-300 rounded-md p-2" />
            <button type="submit" className="bg-red-400 text-white px-4 py-2 text-xs cursor-pointer rounded-md">
              Add Product
            </button>
          </form>
          <button onClick={handleShowModal} className="bg-gray-400 text-white px-4 py-2 text-xs cursor-pointer rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
