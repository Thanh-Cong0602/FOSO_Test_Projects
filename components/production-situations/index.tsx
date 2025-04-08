"use client";

import { useProductionSituation } from "@/hooks/production-situation/useProductionSituation";
import { generateDatesFromTo } from "@/utils/time.utils";
import { useState } from "react";
import CardHeader from "../card-header";
import TimeSelect from "../fields/time-select";
import ProductionSituationChart from "./production-situation-chart";
import ProductionSituationLegend from "./production-situation-legend";

const ProductionSituations = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const { data, isLoading } = useProductionSituation();

  return (
    <div className="w-1/3 shadow-card rounded-3xl bg-background pb-6 px-6">
      <div className="grid items-center justify-between gap-10">
        <CardHeader
          title="Tình hình sản xuất"
          TimeDropdown={
            <TimeSelect
              setSelected={setSelectedDate}
              placeholder="Hôm nay"
              options={generateDatesFromTo("01/04/2025")}
            />
          }
        />

        <ProductionSituationChart data={data} isLoading={isLoading} isEmpty={selectedDate ? true : false} />

        <ProductionSituationLegend
          data={data?.[0].data}
          isLoading={isLoading}
          isEmpty={selectedDate ? true : false}
        />
      </div>
    </div>
  );
};

export default ProductionSituations;
