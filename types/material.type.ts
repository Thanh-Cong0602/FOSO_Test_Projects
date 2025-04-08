import { UnitsUnion } from "@/utils/enum.utils";

export type MaterialRes = {
  id: string;
  material: {
    id: string;
    name: string;
  };
  amount: number;
  unit: UnitsUnion;
};
