import { Skeleton } from "@/components/ui/skeleton";

const DonutChartSkeleton = () => {
  return (
    <div className="flex items-center justify-center h-[400px]">
      <Skeleton className="w-[300px] h-[300px] rounded-full" />
    </div>
  );
};

export default DonutChartSkeleton;
