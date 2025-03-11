import { Link } from "react-router";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { cartItems } = useContext(ShopContext);
  const totalItems = Object.values(cartItems).reduce((acc, item) => acc + item, 0);
  return (
    <div className="w-full flex space-x-10  items-center px-8 md:px-28 boder border-gray-200 py-4 shadow-sm">
      <Link to="/" className="flex items-center space-x-2">
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
      </Link>
      <div className="flex-grow flex  items-center gap-16 ">
        <ul className="flex items-center space-x-10">
          <li className="cursor-pointer">
            <Link to="/">Shop</Link>
            <hr className="bg-red-500 h-1 border-none" />
          </li>
          <div className="relative cursor-pointer" onMouseEnter={() => setMegaMenuOpen(true)} onMouseLeave={() => setMegaMenuOpen(false)}>
            <button className="cursor-pointer">Shop By Categories</button>
            {megaMenuOpen && (
              <div
                className="min-w-4xl absolute left-10 mt-0 bg-white text-black p-4 rounded-lg shadow-lg grid grid-cols-4 gap-2 items-center"
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <div>
                  {" "}
                  <Link to="/keyboard_mice" className=" p-3   rounded-lg  flex items-center space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e02424" viewBox="0 0 256 256">
                        <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192Zm-16-64a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,128Zm0-32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM72,160a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h8A8,8,0,0,1,72,160Zm96,0a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Zm40,0a8,8,0,0,1-8,8h-8a8,8,0,0,1,0-16h8A8,8,0,0,1,208,160Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-600 text-sm font-medium py-3">Keyboards & Mice</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/monitor" className="p-3   rounded-lg  flex items-center space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e02424" viewBox="0 0 256 256">
                        <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-600 text-sm font-medium py-3">Monitors </p>
                    </div>
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link to="/headphones" className="p-3  rounded-lg  flex items-center space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e02424" viewBox="0 0 256 256">
                        <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,40h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24Z"></path>
                      </svg>
                    </div>
                    <div>
                      {" "}
                      <p className="text-red-600 text-sm font-medium py-3">Headphones</p>
                    </div>
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link to="/laptop" className="p-3  rounded-lg  flex items-center space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e02424" viewBox="0 0 256 256">
                        <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-600 text-sm font-medium py-3">Laptops</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/desktop_pc" className="p-3  rounded-lg  flex items-center space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e02424" viewBox="0 0 256 256">
                        <path d="M216,72a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h32A8,8,0,0,1,216,72Zm-8,24H176a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm40-48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V192H96v16h16a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72H136V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM136,176V88H32a8,8,0,0,0-8,8v72a8,8,0,0,0,8,8Zm96,32V48H152V208h80Zm-40-40a12,12,0,1,0,12,12A12,12,0,0,0,192,168Z"></path>
                      </svg>
                    </div>
                    <div>
                      {" "}
                      <p className="text-red-600 text-sm font-medium py-3">Desktop PC</p>
                    </div>
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link to="/cables_charger" className="p-3   rounded-lg  flex items-center space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e02424" viewBox="0 0 256 256">
                        <path d="M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-16,0V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16ZM168,184H88a24,24,0,0,1-24-24V72H192v88A24,24,0,0,1,168,184Zm-17.42-60.56a8,8,0,0,1,.91,7.37l-12,32a8,8,0,0,1-15-5.62l8-21.19H112a8,8,0,0,1-7.49-10.81l12-32a8,8,0,1,1,15,5.62l-8,21.19H144A8,8,0,0,1,150.58,123.44Z"></path>
                      </svg>
                    </div>
                    <div>
                      {" "}
                      <p className="text-red-600 text-sm font-medium py-3"> Cables & Chargers</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/desk_accessories" className="p-4  rounded-lg  flex items-center space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#E02424" fill="none">
                        <path d="M22 12H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          d="M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M4 12V22M20 12V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          d="M7 6V5C7 3.58579 7 2.87868 7.43934 2.43934C7.87868 2 8.58579 2 10 2H14C15.4142 2 16.1213 2 16.5607 2.43934C17 2.87868 17 3.58579 17 5V6C17 7.41421 17 8.12132 16.5607 8.56066C16.1213 9 15.4142 9 14 9H10C8.58579 9 7.87868 9 7.43934 8.56066C7 8.12132 7 7.41421 7 6Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M13.5 9L14 12M10.5 9L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-600 text-sm font-medium py-3">Desk Accessories </p>
                    </div>
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link to="/apparel" className="p-4   rounded-lg flex items-center space-x-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#E02424" fill="none">
                        <path
                          d="M5.99756 12V17.6841C5.99756 19.4952 5.99756 20.4008 6.58285 20.9635C7.24789 21.6028 9.6154 21.9785 11.9925 21.9991C14.3085 22.0192 16.6337 21.7022 17.4021 20.9635C17.9874 20.4008 17.9874 19.4952 17.9874 17.6841V12"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.72228 14.022C4.8566 13.7083 3.22971 13.4394 2.49588 12.7032C1.48592 11.69 2.13864 10.3201 3.37707 7.73891C3.93449 6.5771 5.00094 5.72243 6.24362 5.38452C6.41238 5.33863 6.55884 5.23314 6.65592 5.08755L7.93933 3.08867C7.97639 3.03309 8.02343 2.98533 8.08061 2.95084C8.65909 2.60195 10.0921 1.99998 11.9925 1.99998C13.8929 1.99998 15.2321 2.60195 15.8105 2.95084C15.8677 2.98533 15.9148 3.03309 15.9518 3.08867L17.2721 5.0687C17.3692 5.21429 17.5156 5.31978 17.6844 5.36567C18.9271 5.70358 19.9451 6.45012 20.5026 7.61193C21.8937 10.1413 22.5105 11.6707 21.5005 12.6839C20.7667 13.4201 19.1174 13.7116 18.2517 14.0253"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.50098 5.49998L10.7345 8.79261C11.3409 9.26419 11.644 9.49998 12.001 9.49998C12.358 9.49998 12.6611 9.26419 13.2675 8.79261L17.501 5.49998"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.50098 2.99998L11.001 8.99998M14.501 2.99998L13.001 8.99998"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-600 text-sm font-medium py-3">Developer Apparel & Merch</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
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
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">{totalItems}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
