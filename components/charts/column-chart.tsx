"use client";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ColumnChartProps {
  options?: ApexCharts.ApexOptions;
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  width?: number;
  height?: number;
}

const ColumnChart = ({ options, series, width, height }: Readonly<ColumnChartProps>) => {
  return <ReactApexChart options={options} series={series} type="bar" height={height} width={width} />;
};

export default ColumnChart;
