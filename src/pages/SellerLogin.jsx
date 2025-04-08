import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const LoginSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setError("Please provide your email");
      return null;
    }
    if (password === "") {
      setError("Please provide password");
      return null;
    }
    setError("");

    try {
      // Send a POST request using Axios
      const response = await axios.post("http://localhost:4000/api/seller/login", { email, password });

      // console.log("Login successful:", response.data);
      setEmail("");
      setPassword("");
      // Store the JWT in localStorage
      localStorage.setItem("token", response.data.token); // Assuming the token is in response.data.token
      console.log("Login successful:", response.data);

      // Redirect the user to a protected route (payment page)
      window.location.href = "/seller-dashboard";

      // Handle successful login (e.g., redirect or update state)
    } catch (err) {
      // Handle errors
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error Status Code:", err.response.status);
        console.error("Error Data:", err.response.data);
        setError(err.response.data.msg || "Invalid credentials"); // Set the error message from the server
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response received:", err.request);
        setError("Network error. Please try again.");
      } else {
        // Something happened in setting up the request
        console.error("Error:", err.message);
        setError("An unexpected error occurred.");
      }
    }
  };
  return (
    <div className="px-4 md:px-12 lg:px-28 min-h-96 py-8 lg:py-4">
      <section class="">
        <div class="flex flex-col items-center justify-center px-2 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-center  text-gray-900 md:text-2xl">Sign in as Seller</h1>
              <form class="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
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
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 focus:outline-none"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 focus:outline-none"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">{error && <p className="text-xs text-red-400">{error}</p>}</div>
                <button
                  type="submit"
                  class="w-full text-white bg-red-600 hover:bg-red-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700  cursor-pointer"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link to="/seller-register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up
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

export default LoginSignUp;
