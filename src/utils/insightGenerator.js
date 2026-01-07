export function generateInsights(data) {
  if (!data || data.length < 2) return [];
 
  const insights = [];
 
  const first = data[0];
  const last = data[data.length - 1];
 
  const userGrowth =
    ((last.users - first.users) / first.users) * 100;
 
  const revenueGrowth =
    ((last.revenue - first.revenue) / first.revenue) * 100;
 
  if (userGrowth > 5) {
    insights.push({
      type: "positive",
      message: `User growth increased by ${userGrowth.toFixed(
        1
      )}% over the selected period.`,
    });
  } else if (userGrowth < 0) {
    insights.push({
      type: "negative",
      message: `User count declined by ${Math.abs(
        userGrowth
      ).toFixed(1)}% during this period.`,
    });
  } else {
    insights.push({
      type: "neutral",
      message: "User growth remained stable during this period.",
    });
  }
 
  if (revenueGrowth > 5) {
    insights.push({
      type: "positive",
      message: `Revenue shows a strong upward trend (+${revenueGrowth.toFixed(
        1
      )}%).`,
    });
  } else if (revenueGrowth < 0) {
    insights.push({
      type: "negative",
      message: "Revenue experienced a decline during the selected period.",
    });
  }
 
  return insights;
}
 