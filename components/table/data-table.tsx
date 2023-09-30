"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { removeUser } from "@/store/action";
import { DialogClose } from "@radix-ui/react-dialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const dispath: (func: any) => void = useDispatch();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row: any) => {
              console.log(row);
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell: any) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                  <TableCell className="flex">
                    <div className="flex w-full">
                      <Dialog>
                        <DialogTrigger className="flex w-full">
                          <Button variant="destructive" className="w-full">
                            Remove
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This action will
                              delete the user{" "}
                              <span className="font-bold">
                                {row.original.username}
                              </span>
                              .
                              <div className="flex flex-col gap-4 mt-7">
                                <DialogClose className="flex">
                                  <Button
                                    className="w-full"
                                    variant="destructive"
                                    onClick={() => {
                                      dispath(removeUser(row.original.id));
                                    }}
                                  >
                                    Confirm
                                  </Button>
                                </DialogClose>
                                <DialogClose className="flex">
                                  <Button
                                    className="w-full"
                                    variant="default"
                                    onClick={() => {
                                      dispath(removeUser(row.original.id));
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                </DialogClose>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger className="flex w-full">
                          <Button variant="outline" className="w-full">
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                              Make changes to users profile here. Click save
                              when you're done.
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="name" className="text-right">
                                    Username
                                  </Label>
                                  <Input
                                    id="username"
                                    defaultValue={row.original.username}
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label
                                    htmlFor="username"
                                    className="text-right"
                                  >
                                    Email
                                  </Label>
                                  <Input
                                    id="email"
                                    defaultValue={row.original.email}
                                    className="col-span-3"
                                  />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="city" className="text-right">
                                    City
                                  </Label>
                                  <Input
                                    id="city"
                                    defaultValue={row.original.address.city}
                                    className="col-span-3"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-4 mt-7">
                                <DialogClose className="flex">
                                  <Button
                                    className="w-full"
                                    variant="destructive"
                                    onClick={() => {
                                      dispath(removeUser(row.original.id));
                                    }}
                                  >
                                    Confirm
                                  </Button>
                                </DialogClose>
                                <DialogClose className="flex">
                                  <Button
                                    className="w-full"
                                    variant="default"
                                    onClick={() => {
                                      dispath(removeUser(row.original.id));
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                </DialogClose>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
