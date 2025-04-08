import { cn } from "@/lib/utils";
import React from "react";

interface CardHeaderProps {
  title: string;
  TimeDropdown: React.ReactNode;
  className?: string;
}
const CardHeader = ({ title, TimeDropdown, className }: Readonly<CardHeaderProps>) => {
  return (
    <div className={cn("w-full flex items-center py-6", className)}>
      <p className="flex-1 font-medium leading-7 text-lg tracking-normal text-black-500 capitalize">
        {title}
      </p>
      {TimeDropdown}
    </div>
  );
};

export default CardHeader;
