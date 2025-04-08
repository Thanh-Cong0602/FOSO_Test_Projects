import { Skeleton } from "@/components/ui/skeleton";

const ChartSkeleton = () => {
  return (
    <div className="grid gap-7 items-center px-6">
      {[...Array(5)].map((_, index) => (
        <Skeleton key={index} className="w-full h-12 rounded-2xl" />
      ))}
    </div>
  );
};

export default ChartSkeleton;
