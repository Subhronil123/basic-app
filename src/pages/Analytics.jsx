import { useMemo, useState } from "react";
import { analyticsData } from "../data/analyticsData";
import AnalyticsFilters from "../components/AnalyticsFilters";
import ChartCard from "../components/ChartCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
 
export default function Analytics() {
  const [metric, setMetric] = useState("users");
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-01-07");
  const [compare, setCompare] = useState(false);
 
  const filteredData = useMemo(() => {
    return analyticsData.filter(
      (d) => d.date >= startDate && d.date <= endDate
    );
  }, [startDate, endDate]);
 
  const previousData = useMemo(() => {
    if (!compare) return [];
    return filteredData.map((d) => ({
      ...d,
      [metric]: Math.floor(d[metric] * 0.8),
    }));
  }, [compare, filteredData, metric]);
 
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Advanced Analytics</h2>
 
      <AnalyticsFilters
        metric={metric}
        setMetric={setMetric}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        compare={compare}
        setCompare={setCompare}
      />
 
      <ChartCard title={`Metric Trend (${metric})`}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
 
            <Line
              type="monotone"
              dataKey={metric}
              stroke="#38bdf8"
              strokeWidth={3}
            />
 
            {compare && (
              <Line
                type="monotone"
                dataKey={metric}
                data={previousData}
                stroke="#94a3b8"
                strokeDasharray="5 5"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
 