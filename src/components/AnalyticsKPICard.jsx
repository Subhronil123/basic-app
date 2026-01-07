export default function AnalyticsKPICard({ title, value, subtitle }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow transition">
      <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      {subtitle && (
        <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
      )}
    </div>
  );
}