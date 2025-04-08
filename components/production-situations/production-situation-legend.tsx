"use client";

import { ProductionSituationItem } from "@/types/production-situation.type";
import { ProductStatus, ProductStatusUnion } from "@/utils/enum.utils";
import { Skeleton } from "../ui/skeleton";

interface ProductionSituationLegendProps {
  data?: ProductionSituationItem[];
  isLoading: boolean;
  isEmpty: boolean;
}

const ProductionSituationLegend = ({
  data,
  isLoading,
  isEmpty,
}: Readonly<ProductionSituationLegendProps>) => {
  const getColorByStatus = (status: ProductStatusUnion): string => {
    const statusColorMap: Record<ProductStatusUnion, string> = {
      [ProductStatus.COMPLETED]: "#1FC583",
      [ProductStatus.PRODUCTING]: "#0375F3",
      [ProductStatus.UNCOMPLETED]: "#FF8F0D",
    };

    return statusColorMap[status] ?? "#1FC583";
  };

  return (
    <div className="flex items-center gap-2">
      {isLoading &&
        [...Array(3)].map((_, index) => (
          <div key={index} className="border border-white-50 p-2 grid gap-1 rounded-lg min-w-[130px]">
            <Skeleton className="h-8 w-10 rounded-xl" />
            <Skeleton className="h-5 w-full rounded-xl" />
          </div>
        ))}

      {data?.map((item, index) => (
        <div key={index} className="border border-white-50 p-2 grid gap-1 rounded-lg min-w-[130px]">
          <p
            className="leading-8 text-2xl font-semibold tracking-normal"
            style={{ color: getColorByStatus(item.status) }}
          >
            {isEmpty ? 0 : item.value}
          </p>
          <p className="text-sm leading-5 font-normal tracking-normal">{item.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductionSituationLegend;
