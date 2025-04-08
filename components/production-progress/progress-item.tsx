import { toTitleCase } from "@/utils/titlecase";
import { Progress } from "../ui/progress";

interface ProgressItemProps {
  title: string;
  totalProfit: number;
  value?: number;
  isEmpty: boolean;
}
const ProgressItem = ({ title, totalProfit, value, isEmpty }: Readonly<ProgressItemProps>) => {
  return (
    <div className=" grid gap-2">
      <div className="flex items-center justify-between text-sm tracking-normal text-text-primary">
        <p className="font-medium leading-5">{isEmpty ? "Chưa có mặt hàng" : toTitleCase(title)}</p>
        {isEmpty ? (
          "-"
        ) : (
          <p className="font-semibold leading-5.5">
            {totalProfit} cái <span className="text-text-secondary font-normal">({value}%)</span>
          </p>
        )}
      </div>

      <Progress value={isEmpty ? 0 : value} />
    </div>
  );
};

export default ProgressItem;
