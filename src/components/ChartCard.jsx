export default function ChartCard({ title, children }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 shadow">
      <h3 className="font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}