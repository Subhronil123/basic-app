import KPICard from "../components/KPICard";
import { kpis } from "../data/mockData.js";

export default function DashboardHome() {
    return (
        <section className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">
                    Overview
                </h2>
                <p className="text-gray-500">
                    System performance and AI metrices
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* <KPICard title="Model Accuracy" value="97.345%" icon="👥" color="border-l-blue-500" />
                <KPICard title="API Requests" value="$452" icon="💰" color="border-l-green-500" />
                <KPICard title="Operational Cost" value="10000" icon="📦" color="border-l-purple-500" />
                <KPICard title="Active Models" value="10" icon="📈" color="border-l-yellow-500" /> */}
                {kpis.map((kpi) => (
                    <KPICard
                        key={kpi.id}
                        title={kpi.title}
                        value={kpi.value}
                        icon={kpi.icon}
                        color={kpi.color}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1xl grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow p-6 h-64">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Model Accuracy
                    </h3>
                    <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
                        line chart
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow p-6 h-64">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        API Usage
                    </h3>
                    <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
                        bar chart
                    </div>
                </div>
            </div>
        </section>
    );
}