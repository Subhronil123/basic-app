import { NavLink } from "react-router-dom";
import { LayoutDashboard, BarChart2, Settings } from "lucide-react";
 
export default function Sidebar() {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition";
 
  return (
    <aside className="w-64 bg-slate-950 p-4">
      <h1 className="text-xl font-bold mb-8">⚡ Dashboard</h1>
 
      <nav className="space-y-2">
        <NavLink to="/" end className={linkClass}>
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>
 
        <NavLink to="/analytics" className={linkClass}>
          <BarChart2 size={20} /> Analytics
        </NavLink>
 
        <NavLink to="/settings" className={linkClass}>
          <Settings size={20} /> Settings
        </NavLink>
      </nav>
    </aside>
  );
}