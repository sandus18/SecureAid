import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import Navbar from "../components/Navbar";

const RegisterNGO = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ngoName: "",
    registrationId: "",
    contactPerson: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("NGO Registration Data:", formData);
    // TODO: Send data to backend API
    navigate("/login-ngo");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
        <Navbar />
<div className="mt-16"></div>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <Users className="w-10 h-10 text-green-700" />
        </div>
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          NGO Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="ngoName"
            placeholder="NGO Name"
            value={formData.ngoName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            name="registrationId"
            placeholder="NGO Registration ID"
            value={formData.registrationId}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person Name"
            value={formData.contactPerson}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Register as NGO
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login-ngo")}
            className="text-green-600 hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterNGO;
