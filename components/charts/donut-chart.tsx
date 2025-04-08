"use client";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface DonutChartProps {
  options?: ApexCharts.ApexOptions;
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  width?: string;
  height?: string;
}

const DonutChart = ({ options, series, width, height }: DonutChartProps) => {
  return <ReactApexChart options={options} series={series} type="donut" width={width} height={height} />;
};

export default DonutChart;
