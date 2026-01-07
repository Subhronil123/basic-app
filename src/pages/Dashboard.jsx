import KPICard from "../components/KPICard";
import ChartCard from "../components/ChartCard";
import { kpis, chartData, performanceData } from "../data/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
 
export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>
 
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* User Growth */}
        <ChartCard title="User Growth">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#38bdf8"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
 
        {/* Performance Overview */}
        <ChartCard title="Performance Overview">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={performanceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
 
              <Bar
                dataKey="users"
                fill="#38bdf8"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="revenue"
                fill="#22c55e"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
 
      </div>
    </div>
  );
}