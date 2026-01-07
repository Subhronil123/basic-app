export default function GoalCard({ goal, onExpand }) {
  const percent = Math.min(
    Math.round((goal.current / goal.target) * 100),
    100
  );
 
  const status =
    percent >= 80 ? "On Track" : percent >= 50 ? "At Risk" : "Off Track";
 
  const statusColor =
    percent >= 80
      ? "text-green-600"
      : percent >= 50
      ? "text-yellow-600"
      : "text-red-600";
 
  return (
    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{goal.title}</h4>
        <span className={`text-sm font-medium ${statusColor}`}>
          {status}
        </span>
      </div>
 
      <div className="text-sm text-slate-500">
        {goal.unit}
        {goal.current.toLocaleString()} / {goal.unit}
        {goal.target.toLocaleString()}
      </div>
 
      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded">
        <div
          className="h-2 rounded bg-blue-500"
          style={{ width: `${percent}%` }}
        />
      </div>
 
      <div className="flex justify-between text-xs text-slate-400">
        <span>{percent}% achieved</span>
        <button
          onClick={() => onExpand(goal)}
          className="text-blue-500 hover:underline"
        >
          Show more
        </button>
      </div>
    </div>
  );
}