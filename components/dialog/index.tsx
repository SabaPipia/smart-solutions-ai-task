import React, { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useDispatch } from "react-redux";
import { editUser, removeUser } from "@/store/action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DialogActions = ({ row }: any) => {
  const [editedName, setEditedName] = useState<string>("");
  const [editedEmail, setEditedEmail] = useState<string>("");
  const [editedCity, setEditedCity] = useState<string>("");
  const dispatch: (func: any) => void = useDispatch();

  const handleEdit = () => {
    if (editedName?.length !== 0 && editedEmail?.length !== 0 && editedCity) {
      dispatch(editUser({ row, editedName, editedEmail, editedCity }));
    }
  };

  return (
    <div className="flex w-full gap-12">
      <Dialog>
        <DialogTrigger className="flex w-full" asChild>
          <Button variant="destructive">Remove</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This action will delete the user{" "}
              <span className="font-bold from-neutral-950">
                {row.original.name}
              </span>
              .
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-7">
            <DialogClose className="flex" asChild>
              <Button
                className="w-full"
                variant="destructive"
                onClick={() => {
                  dispatch(removeUser(row.original.id));
                }}
              >
                Confirm
              </Button>
            </DialogClose>
            <DialogClose className="flex" asChild>
              <Button className="w-full" variant="default">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger className="flex w-full" asChild>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setEditedName(row.original.name);
              setEditedEmail(row.original.email);
              setEditedCity(row.original.city);
            }}
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to users profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={row.original.name}
                className="col-span-3"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEditedName(e.target.value)
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                defaultValue={row.original.email}
                className="col-span-3"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEditedEmail(e.target.value)
                }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEditedCity(e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-7">
            <DialogClose className="flex" asChild>
              <Button
                className="w-full"
                variant="destructive"
                onClick={handleEdit}
              >
                Confirm
              </Button>
            </DialogClose>
            <DialogClose className="flex" asChild>
              <Button className="w-full" variant="default">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogActions;
