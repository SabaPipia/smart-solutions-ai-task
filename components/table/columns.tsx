"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  name: string;
  email: string;
  city: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address.city",
    header: "city",
  },
];
