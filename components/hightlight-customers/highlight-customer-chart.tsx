"use client";

import { useHighlightCustomer } from "@/hooks/highlight-customer/useHighlightCustomer";
import BarChart from "../charts/bar-chart";
import ChartSkeleton from "../loading/chart-skeleton";

interface HighlightCustomerChartProps {
  isEmpty: boolean;
}

const HighlightCustomerChart = ({ isEmpty }: Readonly<HighlightCustomerChartProps>) => {
  const { data, isLoading } = useHighlightCustomer();

  if (isLoading) return <ChartSkeleton />;

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },

    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return `${val} cái`;
        },
        title: {
          formatter: () => "Sản lượng",
        },
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: "8px",
        borderRadiusApplication: "end",
      },
    },

    xaxis: {
      stepSize: 800,
      min: 0,
      max: 3200,
      tickAmount: 4,
      categories: [
        "Công ty Dệt may Happy Polla",
        "Công ty May mặc Saigon trendy",
        "Outlet Lemon squeeze",
        "Shop quần áo streetwear New...",
        "Shop thời trang công sở Basic Office",
      ],

      labels: {
        style: {
          colors: "#9295A4",
          cssClass: "apexcharts-label",
        },
        trim: false,
        showDuplicates: true,
      },

      sorted: false,
    },
    yaxis: {
      labels: {
        align: "left",
        minWidth: 300,
        showDuplicates: true,
        style: {
          colors: "#9295A4",
          cssClass: "apexcharts-label yaxis-title",
        },
        formatter: function (value) {
          const isDataEmpty = data?.every((s) => s.data.length === 0 || !s.data.some((val) => val > 0));
          if (isDataEmpty || isEmpty) return "-";

          return value.toString();
        },
      },

      showAlways: true,
    },

    colors: ["#0375F3"],
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      strokeDashArray: 4,
    },
  };
  const series = !isEmpty ? data : [{ data: [] }];

  return (
    <div id="hightlight-chart" className="relative w-full min-h-100">
      <div className="absolute left-[90px] top-5 apexcharts-title">Khách hàng</div>
      <BarChart options={options} series={series} height={400} />
      <div className="absolute left-[100px] bottom-7 apexcharts-title">Sản lượng</div>
    </div>
  );
};

export default HighlightCustomerChart;
