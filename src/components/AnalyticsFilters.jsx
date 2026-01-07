import { getPresetRange } from "../utils/dataRanges";
import { useActivity } from "../context/ActivityContext";
 
export default function AnalyticsFilters({
  metric,
  setMetric,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  compare,
  setCompare,
}) {

  const { logActivity } = useActivity();
  const applyPreset = (type) => {
    const range = getPresetRange(type);
    if (!range) return;
    setStartDate(range.startDate);
    setEndDate(range.endDate);
    logActivity(`Applied a date preset filter: ${type}`);
  };
 
  return (
    <div className="space-y-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow">
      
      {/* Presets */}
      <div className="flex flex-wrap gap-2">
        {[
          { label: "Today", key: "today" },
          { label: "Last 7 Days", key: "last7" },
          { label: "Last 30 Days", key: "last30" },
          { label: "This Month", key: "thisMonth" },
        ].map((p) => (
          <button
            key={p.key}
            onClick={() => applyPreset(p.key)}
            className="px-3 py-1.5 text-sm rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
          >
            {p.label}
          </button>
        ))}
      </div>
 
      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <select
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700"
        >
          <option value="users">Users</option>
          <option value="revenue">Revenue</option>
        </select>
 
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700"
        />
 
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700"
        />
 
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={compare}
            onChange={() => setCompare(!compare)}
          />
          Compare Previous
        </label>
      </div>
    </div>
  );
}
 