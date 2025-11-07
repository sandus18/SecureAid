import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Shield, LogOut, Home, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"; // optional shadcn UI
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

// --- Mock Data ---
const kpis = {
  riskScore: 43,
  openAlerts: 12,
  compliancePct: 78,
  misconfigCount: 6,
};

const areaData = [
  { period: "Jul", risk: 25 },
  { period: "Aug", risk: 34 },
  { period: "Sep", risk: 40 },
  { period: "Oct", risk: 43 },
  { period: "Nov", risk: 38 },
];

const pieData = [
  { name: "High", value: 4 },
  { name: "Medium", value: 6 },
  { name: "Low", value: 2 },
];

const ALERT_COLORS = ["#DC2626", "#F59E0B", "#10B981"];

const threatAlerts = [
  {
    id: "T-1024",
    title: "Suspicious login from new country",
    severity: "High",
    time: "2025-10-16 18:12",
    status: "Open",
  },
  {
    id: "T-1025",
    title: "Excessive API errors detected",
    severity: "Medium",
    time: "2025-10-15 09:23",
    status: "Investigating",
  },
  {
    id: "T-1026",
    title: "Misconfigured S3 bucket (public)",
    severity: "High",
    time: "2025-10-14 11:03",
    status: "Open",
  },
];

const cloudConfigs = [
  {
    id: "C-001",
    resource: "S3 / ngo-backups",
    issue: "Public Read",
    severity: "High",
  },
  {
    id: "C-002",
    resource: "IAM Policy / ProjectAdmin",
    issue: "Wildcard * permissions",
    severity: "Medium",
  },
  {
    id: "C-003",
    resource: "GCE Instance",
    issue: "Missing OS patches",
    severity: "Low",
  },
];

const reports = [
  {
    id: "R-2025-10",
    title: "Monthly CSPM Report Oct 2025",
    date: "2025-10-01",
    size: "1.4MB",
  },
  {
    id: "R-2025-09",
    title: "Monthly CSPM Report Sep 2025",
    date: "2025-09-01",
    size: "1.1MB",
  },
];

export default function NGODashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Top Navigation Bar */}
      <nav className="bg-white shadow-sm px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Shield className="text-indigo-600" size={22} />
          <span className="font-semibold text-lg">SecureAid</span>
        </div>

        <div className="flex items-center gap-6 text-gray-700">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 hover:text-indigo-600 transition"
          >
            <Home size={18} /> Home
          </button>

          <button
            onClick={() => navigate("/ngo-dashboard")}
            className="flex items-center gap-1 hover:text-indigo-600 transition"
          >
            <Shield size={18} /> Dashboard
          </button>

          <button
            onClick={() => navigate("/reports")}
            className="flex items-center gap-1 hover:text-indigo-600 transition"
          >
            <FileText size={18} /> Reports
          </button>

          <button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
            className="flex items-center gap-1 text-red-600 hover:text-red-700 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </nav>

      {/* 🔹 Main Dashboard */}
      <div className="p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">
              NGO Security Dashboard Overview
            </h1>
            <p className="text-sm text-gray-600">
              Summary of posture, alerts, and cloud security metrics
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 rounded-lg bg-white shadow-sm flex items-center gap-2 hover:bg-gray-50 transition">
              <Bell size={18} /> Alerts{" "}
              <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium bg-red-50 text-red-600 rounded">
                {kpis.openAlerts}
              </span>
            </button>
            <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 transition">
              New Scan
            </button>
          </div>
        </header>

        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            {
              title: "Risk Score",
              value: kpis.riskScore,
              subtitle: "Overall risk (0-100)",
            },
            {
              title: "Open Threat Alerts",
              value: kpis.openAlerts,
              subtitle: "Critical alerts requiring attention",
            },
            {
              title: "Compliance",
              value: `${kpis.compliancePct}%`,
              subtitle: "Policy & controls compliance",
            },
            {
              title: "Cloud Misconfigs",
              value: kpis.misconfigCount,
              subtitle: "Findings from CSPM scans",
            },
          ].map((card, i) => (
            <Card key={i} className="p-4 hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="text-sm">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">{card.value}</div>
                <div className="text-xs text-gray-500">{card.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Threat Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Threat Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                {threatAlerts.map((t) => (
                  <motion.div
                    key={t.id}
                    className="flex items-center justify-between py-3 border-b last:border-none"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <div className="font-medium">{t.title}</div>
                      <div className="text-xs text-gray-500">
                        {t.time} • {t.id}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          t.severity === "High"
                            ? "bg-red-50 text-red-600"
                            : t.severity === "Medium"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-green-50 text-green-600"
                        }`}
                      >
                        {t.severity}
                      </span>
                      <button className="px-3 py-1 rounded bg-white shadow-sm hover:bg-gray-50 transition">
                        View
                      </button>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Risk Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Posture & Risk Over Time</CardTitle>
              </CardHeader>
              <CardContent style={{ height: 240 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={areaData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="risk"
                      stroke="#2563EB"
                      fillOpacity={1}
                      fill="url(#colorRisk)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Cloud Findings */}
            <Card>
              <CardHeader>
                <CardTitle>Cloud Configuration Findings</CardTitle>
              </CardHeader>
              <CardContent>
                {cloudConfigs.map((c) => (
                  <div
                    key={c.id}
                    className="py-3 flex items-start justify-between border-b last:border-none"
                  >
                    <div>
                      <div className="font-medium">{c.resource}</div>
                      <div className="text-xs text-gray-500">{c.issue}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">{c.severity}</div>
                      <button className="mt-2 px-3 py-1 rounded bg-white shadow-sm hover:bg-gray-50 transition">
                        Remediate
                      </button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right column */}
          <aside className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Findings by Severity</CardTitle>
              </CardHeader>
              <CardContent style={{ height: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={40}
                      outerRadius={60}
                    >
                      {pieData.map((entry, idx) => (
                        <Cell key={idx} fill={ALERT_COLORS[idx]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-3 text-sm text-gray-600">
                  Breakdown of active findings
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CSPM Reports</CardTitle>
              </CardHeader>
              <CardContent>
                {reports.map((r) => (
                  <div
                    key={r.id}
                    className="py-3 flex items-center justify-between border-b last:border-none"
                  >
                    <div>
                      <div className="font-medium">{r.title}</div>
                      <div className="text-xs text-gray-500">
                        {r.date} • {r.size}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 rounded bg-white shadow-sm hover:bg-gray-50 transition">
                        View
                      </button>
                      <button className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
