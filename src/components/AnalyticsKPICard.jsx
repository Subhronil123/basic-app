export default function AnalyticsKPICard({ title, value, subtitle, status }) {
  const statusColor = {
    good: "text-green-500",
    warn: "text-yellow-500",
    bad: "text-red-500",
  };
 
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className={`text-2xl font-bold mt-2 ${statusColor[status]}`}>
        {value}
      </h3>
      {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
    </div>
  );
}
 