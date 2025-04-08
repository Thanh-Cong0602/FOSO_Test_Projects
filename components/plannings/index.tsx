"use client";

import { generateQuartersFromTo } from "@/utils/time.utils";
import { useState } from "react";
import CardHeader from "../card-header";
import TimeSelect from "../fields/time-select";
import PlanningChart from "./planning-chart";

const ProductionPlans = () => {
  const [selectedQuarter, setSelectedQuarter] = useState<string | null>(null);

  return (
    <div className="w-1/2 shadow-card rounded-3xl bg-background">
      <CardHeader
        title="kế hoạch sản xuất"
        TimeDropdown={
          <TimeSelect
            setSelected={setSelectedQuarter}
            placeholder="Quý này"
            options={generateQuartersFromTo("Q1/2024")}
          />
        }
        className="card-header"
      />

      <PlanningChart isEmpty={selectedQuarter ? true : false} />
    </div>
  );
};

export default ProductionPlans;
