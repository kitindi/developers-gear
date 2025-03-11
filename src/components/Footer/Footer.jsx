import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="px-8 md:px-12 lg:px-28 py-16 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:items-start md:justify-center">
        <div>
          <h3 className="text-sm font-bold text-gray-700">Customer service</h3>
          <ul className="pt-5">
            <Link to="" className="text-sm text-gray-600 block py-1">
              Help Center
            </Link>
            <Link to="" className="text-sm text-gray-600 block py-1">
              Consumers
            </Link>
            <Link to="" className="text-sm text-gray-600 block py-1">
              Terms and Conditions for <br />
              Non-Tanzanian Customer
            </Link>
            <Link to="" className="text-sm text-gray-600 block py-1">
              Take our feedback survey
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-700">Shopping with us</h3>
          <ul className="pt-5">
            <Link to="" className="text-sm text-gray-600 block py-1">
              Delivery options
            </Link>
            <Link to="" className="text-sm text-gray-600 block py-1">
              Buyer Protection
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-700">Collaborate with us</h3>
          <ul className="pt-5">
            <Link to="" className="text-sm text-gray-600 block py-1">
              Partnerships
            </Link>
            <Link to="" className="text-sm text-gray-600 block py-1">
              Affiliate program
            </Link>
            <Link to="" className="text-sm text-gray-600 block py-1">
              Seller Log In
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-700">Pay with</h3>
          <ul className="pt-5 flex"></ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-700">Stay connected</h3>
          <ul className="pt-5 flex space-x-5">
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256" className="hover:text-red-300">
                  <path d="M240,149.31c0,16.11-3.17,29.89-9.17,39.84-7.43,12.33-19,18.85-33.39,18.85-27.94,0-47.78-37-68.78-76.22C111.64,100,92.35,64,74,64c-9.38,0-19.94,10-28.25,26.67A138.18,138.18,0,0,0,32,149.31c0,13.2,2.38,24.12,6.88,31.58S49.82,192,58.56,192c15.12,0,30.85-24.54,44.23-48.55a8,8,0,0,1,14,7.8C101.46,178.71,83.07,208,58.56,208c-14.41,0-26-6.52-33.39-18.85-6-10-9.17-23.73-9.17-39.84A154.81,154.81,0,0,1,31.42,83.54C42.82,60.62,57.94,48,74,48c27.94,0,47.77,37,68.78,76.22C159.79,156,179.08,192,197.44,192c8.74,0,15.18-3.63,19.68-11.11S224,162.51,224,149.31a138.18,138.18,0,0,0-13.74-58.64C202,74,191.39,64,182,64c-8.36,0-17.68,7.48-28.51,22.88a8,8,0,1,1-13.08-9.21c9-12.74,23-29.67,41.59-29.67,16.05,0,31.17,12.62,42.57,35.54A154.81,154.81,0,0,1,240,149.31Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256">
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
