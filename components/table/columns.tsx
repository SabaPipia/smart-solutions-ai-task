"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";

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
  {
    accessorKey: "actions",
    header: "actions",
    cell: (row) => (
      <div className="flex gap-7">
        <Button variant="outline">Edit</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    ),
  },
];
