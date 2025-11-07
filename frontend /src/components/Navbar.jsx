import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Shield, Users } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current role based on route path
  const isAdmin = location.pathname.includes("admin");
  const isNGO = location.pathname.includes("ngo");

  // Define title and home route dynamically
  const roleTitle = isAdmin
    ? "Admin Dashboard"
    : isNGO
    ? "NGO Dashboard"
    : "SecureAid Portal";

  const homeRoute = isAdmin
    ? "/admin-dashboard"
    : isNGO
    ? "/ngo-dashboard"
    : "/";

  return (
    <nav className="w-full bg-white shadow-md py-3 px-6 flex items-center justify-between fixed top-0 left-0 z-50">
      <div
        onClick={() => navigate(homeRoute)}
        className="flex items-center gap-2 cursor-pointer"
      >
        {isAdmin ? (
          <Shield className="text-indigo-600 w-5 h-5" />
        ) : isNGO ? (
          <Users className="text-green-600 w-5 h-5" />
        ) : (
          <Home className="text-indigo-600 w-5 h-5" />
        )}
        <span className="text-lg font-semibold text-indigo-700">
          {roleTitle}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {location.pathname !== "/" && (
          <button
            onClick={() => navigate(homeRoute)}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition text-sm font-semibold"
          >
            Go Home
          </button>
        )}

        <button
          onClick={() => navigate("/")}
          className="text-gray-600 hover:text-red-500 transition text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
