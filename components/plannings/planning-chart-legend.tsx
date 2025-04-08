import PlanningChartLegendItem from "./planning-chart-legend-item";

const PlanningChartLegend = () => {
  return (
    <div className="flex gap-4 mr-4">
      <PlanningChartLegendItem text="Kế hoạch" className=" bg-light-blue" />

      <PlanningChartLegendItem text="Thực hiện" className=" bg-light-green" />
    </div>
  );
};

export default PlanningChartLegend;
