import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Cloud, Lock, AlertTriangle } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-[Poppins]">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-emerald-400">SecureAid</h1>
        <nav className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition"
          >
            Login
          </button>
          
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold text-emerald-400 leading-tight">
            Empowering NGOs with Cybersecurity.
          </h2>
          <p className="text-gray-300 mt-6 text-lg">
            SecureAid integrates{" "}
            <span className="text-emerald-400 font-semibold">
              Zero Trust Architecture (ZTA)
            </span>
            ,{" "}
            <span className="text-emerald-400 font-semibold">
              Continuous Threat Exposure Management (CTEM)
            </span>
            , and{" "}
            <span className="text-emerald-400 font-semibold">
              Cloud Security Posture Management (CSPM)
            </span>{" "}
            to protect critical NGO and public welfare data.
          </p>
          <div className="mt-8 space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 border border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-black transition"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6193/6193268.png"
            alt="SecureAid"
            className="w-80 drop-shadow-[0_0_20px_#10b981]"
          />
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-900 py-16 px-8 md:px-20 text-center">
        <h3 className="text-3xl font-semibold text-emerald-400 mb-10">
          Core Security Frameworks
        </h3>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-emerald-400 transition">
            <ShieldCheck className="text-emerald-400 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">
              Zero Trust Architecture (ZTA)
            </h4>
            <p className="text-gray-400 text-sm">
              Enforces identity verification and least privilege access,
              ensuring trust is never assumed.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-emerald-400 transition">
            <AlertTriangle className="text-emerald-400 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">CTEM</h4>
            <p className="text-gray-400 text-sm">
              Continuously identifies and prioritizes vulnerabilities for
              proactive threat management.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-emerald-400 transition">
            <Cloud className="text-emerald-400 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">CSPM</h4>
            <p className="text-gray-400 text-sm">
              Monitors cloud configurations and compliance to prevent
              misconfigurations and data breaches.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        <p>
          © 2025 SecureAid | Building a Safer Digital World for NGOs and
          Communities.
        </p>
      </footer>
    </div>
  );
};

export default Home;
