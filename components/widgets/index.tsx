"use client";

import { generateMonthsFromTo } from "@/utils/time.utils";
import { useState } from "react";
import CardHeader from "../card-header";
import TimeSelect from "../fields/time-select";
import WidgetSumary from "./widget-sumary";

const Widgets = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  return (
    <div className="wrapper-content">
      <div className="grid gap-4">
        <CardHeader
          title="Top sản phẩm sản xuất nhiều nhất"
          TimeDropdown={
            <TimeSelect
              setSelected={setSelectedMonth}
              placeholder="Tháng này"
              options={generateMonthsFromTo("01/2025")}
            />
          }
          className="py-0"
        />

        <WidgetSumary selectedMonth={selectedMonth} />
      </div>
    </div>
  );
};

export default Widgets;
