import { pathName } from "@/constants/routes";

export const MENU_NAVBAR_CONFIGS = [
  {
    title: "Danh mục",
    href: pathName.CATEGORIES,
  },
  {
    title: "Bán & Xuất hàng",
    href: pathName.SELL_GOODS,
  },
  {
    title: "Mua & Nhập hàng",
    href: pathName.BUY_GOODS,
  },

  {
    title: "Kho & Sản xuất",
    href: pathName.WAREHOUSE,
  },

  {
    title: "Kế toán",
    href: pathName.ACCOUNTING,
  },

  {
    title: "Báo cáo & Thống kê",
    href: pathName.REPORT,
  },

  {
    title: "Tiện ích",
    href: pathName.UTILITIS,
  },
];
