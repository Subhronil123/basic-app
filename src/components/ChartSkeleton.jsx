import Skeleton from "./Skeleton";
 
export default function ChartSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow space-y-4">
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-48 w-full" />
    </div>
  );
}