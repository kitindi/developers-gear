import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full flex space-x-10  items-center md:px-28 boder border-gray-200 py-4 shadow-sm">
      <div className="flex items-center space-x-2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#E02424" fill="none">
            <path d="M15 9V15H9V9H15Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path
              d="M15 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V15Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M9 15.002H6C4.34315 15.002 3 16.3451 3 18.002C3 19.6588 4.34315 21.002 6 21.002C7.65685 21.002 9 19.6588 9 18.002V15.002Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M15 9L15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <p className="text-xl font-semibold text-slate-900">TechGear Hub</p>
      </div>
      <div className="flex-grow flex  items-center gap-16 ">
        <ul className="flex items-center space-x-4">
          <li className="cursor-pointer">
            <Link to="/">Shop</Link>
            <hr className="bg-red-500 h-1 border-none" />
          </li>
          <li className="cursor-pointer">
            <a href="#categories">Shop by Category</a>
          </li>
        </ul>
        <form action="" className="flex-grow" method="POST">
          <div className="flex items-center space-x-4 border border-gray-200 rounded-full p-1">
            <input type="text" placeholder="I'm shopping for ..." className=" px-4.5 py-2.5 flex-grow focus:outline-none" />
            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login">
          {" "}
          <button className="px-12 py-2 rounded-full border border-red-300 cursor-pointer">Login</button>
        </Link>
        <hr className="border-none h-1 bg-white" />
        <Link to="/cart" className="relative">
          <p>
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#F05252" fill="none">
              <path
                d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path
                d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
              <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
            </svg>
            <hr className="border-none h-1 bg-white" />
          </p>
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">0</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
