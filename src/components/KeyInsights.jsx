const styles = {
  positive: "bg-green-500/10 text-green-600",
  negative: "bg-red-500/10 text-red-600",
  neutral: "bg-slate-500/10 text-slate-600",
};
 
export default function KeyInsights({ insights }) {
  if (!insights.length) return null;
 
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow space-y-4">
      <h3 className="text-lg font-semibold">Key Insights</h3>
 
      <ul className="space-y-3 text-sm">
        {insights.map((insight, idx) => (
          <li
            key={idx}
            className={`p-3 rounded-lg ${styles[insight.type]}`}
          >
            {insight.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
 