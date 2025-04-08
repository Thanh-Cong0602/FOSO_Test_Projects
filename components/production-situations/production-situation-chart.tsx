"use client";

import { ProductionSituationRes } from "@/types/production-situation.type";
import { ProductStatus } from "@/utils/enum.utils";
import DonutChart from "../charts/donut-chart";
import DonutChartSkeleton from "../loading/donut-chart-skeleton";

interface ProductionSituationChartProps {
  data?: ProductionSituationRes[];
  isLoading: boolean;
  isEmpty: boolean;
}

const ProductionSituationChart = ({ data, isLoading, isEmpty }: Readonly<ProductionSituationChartProps>) => {
  if (isLoading) return <DonutChartSkeleton />;

  const chartColors = isEmpty ? ["#D0D5DD", "#DADFE4", "#C6CBD1"] : ["#1FC583", "#0375F3", "#FF9F43"];

  const options: ApexCharts.ApexOptions = {
    chart: { type: "donut" },
    labels: Object.values(ProductStatus),
    colors: chartColors,
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return isEmpty ? "" : `${Math.round(val)}%`;
      },
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        colors: ["#fff"],
      },
      background: {
        dropShadow: {
          enabled: true,
          top: 0,
          left: 7.15,
          blur: 0,
          opacity: 25,
          color: "#fff",
        },
      },
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = isEmpty
    ? [30, 40, 30]
    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data?.[0].data.map((item: any) => Math.ceil((item.value / data[0].total) * 100)) ?? [];

  return (
    <div id="production-situation-chart">
      <div className="relative w-full h-[300px]">
        <DonutChart options={options} series={series} width="100%" height="300px" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid items-center text-center">
          <div className="text-4xl font-semibold leading-10 text-black-500 tracking-normal">
            {isEmpty ? 0 : data?.[0].total}
          </div>
          <div className="text-base leading-6 font-normal text-gray-400 tracking-normal">Lệnh sản xuất</div>
        </div>
      </div>
    </div>
  );
};

export default ProductionSituationChart;
