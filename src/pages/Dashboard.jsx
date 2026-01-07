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

import { useEffect, useMemo, useState } from "react";
import KPISkeleton from "../components/KPISkeleton";
import ChartSkeleton from "../components/ChartSkeleton";
import KeyInsights from "../components/KeyInsights";
import { generateInsights } from "../utils/insightGenerator";
import { goals } from "../data/goalData";
import GoalCard from "../components/GoalCard";
import GoalDetails from "../components/GoalDetails";
 
export default function Dashboard() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const insights = useMemo(() => {
    return generateInsights(chartData);
  }, []);

  const [activeGoal, setActiveGoal] = useState(null);
  
  return (
    <div className="space-y-6">
      
      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <KPISkeleton key={i} />
            ))
          : kpis.map((kpi) => <KPICard key={kpi.title} {...kpi} />)}
      </div>
      
      {/* Key Insights */}
      <KeyInsights insights={insights} />

      {/* Goals Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Goals & Targets</h3>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onExpand={setActiveGoal}
            />
          ))}
        </div>
      
        {activeGoal && (
          <GoalDetails
            goal={activeGoal}
            onClose={() => setActiveGoal(null)}
          />
        )}
      </div>
 

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {loading ? (
          <>
            <ChartSkeleton />
            <ChartSkeleton />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}