import { useMemo, useState } from "react";
import { analyticsData } from "../data/analyticsData";
import AnalyticsFilters from "../components/AnalyticsFilters";
import ChartCard from "../components/ChartCard";
import AnalyticsKPICard from "../components/AnalyticsKPICard";
import DataTable from "../components/DataTable";
import { tableData } from "../data/tableData";
import AlertBanner from "../components/AlertBanner";
import { generateAlerts } from "../utils/alertRules"; 
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
 
  /* ---------------- FILTER DATA ---------------- */
  const filteredData = useMemo(() => {
    return analyticsData.filter(
      (d) => d.date >= startDate && d.date <= endDate
    );
  }, [startDate, endDate]);
 
  /* ---------------- MERGE DATA FOR COMPARISON ---------------- */
  const chartData = useMemo(() => {
    if (!compare) return filteredData;
 
    return filteredData.map((d) => ({
      ...d,
      previous: Math.floor(d[metric] * 0.8),
    }));
  }, [filteredData, compare, metric]);
 
  /* ---------------- KPI SUMMARY ---------------- */
  const summary = useMemo(() => {
    if (!filteredData.length) return null;
 
    const totalUsers = filteredData.reduce((s, d) => s + d.users, 0);
    const totalRevenue = filteredData.reduce((s, d) => s + d.revenue, 0);
    const avgUsers = Math.round(totalUsers / filteredData.length);
 
    const growth =
      filteredData.length > 1
        ? (
            ((filteredData.at(-1)[metric] -
              filteredData[0][metric]) /
              filteredData[0][metric]) *
            100
          ).toFixed(1)
        : 0;
      
    return { totalUsers, totalRevenue, avgUsers, growth };
  }, [filteredData, metric]);

  const kpiStatus = summary?.growth >= 5 ? "good" : summary?.growth >= 0 ? "warn" : "bad";

  const alerts = useMemo(() => {
    return generateAlerts(summary)
  }, [summary]);
 
  /* ---------------- JSX ---------------- */
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Advanced Analytics</h2>

      {/* ALERTS */}
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <AlertBanner
            key={index}
            type={alert.type}
            message={alert.message}
          />
        ))}
      </div>

      {/* Filters */}
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
 
      {/* KPI SUMMARY */}
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
          { title: "Total Users", value: summary.totalUsers.toLocaleString() },
          { title: "Total Revenue", value: `$${summary.totalRevenue.toLocaleString()}` },
          { title: "Avg Daily Users", value: summary.avgUsers.toLocaleString() },
          { title: "Growth", value: `${summary.growth}%` },
            ].map((kpi) => (
          <AnalyticsKPICard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            subtitle={`Based on ${metric}`}
            status={kpiStatus}
          />
            ))}
          </div>
        )}

        {/* CHART */}
      <ChartCard title={`Metric Trend (${metric})`}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
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
                dataKey="previous"
                stroke="#94a3b8"
                strokeDasharray="5 5"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
      <DataTable data={tableData} />
    </div>
  );
}