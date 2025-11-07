import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Make sure file names exactly match your /src/pages folder
import Home from "./pages/Home";
import LoginLanding from "./pages/LoginLanding";
import LoginAdmin from "./pages/LoginAdmin";
import LoginNGO from "./pages/LoginNGO";
import RegisterAdmin from "./pages/RegisterAdmin";
import RegisterNGO from "./pages/RegisterNGO";
import AdminDashboard from "./pages/AdminDashboard";
import NGODashboard from "./pages/NGODashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginLanding />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-ngo" element={<LoginNGO />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/register-ngo" element={<RegisterNGO />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/ngo-dashboard" element={<NGODashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
