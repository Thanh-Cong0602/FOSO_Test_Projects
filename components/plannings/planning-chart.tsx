"use client";

import { useProductionPlan } from "@/hooks/production-plans/useProductionPlan";
import ColumnChart from "../charts/column-chart";
import ChartSkeleton from "../loading/chart-skeleton";
import PlanningChartLegend from "./planning-chart-legend";

interface PlanningChartProps {
  isEmpty: boolean;
}

const PlanningChart = ({ isEmpty }: Readonly<PlanningChartProps>) => {
  const { data, isLoading } = useProductionPlan();

  if (isLoading) return <ChartSkeleton />;

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: 20,
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ["Áo ba lỗ", "Áo sơ mi", "Áo thun polo", "Quần baggy", "Quần jogger"],
      labels: {
        style: {
          colors: "#9295A4",
          cssClass: "apexcharts-label",
        },
        formatter: function (value) {
          const isDataEmpty = data?.every((s) => s.data.length === 0);
          if (isDataEmpty || isEmpty) return "-";

          return value.toString();
        },
      },
    },
    yaxis: [
      {
        stepSize: 20,
        min: 0,
        max: 100,
        tickAmount: 5,
        labels: {
          showDuplicates: true,
          align: "left",
          style: {
            colors: "#9295A4",
            cssClass: "apexcharts-label",
          },
        },
        title: {
          text: isEmpty ? "Đơn vị" : "Cái",
          rotate: 0,
          style: {
            color: "#667085",
            cssClass: "apexcharts-title",
          },
          offsetY: -150,
          offsetX: 25,
        },
      },
    ],

    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const val = series[seriesIndex][dataPointIndex];
        return '<div className="arrow_box">' + "<span>" + val + "cái" + "</span>" + "</div>";
      },
    },

    legend: {
      show: false,
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: "#9295A4",
      },
    },
    colors: ["#0375F3", "#1FC583"],
    grid: {
      strokeDashArray: 4,
    },
  };

  const series = !isEmpty
    ? data
    : [
        {
          name: "Kế hoạch",
          data: [],
        },

        {
          name: "Thực hiện",
          data: [],
        },
      ];

  return (
    <div id="planning-chart" className="relative w-full min-h-100">
      <div className="absolute top-0 right-0">
        <PlanningChartLegend />
      </div>
      <ColumnChart options={options} series={series} height={350} />
      <div className="absolute bottom-[42px] left-0 translate-y-full apexcharts-title">Mặt hàng</div>
    </div>
  );
};

export default PlanningChart;
