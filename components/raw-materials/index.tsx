"use client";

import { generateWeeksFromTo } from "@/utils/time.utils";
import { useState } from "react";
import CardHeader from "../card-header";
import TimeSelect from "../fields/time-select";
import { RawMaterialTable } from "./material-table";

const RawMaterials = () => {
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);

  return (
    <div className="w-1/3 shadow-card rounded-3xl bg-background">
      <CardHeader
        title="Nguyên vật liệu cần mua"
        TimeDropdown={
          <TimeSelect
            setSelected={setSelectedWeek}
            placeholder="Tuần này"
            options={generateWeeksFromTo("02/2025")}
          />
        }
        className="card-header"
      />

      <div className="px-4">
        <RawMaterialTable isEmpty={selectedWeek ? true : false} />
      </div>
    </div>
  );
};

export default RawMaterials;
