import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CaretDownIcon from "@/public/caret-down.svg";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface TimeSelectProps {
  placeholder: string;
  setSelected: Dispatch<SetStateAction<string | null>>;
  options: Array<string>;
}

const TimeSelect = ({ placeholder, setSelected, options }: Readonly<TimeSelectProps>) => {
  const handleValueChange = (value: string) => setSelected(value);

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-fit h-10 border border-gray-100 rounded-lg px-3 py-2 flex items-center gap-2">
        <Calendar size="16px" className="text-gray-300" />
        <SelectValue placeholder={placeholder} />
        <div className="flex h-3 w-3 items-center justify-center">
          <Image src={CaretDownIcon} alt="CaretDownIcon" />
        </div>
      </SelectTrigger>

      <SelectContent>
        {options?.map((item, index) => (
          <SelectItem key={index} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TimeSelect;
