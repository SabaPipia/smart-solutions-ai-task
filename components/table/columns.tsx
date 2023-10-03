"use client";

import { userInterface } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<userInterface>[] = [
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
