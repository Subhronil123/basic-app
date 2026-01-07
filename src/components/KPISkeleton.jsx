import Skeleton from "./Skeleton";
 
export default function KPISkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-3 w-16" />
    </div>
  );
}