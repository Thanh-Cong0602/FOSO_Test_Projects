import NotificaionIcon from "@/public/notification.svg";
import Image from "next/image";

interface NotificationIconProps {
  total: number;
}

const NotificationIcon = ({ total }: Readonly<NotificationIconProps>) => {
  return (
    <div className="relative cursor-pointer">
      <Image src={NotificaionIcon} alt="Icon Navbar" className="w-5 h-5 max-w-5" priority />
      <div className="absolute top-[-2px] left-3 rounded-full w-3 h-3 flex items-center justify-center bg-red-500">
        <p className=" font-medium text-[8px] text-neutral-100 leading-0.5">{total}</p>
      </div>
    </div>
  );
};

export default NotificationIcon;
