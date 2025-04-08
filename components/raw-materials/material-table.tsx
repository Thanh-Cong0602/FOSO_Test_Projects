"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMaterials } from "@/hooks/materials/useMaterials";
import NoContentImage from "@/public/images/no-content.png";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import MaterialCellItem from "./material-cell-item";

interface RawMaterialTableProps {
  isEmpty: boolean;
}

export function RawMaterialTable({ isEmpty }: Readonly<RawMaterialTableProps>) {
  const { data: materials, isLoading } = useMaterials();

  return (
    <div className="w-full rounded-md">
      <Table>
        <TableHeader className="bg-[#F3F4F6] border border-white-border h-12">
          <TableRow className="border-b-white-border">
            {["STT", "Nguyên vật liệu", "Đơn vị tính", "Số lượng"].map((item, index) => (
              <TableHead key={index} className="text-[#52575E] leading-4 text-xs font-semibold">
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading &&
            [...Array(4)].map((_, index) => (
              <TableRow key={index} className=" border-b-white-border h-20">
                {[...Array(4)].map((_, index) => (
                  <TableCell key={index}>
                    <Skeleton className="table-cell-item w-full h-20" />
                  </TableCell>
                ))}
              </TableRow>
            ))}

          {!isLoading && isEmpty && (
            <TableRow>
              <TableCell colSpan={4} className="h-[450px]">
                <div className="grid items-center justify-center gap-6">
                  <Image src={NoContentImage} alt="NoContentImage" />

                  <p className="text-2xl text-center leading-8 text-gray-500 tracking-normal font-medium">
                    Chưa có dữ liệu
                  </p>
                </div>
              </TableCell>
            </TableRow>
          )}

          {!isEmpty &&
            materials?.map((item, index) => (
              <TableRow key={index} className=" border-b-white-border h-[90px]">
                <TableCell className="table-cell-item leading-6 text-center">{index + 1}</TableCell>
                <TableCell>{<MaterialCellItem {...item.material} />}</TableCell>
                <TableCell className="table-cell-item leading-6">{item.unit}</TableCell>
                <TableCell className="table-cell-item leading-6 text-center">{item.amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
