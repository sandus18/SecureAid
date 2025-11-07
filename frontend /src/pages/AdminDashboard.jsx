import React from "react";
import { Shield, Users, AlertTriangle, Activity, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Mock data (replace with backend API data later)
  const stats = [
    { title: "Total NGOs", value: 24, icon: <Users className="w-6 h-6 text-indigo-600" /> },
    { title: "Active Threats", value: 5, icon: <AlertTriangle className="w-6 h-6 text-red-500" /> },
    { title: "Incidents Resolved", value: 89, icon: <Shield className="w-6 h-6 text-green-500" /> },
    { title: "System Uptime", value: "99.97%", icon: <Activity className="w-6 h-6 text-yellow-500" /> },
  ];

  const ngos = [
    { name: "Helping Hands", status: "Secure", lastAudit: "2025-10-20" },
    { name: "Relief Trust", status: "At Risk", lastAudit: "2025-10-22" },
    { name: "FutureAid Foundation", status: "Secure", lastAudit: "2025-10-18" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Bar */}
      <header className="bg-white shadow-md flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-700">SecureAid Admin Dashboard</h1>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center text-gray-600 hover:text-red-600 transition"
        >
          <LogOut className="w-5 h-5 mr-2" /> Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-600 font-medium">{s.title}</h3>
                  <p className="text-2xl font-bold text-gray-800">{s.value}</p>
                </div>
                <div>{s.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* NGO Monitoring Table */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">NGO Monitoring Overview</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-indigo-50 text-indigo-700">
                <th className="p-3 border-b">NGO Name</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Last Security Audit</th>
                <th className="p-3 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {ngos.map((ngo, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition duration-150 border-b"
                >
                  <td className="p-3 font-medium text-gray-700">{ngo.name}</td>
                  <td
                    className={`p-3 font-semibold ${
                      ngo.status === "Secure" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {ngo.status}
                  </td>
                  <td className="p-3 text-gray-600">{ngo.lastAudit}</td>
                  <td className="p-3 text-center">
                    <button
                      className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700"
                      onClick={() => alert(`Viewing details for ${ngo.name}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-4 border-t mt-auto">
        Â© 2025 SecureAid | Admin Monitoring System
      </footer>
    </div>
  );
};

export default AdminDashboard;

