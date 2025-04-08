import Image from "next/image";

interface IconNavbarProps {
  icon: string;
}
const IconNavbar = ({ icon }: Readonly<IconNavbarProps>) => {
  return <Image src={icon} alt="Icon Navbar" className="text-neutral-100 w-5 h-5 cursor-pointer" priority />;
};

export default IconNavbar;
