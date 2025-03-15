import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "") {
      setErrorMessage("Please provide your full name");
      return null;
    }
    if (email === "") {
      setErrorMessage("Please provide your email");
      return null;
    }
    if (password === "") {
      setErrorMessage("Please provide password");
      return null;
    }
    setErrorMessage("");
    await axios
      .post("http://localhost:4000/api/auth/user-register", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error("Error Status Code:", error.response.status);
          console.error("Error Data:", error.response.data.message);
          // Set the error message in state
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
          setErrorMessage("No response received from the server.");
        } else {
          // Something happened in setting up the request
          console.error("Request Error:", error.message);
          setErrorMessage("An error occurred while setting up the request.");
        }
      });
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="px-4 md:px-12 lg:px-28 min-h-96 py-8 lg:py-4">
      <section class="">
        <div class="flex flex-col items-center justify-center px-2 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-center  text-gray-900 md:text-2xl dark:text-white">Create Account </h1>
              <form class="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Full name
                  </label>
                  <input
                    type="name"
                    name="name"
                    nameid="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="James Jamal"
                    required=""
                  />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">{errorMessage && <p className="text-xs text-red-400">{errorMessage}</p>}</div>
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
