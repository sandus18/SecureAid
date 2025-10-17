import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import CSPM from "./pages/CSPM";
import CTEM from "./pages/CTEM";
import Policies from "./pages/Policies";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <nav style={{ width: "200px", background: "#1e293b", color: "#fff", padding: "20px" }}>
          <h2>SecureAid</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/" style={{ color: "white" }}>Dashboard</Link></li>
            <li><Link to="/cspm" style={{ color: "white" }}>CSPM</Link></li>
            <li><Link to="/ctem" style={{ color: "white" }}>CTEM</Link></li>
            <li><Link to="/policies" style={{ color: "white" }}>Policies</Link></li>
          </ul>
        </nav>

        {/* Page Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cspm" element={<CSPM />} />
            <Route path="/ctem" element={<CTEM />} />
            <Route path="/policies" element={<Policies />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
