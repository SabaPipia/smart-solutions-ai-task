"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  username: string;
  email: string;
  city: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "username",
    header: "Username",
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
