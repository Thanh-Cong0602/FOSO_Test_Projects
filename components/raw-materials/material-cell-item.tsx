import MaterialLogo from "@/public/images/materialLogo.png";
import Image from "next/image";

interface MaterialCellItemProps {
  name: string;
  id: string;
}

const MaterialCellItem = ({ name, id }: Readonly<MaterialCellItemProps>) => {
  return (
    <div className="flex gap-2 items-start">
      <Image src={MaterialLogo} alt="MaterialLogo" className="h-8 w-8" />

      <div className="grid gap-1 tracking-normal">
        <p className="table-cell-item leading-full">{name}</p>
        <div className="text-2.5 font-normal">
          <p className=" text-gray-400 leading-full pb-1">(none)</p>
          <p className="text-[#3276FA] leading-full">{id}</p>
        </div>
      </div>
    </div>
  );
};

export default MaterialCellItem;
