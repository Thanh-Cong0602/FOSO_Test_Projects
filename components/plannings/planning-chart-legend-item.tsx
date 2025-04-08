import { cn } from "@/lib/utils";

interface PlanningChartLegendItemProps {
  text: string;
  className: string;
}

const PlanningChartLegendItem = ({ text, className }: Readonly<PlanningChartLegendItemProps>) => {
  return (
    <div className="flex gap-2.5 items-center">
      <div className={cn("w-[27px] h-[13px] rounded-5", className)} />
      <p className="text-sm leading-5 tracking-normal font-medium">{text}</p>
    </div>
  );
};

export default PlanningChartLegendItem;
