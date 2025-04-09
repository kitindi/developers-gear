import React from "react";

const SellerDashboard = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-12 lg:px-28 bg-gray-100">
      <div className="grid grid-cols-12">
        <div className="col-span-2  min-h-screen py-4 pr-3 border-gray-200 border-r-1">
          <h3 className="text-gray-500 text-sm pt-4">Menu</h3>
          <ul className="py-10 ">
            <li className="flex items-center space-x-2 mb-2 cursor-pointer hover:bg-white p-2 rounded-md">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" color="#f06b6b" fill="none">
                  <path
                    d="M10.5 8.75V6.75C10.5 5.10626 10.5 4.28439 10.046 3.73121C9.96291 3.62995 9.87005 3.53709 9.76879 3.45398C9.21561 3 8.39374 3 6.75 3C5.10626 3 4.28439 3 3.73121 3.45398C3.62995 3.53709 3.53709 3.62995 3.45398 3.73121C3 4.28439 3 5.10626 3 6.75V8.75C3 10.3937 3 11.2156 3.45398 11.7688C3.53709 11.8701 3.62995 11.9629 3.73121 12.046C4.28439 12.5 5.10626 12.5 6.75 12.5C8.39374 12.5 9.21561 12.5 9.76879 12.046C9.87005 11.9629 9.96291 11.8701 10.046 11.7688C10.5 11.2156 10.5 10.3937 10.5 8.75Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75 15.5H5.75C5.05222 15.5 4.70333 15.5 4.41943 15.5861C3.78023 15.78 3.28002 16.2802 3.08612 16.9194C3 17.2033 3 17.5522 3 18.25C3 18.9478 3 19.2967 3.08612 19.5806C3.28002 20.2198 3.78023 20.72 4.41943 20.9139C4.70333 21 5.05222 21 5.75 21H7.75C8.44778 21 8.79667 21 9.08057 20.9139C9.71977 20.72 10.22 20.2198 10.4139 19.5806C10.5 19.2967 10.5 18.9478 10.5 18.25C10.5 17.5522 10.5 17.2033 10.4139 16.9194C10.22 16.2802 9.71977 15.78 9.08057 15.5861C8.79667 15.5 8.44778 15.5 7.75 15.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 17.25V15.25C21 13.6063 21 12.7844 20.546 12.2312C20.4629 12.1299 20.3701 12.0371 20.2688 11.954C19.7156 11.5 18.8937 11.5 17.25 11.5C15.6063 11.5 14.7844 11.5 14.2312 11.954C14.1299 12.0371 14.0371 12.1299 13.954 12.2312C13.5 12.7844 13.5 13.6063 13.5 15.25V17.25C13.5 18.8937 13.5 19.7156 13.954 20.2688C14.0371 20.3701 14.1299 20.4629 14.2312 20.546C14.7844 21 15.6063 21 17.25 21C18.8937 21 19.7156 21 20.2688 20.546C20.3701 20.4629 20.4629 20.3701 20.546 20.2688C21 19.7156 21 18.8937 21 17.25Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.25 3H16.25C15.5522 3 15.2033 3 14.9194 3.08612C14.2802 3.28002 13.78 3.78023 13.5861 4.41943C13.5 4.70333 13.5 5.05222 13.5 5.75C13.5 6.44778 13.5 6.79667 13.5861 7.08057C13.78 7.71977 14.2802 8.21998 14.9194 8.41388C15.2033 8.5 15.5522 8.5 16.25 8.5H18.25C18.9478 8.5 19.2967 8.5 19.5806 8.41388C20.2198 8.21998 20.72 7.71977 20.9139 7.08057C21 6.79667 21 6.44778 21 5.75C21 5.05222 21 4.70333 20.9139 4.41943C20.72 3.78023 20.2198 3.28002 19.5806 3.08612C19.2967 3 18.9478 3 18.25 3Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-gray-600 text-sm">Dashboard</span>
            </li>
            <li className="flex items-center space-x-2 mb-2 cursor-pointer hover:bg-white p-2 rounded-md">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" color="#f06b6b" fill="none">
                  <path
                    d="M3.06164 15.1933L3.42688 13.1219C3.85856 10.6736 4.0744 9.44952 4.92914 8.72476C5.78389 8 7.01171 8 9.46734 8H14.5327C16.9883 8 18.2161 8 19.0709 8.72476C19.9256 9.44952 20.1414 10.6736 20.5731 13.1219L20.9384 15.1933C21.5357 18.5811 21.8344 20.275 20.9147 21.3875C19.995 22.5 18.2959 22.5 14.8979 22.5H9.1021C5.70406 22.5 4.00504 22.5 3.08533 21.3875C2.16562 20.275 2.4643 18.5811 3.06164 15.1933Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7.5 8L7.66782 5.98618C7.85558 3.73306 9.73907 2 12 2C14.2609 2 16.1444 3.73306 16.3322 5.98618L16.5 8"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15 11C14.87 12.4131 13.5657 13.5 12 13.5C10.4343 13.5 9.13002 12.4131 9 11"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <span className="text-gray-600 text-sm">Orders</span>
            </li>
            <li className="flex items-center space-x-2 mb-2 cursor-pointer hover:bg-white p-2 rounded-md">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" color="#f06b6b" fill="none">
                  <path
                    d="M2.9668 10.4958V15.4976C2.9668 18.3271 2.9668 19.7418 3.84548 20.6208C4.72416 21.4998 6.13837 21.4998 8.9668 21.4998H14.9668C17.7952 21.4998 19.2094 21.4998 20.0881 20.6208C20.9668 19.7418 20.9668 18.3271 20.9668 15.4976V10.4958"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path d="M6.9668 17.993H10.9668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path
                    d="M10.1038 8.41812C9.82182 9.43652 8.79628 11.1933 6.84777 11.4479C5.12733 11.6727 3.82246 10.9217 3.48916 10.6077C3.12168 10.3531 2.28416 9.53836 2.07906 9.02916C1.87395 8.51996 2.11324 7.41669 2.28416 6.9669L2.96743 4.98851C3.13423 4.49159 3.5247 3.31629 3.92501 2.91876C4.32533 2.52123 5.13581 2.50394 5.4694 2.50394H12.4749C14.2781 2.52941 18.2209 2.48786 19.0003 2.50394C19.7797 2.52002 20.2481 3.17336 20.3848 3.45342C21.5477 6.27024 22 7.88346 22 8.57088C21.8482 9.30419 21.22 10.6869 19.0003 11.2951C16.6933 11.9272 15.3854 10.6978 14.9751 10.2258M9.15522 10.2258C9.47997 10.6246 10.4987 11.4275 11.9754 11.4479C13.4522 11.4682 14.7273 10.4379 15.1802 9.92026C15.3084 9.7675 15.5853 9.31431 15.8725 8.41812"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-gray-600 text-sm">Inventory</span>
            </li>
            <li className="flex items-center space-x-2 mb-2 cursor-pointer hover:bg-white p-2 rounded-md">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#f06b6b" fill="none">
                  <path
                    d="M16.5 20V17.9704C16.5 16.7281 15.9407 15.5099 14.8103 14.9946C13.4315 14.3661 11.7779 14 10 14C8.22212 14 6.5685 14.3661 5.18968 14.9946C4.05927 15.5099 3.5 16.7281 3.5 17.9704V20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.5 20.001V17.9713C20.5 16.729 19.9407 15.5109 18.8103 14.9956C18.5497 14.8768 18.2792 14.7673 18 14.668"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="10" cy="7.5" r="3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M15 4.14453C16.4457 4.57481 17.5 5.91408 17.5 7.49959C17.5 9.0851 16.4457 10.4244 15 10.8547"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-gray-600 text-sm">Customers</span>
            </li>
          </ul>
        </div>
        {/* right column */}
        <div className="col-span-10 py-5 px-10">
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

export default SellerDashboard;
