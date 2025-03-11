import React from "react";
import { Link } from "react-router";

const SignupPage = () => {
  return (
    <div className="px-4 md:px-12 lg:px-28 min-h-96 py-16 lg:py-4">
      <section class="">
        <div class="flex flex-col items-center justify-center px-2 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-center  text-gray-900 md:text-2xl dark:text-white">Create Account </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 " required="" />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-red-600 hover:bg-red-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700  cursor-pointer"
                >
                  create account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account ?{" "}
                  <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
