import React from "react";
import heroImage from "../../assets/header-sales.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-10 py-28">
      <div className="col-span-2 md:col-span-1  gap-8 flex flex-col justify-center">
        <h1 className="text-5xl font-semibold text-gray-800">Elevate Your Game with Premium Tech Accessories</h1>
        <p className="text-2xl font-medium text-gray-500 py-4">
          Your one-stop shop for premium tech accessories designed specifically for software engineers and tech professionals
        </p>

        <ul className="text-md font-medium flex space-x-4">
          <li className="text-red-500 ">
            <Link to="" className="flex items-center space-x-2 px-8 py-3 border border-red-500 rounded-full">
              🔥 Best Sellers{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fb2c36" fill="none">
                <path d="M12 20L12 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M17 15C17 15 13.3175 20 11.9999 20C10.6823 20 6.99997 15 6.99997 15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center  py-10">
        <img src={heroImage} alt="" />
        {/* <button className="bg-red-500 text-white text-lg font-medium px-8 py-2 rounded-full max-w-[220px]">Shop now</button> */}
      </div>
    </div>
  );
};

export default Hero;
