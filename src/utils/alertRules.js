export function generateAlerts(summary) {
  if (!summary) return [];
 
  const alerts = [];
 
  if (summary.growth < 0) {
    alerts.push({
      type: "error",
      message: "Revenue or users are declining compared to the selected period.",
    });
  }
 
  if (summary.avgUsers < 700) {
    alerts.push({
      type: "warning",
      message: "Average daily users are below expected levels.",
    });
  }
 
  if (summary.totalRevenue > 10000) {
    alerts.push({
      type: "success",
      message: "Revenue is performing strongly for the selected period.",
    });
  }
 
  return alerts;
}