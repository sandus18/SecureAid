import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Users } from "lucide-react";
import Navbar from "../components/Navbar";


const LoginLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-300">
      <Navbar />
      <div className="mt-16">
  {/* Page content */}
</div>

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          SecureAid Login
        </h1>
        <p className="text-gray-600 mb-8">
          Please select your role to log in or register:
        </p>

        <div className="flex flex-col gap-5">
          <button
            onClick={() => navigate("/login-admin")}
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
          >
            <Shield className="w-5 h-5" /> Admin Login
          </button>

          <button
            onClick={() => navigate("/login-ngo")}
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            <Users className="w-5 h-5" /> NGO Login
          </button>
        </div>

        <p className="text-gray-600 mt-8">
          Don’t have an account yet?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginLanding;
