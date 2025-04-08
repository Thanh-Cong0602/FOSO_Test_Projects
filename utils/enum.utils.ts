export enum Units {
  HANK = "Cuộn",
  METERS = "Mét",
}

export type UnitsUnion = `${Units}`;

export enum ProductStatus {
  COMPLETED = "Hoàn thành",
  PRODUCTING = "Đang sản xuất",
  UNCOMPLETED = "Chưa hoàn thành",
}

export type ProductStatusUnion = `${ProductStatus}`;

