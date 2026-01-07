export function formatDate(date) {
  return date.toISOString().split("T")[0];
}
 
export function getPresetRange(type) {
  const today = new Date();
  const start = new Date();
 
  switch (type) {
    case "today":
      return {
        startDate: formatDate(today),
        endDate: formatDate(today),
      };
 
    case "last7":
      start.setDate(today.getDate() - 6);
      return {
        startDate: formatDate(start),
        endDate: formatDate(today),
      };
 
    case "last30":
      start.setDate(today.getDate() - 29);
      return {
        startDate: formatDate(start),
        endDate: formatDate(today),
      };
 
    case "thisMonth":
      start.setDate(1);
      return {
        startDate: formatDate(start),
        endDate: formatDate(today),
      };
 
    default:
      return null;
  }
}
 