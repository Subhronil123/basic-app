const styles = {
  info: "border-blue-500/30 text-blue-600",
  success: "border-green-500/30 text-green-600",
  warning: "border-yellow-500/30 text-yellow-600",
  error: "border-red-500/30 text-red-600",
};
 
export default function ActivityFeed({ activities }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow space-y-4">
      <h3 className="text-lg font-semibold">Recent Activity</h3>
 
      <ul className="space-y-3 text-sm max-h-64 overflow-y-auto">
        {activities.map((a) => (
          <li
            key={a.id}
            className={`border-l-4 pl-3 py-1 ${styles[a.type]}`}
          >
            <div>{a.message}</div>
            <div className="text-xs text-slate-400">
              {a.time.toLocaleTimeString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 