"use client";

import { useProductProgress } from "@/hooks/product-progress/useProductProgress";
import { ProductStatus } from "@/utils/enum.utils";
import { useState } from "react";
import CardHeader from "../card-header";
import TimeSelect from "../fields/time-select";
import ProductionProgressSkeleton from "../loading/production-progress-skeleton";
import ProgressItem from "./progress-item";

const ProductionProgress = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const { data, isLoading } = useProductProgress();

  return (
    <div className="w-1/3 shadow-card rounded-3xl bg-background">
      <CardHeader
        title="Tiến độ sản xuất theo nhóm"
        TimeDropdown={
          <TimeSelect
            setSelected={setSelectedStatus}
            placeholder="Hoàn thành"
            options={Object.values(ProductStatus)}
          />
        }
        className="card-header"
      />

      <div className="pt-2 pb-8 px-6 grid gap-8">
        {isLoading && [...Array(7)].map((_, index) => <ProductionProgressSkeleton key={index} />)}

        {data?.map((item) => (
          <ProgressItem
            key={item.id}
            title={item.title}
            totalProfit={item.totalProfit}
            value={item.percent}
            isEmpty={selectedStatus ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductionProgress;
