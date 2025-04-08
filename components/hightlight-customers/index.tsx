"use client";

import { generateYearsFromTo } from "@/utils/time.utils";
import { useState } from "react";
import CardHeader from "../card-header";
import TimeSelect from "../fields/time-select";
import HighlightCustomerChart from "./highlight-customer-chart";

const HightlightCustomers = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  return (
    <div className="w-1/2 shadow-card rounded-3xl bg-background">
      <CardHeader
        title="Top 5 khách hàng có sản lượng nhiều nhất"
        TimeDropdown={
          <TimeSelect
            setSelected={setSelectedYear}
            placeholder="Năm nay"
            options={generateYearsFromTo(2020)}
          />
        }
        className="card-header"
      />

      <HighlightCustomerChart isEmpty={selectedYear ? true : false} />
    </div>
  );
};

export default HightlightCustomers;
