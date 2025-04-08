"use client";

import { useWidgetSumary } from "@/hooks/widget-sumary/useWidgetSumary";
import WidgetSkeleton from "../loading/widget-skeleton";
import WidgetSumaryItem from "./widget-sumary-item";

interface WidgetSumaryProps {
  selectedMonth: string | null;
}

const WidgetSumary = ({ selectedMonth }: Readonly<WidgetSumaryProps>) => {
  const { data, isLoading } = useWidgetSumary();

  return (
    <div className="flex items-center justify-between gap-6 min-h-[116px]">
      {isLoading && (
        <>
          {[...Array(5)].map((_, index) => (
            <WidgetSkeleton key={index} />
          ))}
        </>
      )}

      {data?.map((item) => (
        <WidgetSumaryItem
          key={item.id}
          productTotal={item.total}
          productName={item.name}
          percent={item.percent}
          isIncrease={item.isIncrease}
          isEmpty={selectedMonth ? true : false}
        />
      ))}
    </div>
  );
};

export default WidgetSumary;
