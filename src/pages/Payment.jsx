import { paymentMethod } from "../assets/all_products.js";

const Payment = () => {
  return (
    <div className="px-4 md:px-12 lg:px-28 min-h-screen py-10 ">
      <div className="grid  grid-cols-1 md:grid-cols-5 gap-16 ">
        <div className="md:col-span-3 border-r-2 border-gray-100 pr-8">
          <h2 className="text-3xl font-bold text-gray-800">Shipping</h2>
          <div className="pt-8">
            <form method="POST">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label for="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tanzania"
                    required
                  />
                </div>
                <div>
                  <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    City
                  </label>
                  <input
                    type="tel"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Dar es Salaam"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
                <div>
                  <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <input
                    type="url"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mwenge, ITV"
                    required
                  />
                </div>
                <div>
                  <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone number
                  </label>
                  <input
                    type="phonenumber"
                    id="phonenumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0675102309"
                    required
                  />
                </div>
                <div>
                  <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select Payment Method
                  </label>
                  <div className="flex  items-center gap-12 py-3">
                    <img src={paymentMethod[0].logo} alt="" className="w-20 cursor-pointer" />
                    <img src={paymentMethod[1].logo} alt="" className="w-20 cursor-pointer" />
                    <img src={paymentMethod[2].logo} alt="" className="w-20 cursor-pointer" />
                  </div>
                </div>
                <div></div>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  I agree with the{" "}
                  <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 cursor-pointer"
              >
                Pay and Submit
              </button>
            </form>
          </div>
        </div>
        <div className="md:col-span-2  pl-8">
          <div className=" py-5 px-16">
            <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
            <div className="grid grid-cols-2 py-10">
              <div>
                <h3 className="text-md font-semibold text-gray-500">Balance Amout</h3>
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-500">Tsh 20000</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 pb-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500">VAT (18%)</h3>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500">Tsh 2000</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 py-3">
              <div>
                <h3 className="text-md font-semibold text-gray-500">Total</h3>
                <p className="text-gray-500 text-xs">(Inc VAT)</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Tsh 22000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
