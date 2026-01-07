const styles = {
  success: "bg-green-500/10 text-green-600 border-green-500/30",
  warning: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
  error: "bg-red-500/10 text-red-600 border-red-500/30",
};
 
export default function AlertBanner({ type, message }) {
  return (
    <div
      className={`border rounded-xl px-4 py-3 text-sm ${styles[type]}`}
    >
      {message}
    </div>
  );
}
 