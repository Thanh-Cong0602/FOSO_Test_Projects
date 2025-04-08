"use client";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface BarChartProps {
  options?: ApexCharts.ApexOptions;
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  width?: number;
  height?: number;
}

const BarChart = ({ options, series, width, height }: Readonly<BarChartProps>) => {
  return <ReactApexChart options={options} series={series} type="bar" height={height} width={width} />;
};

export default BarChart;
