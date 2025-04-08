import { Skeleton } from "@/components/ui/skeleton";

const WidgetSkeleton = () => {
  return (
    <div className="h-29 min-w-[250px] flex justify-between items-start p-6 shadow-card rounded-3xl">
      <div className="grid gap-2">
        <Skeleton className="w-12 h-12 rounded-xl" />
        <Skeleton className="w-[110px] h-5 rounded-xl" />
      </div>
      <Skeleton className="w-15 h-6" />
    </div>
  );
};

export default WidgetSkeleton;
