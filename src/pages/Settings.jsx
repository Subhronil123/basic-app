import { useTheme } from "../context/ThemeContext";
 
export default function Settings() {
  const { theme, toggleTheme, compact, setCompact } = useTheme();
 
  return (
    <div className="space-y-8 max-w-3xl">
      <h2 className="text-2xl font-bold">Settings</h2>
 
      {/* Appearance */}
      <section className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow space-y-4">
        <h3 className="text-lg font-semibold">Appearance</h3>
 
        <div className="flex items-center justify-between">
          <span>Theme</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700"
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>
      </section>
 
      {/* Preferences */}
      <section className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow space-y-4">
        <h3 className="text-lg font-semibold">Preferences</h3>
 
        <label className="flex items-center justify-between cursor-pointer">
          <span>Compact Mode</span>
          <input
            type="checkbox"
            checked={compact}
            onChange={() => setCompact(!compact)}
            className="scale-125"
          />
        </label>
      </section>
 
      {/* Profile */}
      <section className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow space-y-4">
        <h3 className="text-lg font-semibold">Profile</h3>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            disabled
            value="Subhronil Mukhopadhyay"
            className="p-2 rounded bg-slate-100 dark:bg-slate-700"
          />
          <input
            disabled
            value="Frontend Engineer"
            className="p-2 rounded bg-slate-100 dark:bg-slate-700"
          />
          <input
            disabled
            value="subhronil@example.com"
            className="p-2 rounded bg-slate-100 dark:bg-slate-700 md:col-span-2"
          />
        </div>
      </section>
 
      {/* Danger Zone */}
      <section className="border border-red-500/30 p-6 rounded-2xl space-y-4">
        <h3 className="text-lg font-semibold text-red-500">Danger Zone</h3>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          className="px-4 py-2 rounded-lg bg-red-500 text-white"
        >
          Reset All Settings
        </button>
      </section>
    </div>
  );
}