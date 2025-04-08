import DuotoneDownIcon from "@/public/duotone-down.svg";
import DuotoneUpIcon from "@/public/duotone-up.svg";
import { toTitleCase } from "@/utils/titlecase";
import Image from "next/image";

interface WidgetSumaryItemProps {
  productTotal: number;
  productName: string;
  percent: number;
  isIncrease: boolean;
  isEmpty?: boolean;
}

const WidgetSumaryItem = ({
  productTotal,
  productName,
  percent,
  isIncrease,
  isEmpty,
}: Readonly<WidgetSumaryItemProps>) => {
  return (
    <div className="w-full h-29 max-w-[343px] rounded-3xl p-6 shadow-card">
      <div className=" flex justify-between items-start">
        <div>
          <p className="text-light-blue font-bold text-8 leading-12 tracking-normal">
            {isEmpty ? 0 : productTotal}
          </p>
          <p className=" font-normal text-sm leading-5 tracking-normal text-black-500">
            {isEmpty ? "Chưa có mặt hàng" : toTitleCase(productName)}
          </p>
        </div>
        {!isEmpty && (
          <div className="flex items-center gap-1">
            <Image src={isIncrease ? DuotoneUpIcon : DuotoneDownIcon} alt="Doutone Icon" />
            <p className=" font-medium text-sm leading-5 tracking-normal">{percent}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WidgetSumaryItem;
