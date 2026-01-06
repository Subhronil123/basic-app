import KPICard from "../components/KPICard";
import { kpis, accuracyData, apiUsageData } from "../data/mockData.js";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

import ChartCard from "../components/ChartCard";

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartCard title="Model Accuracy">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={accuracyData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[85, 100]} />
                            <Tooltip />
                            <Line type="monotone" dataKey="accuracy" stroke="#8884d8" strokeWidth={8} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartCard>
                <ChartCard title="API Usage">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={apiUsageData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="usage" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>
        </section>
    );
}