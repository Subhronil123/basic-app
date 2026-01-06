export default function KPICard({ title, value, icon, color }) {
    return (
        <div className={`bg-white rounded-xl shadow p-5 flex item-center gap-4 ${color}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm">{title}</p>
                    <p className="text-xl font-bold">{value}</p>
                </div>
                <div className="text-2xl">{icon}</div>
            </div>
        </div>
    );
}