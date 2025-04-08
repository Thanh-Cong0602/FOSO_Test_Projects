import { ProductStatusUnion } from "@/utils/enum.utils";

export type ProductionSituationItem = {
  status: ProductStatusUnion;
  value: number;
};

export type ProductionSituationRes = {
  id: string;
  total: number;
  data: Array<ProductionSituationItem>;
};
