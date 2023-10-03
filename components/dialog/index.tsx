import React, { ChangeEvent, useContext, useState } from "react";
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
import { errorContext } from "@/app/provider";
import { rowInterface } from "@/types";

const DialogActions = ({ row }: rowInterface) => {
  const [editedName, setEditedName] = useState<string>("");
  const [editedEmail, setEditedEmail] = useState<string>("");
  const [editedCity, setEditedCity] = useState<string>("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    city: false,
  });
  const context = useContext(errorContext);

  const dispatch: (func: any) => void = useDispatch();

  const handleEdit = async () => {
    const nameRegex = /^[A-Za-z]{2,}( [A-Za-z]{2,})+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const cityRegex = /^[A-Za-z\s]+$/;

    context.setIsLoading(true);

    if (editedName?.length !== 0 && editedEmail?.length !== 0 && editedCity) {
      if (
        nameRegex.test(editedName) &&
        emailRegex.test(editedEmail) &&
        cityRegex.test(editedCity)
      ) {
        await dispatch(editUser({ row, editedName, editedEmail, editedCity }));
        context.setIsLoading(false);
        setTimeout(() => {
          context.setIsSaved(true);
        }, 100);
        setTimeout(() => {
          context.setIsSaved(false);
        }, 3000);
      } else {
        context.setIsLoading(false);
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: !nameRegex.test(editedName),
          email: !emailRegex.test(editedEmail),
          city: !cityRegex.test(editedCity),
        }));
        setTimeout(() => {
          context.setIsError(true);
        }, 100);
        setTimeout(() => {
          context.setIsError(false);
        }, 3000);
      }
    } else {
      context.setIsLoading(false);
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: !nameRegex.test(editedName),
        email: !emailRegex.test(editedEmail),
        city: !cityRegex.test(editedCity),
      }));
      setTimeout(() => {
        context.setIsError(true);
      }, 100);
      setTimeout(() => {
        context.setIsError(false);
      }, 3000);
    }
  };

  const handleRemove = async () => {
    context.setIsLoading(true);
    try {
      await dispatch(removeUser(row.original.id));
      context.setIsLoading(false);
    } catch {
      context.setIsLoading(false);
    }
    setTimeout(() => {
      context.setIsSaved(true);
    }, 100);
    setTimeout(() => {
      context.setIsSaved(false);
    }, 3000);
  };

  return (
    <div className="flex w-full gap-12 max-[716px]:gap-2">
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
              &apos;.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-7">
            <DialogClose className="flex" asChild>
              <Button
                className="w-full"
                variant="destructive"
                onClick={handleRemove}
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
              setErrors(() => ({
                name: false,
                email: false,
                city: false,
              }));
              setEditedName(row.original.name);
              setEditedEmail(row.original.email);
              setEditedCity(row.original.address.city);
            }}
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to users profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="name"
                className={`text-right ${
                  errors.name ? "text-red-500" : "text-black"
                }`}
              >
                Name
              </Label>
              <Input
                id="name"
                defaultValue={row.original.name}
                className={`col-span-3 ${
                  errors.name ? "border-red-500" : "text-black"
                }`}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEditedName(e.target.value)
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="email"
                className={`text-right ${
                  errors.email ? "text-red-500" : "text-black"
                }`}
              >
                Email
              </Label>
              <Input
                id="email"
                defaultValue={row.original.email}
                className={`col-span-3 ${errors.email ? "border-red-500" : ""}`}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEditedEmail(e.target.value)
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="city"
                className={`text-right ${
                  errors.city ? "text-red-500" : "text-black"
                }`}
              >
                City
              </Label>
              <Input
                id="city"
                defaultValue={row.original.address.city}
                className={`col-span-3 ${errors.city ? "border-red-500" : ""}`}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEditedCity(e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-7">
            {editedEmail.length === 0 ||
            editedName.length === 0 ||
            editedCity.length === 0 ? (
              <Button
                className="w-full"
                variant="destructive"
                onClick={() => handleEdit()}
              >
                Confirm
              </Button>
            ) : (
              <DialogClose className="flex" asChild>
                <Button
                  className="w-full"
                  variant="destructive"
                  onClick={() => handleEdit()}
                >
                  Confirm
                </Button>
              </DialogClose>
            )}
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
