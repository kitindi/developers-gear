import React from "react";
import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "./util/auth"; // Import the authentication utility

const ProtectedRoute = () => {
  // Check if the user is authenticated
  if (!isAuthenticated()) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  // Render the protected component if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
