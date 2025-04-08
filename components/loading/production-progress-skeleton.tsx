import { Skeleton } from "@/components/ui/skeleton";

const ProductionProgressSkeleton = () => {
  return (
    <div className="grid gap-3">
      <Skeleton className="h-3 w-full rounded-xl" />
      <Skeleton className="h-2 w-full rounded-xl" />
    </div>
  );
};

export default ProductionProgressSkeleton;
