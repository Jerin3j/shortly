import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-extrabold text-red-600">404</h1>
      <p className="text-2xl font-semibold mt-4 text-gray-800">
        Oops! Page not found.
      </p>
      <p className="text-md mt-2 text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-md text-lg font-medium"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
