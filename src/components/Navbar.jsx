import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
 
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
 
  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex items-center justify-between px-6 transition-colors">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
        Dashboard
      </h2>
 
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:scale-105 transition"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}