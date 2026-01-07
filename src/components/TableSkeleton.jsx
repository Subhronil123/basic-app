import Skeleton from "./Skeleton";
 
export default function TableSkeleton({ rows = 5 }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow space-y-3">
      <Skeleton className="h-4 w-32" />
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-6 w-full" />
      ))}
    </div>
  );
}