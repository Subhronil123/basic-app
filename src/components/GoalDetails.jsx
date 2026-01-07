import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
 
export default function GoalDetails({ goal, onClose }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{goal.title}</h3>
        <button
          onClick={onClose}
          className="text-sm text-slate-500 hover:underline"
        >
          Close
        </button>
      </div>
 
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={goal.history}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
 
            <ReferenceLine
              y={goal.target}
              stroke="#ef4444"
              strokeDasharray="4 4"
              label="Target"
            />
 
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
 
      <div className="text-sm text-slate-500">
        Current: {goal.unit}
        {goal.current.toLocaleString()} / Target: {goal.unit}
        {goal.target.toLocaleString()}
      </div>
    </div>
  );
}