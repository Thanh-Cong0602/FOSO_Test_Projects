import { MENU_NAVBAR_CONFIGS } from "@/constants/navbar-config";
import ConvertShapeIcon from "@/public/convertshape.svg";
import GearIcon from "@/public/gear.svg";
import Logo from "@/public/images/Logo.png";
import MessageIcon from "@/public/message.svg";
import QuestionIcon from "@/public/question.svg";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import IconNavbar from "./icon-navbar";
import NotificationIcon from "./notification-icon";
import { DropdownMenuDemo } from "./user-dropdown";

const Navbar = () => {
  return (
    <div className="bg-navbar h-18">
      <div className="flex h-full items-center wrapper-content gap-6">
        <Image src={Logo} alt="Logo" width={100} height={100} className="cursor-pointer" priority />

        <div className="flex-1 flex justify-between">
          <div className="flex items-center">
            {MENU_NAVBAR_CONFIGS.map((item, index) => (
              <Link href={item.href} key={index} className="opacity-90 px-2 py-1">
                <p className="text-neutral-300 leading-5 font-normal text-sm px-1 tracking-normal">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Input type="text" variant="search" placeholder="Tìm kiếm" icon={faSearch} />
            <div className="flex gap-2 opacity-90">
              <IconNavbar icon={GearIcon} />
              <IconNavbar icon={ConvertShapeIcon} />
              <IconNavbar icon={MessageIcon} />
              <NotificationIcon total={1} />
              <IconNavbar icon={QuestionIcon} />
            </div>

            <DropdownMenuDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
