import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import React, { ChangeEvent, useState } from "react";
import { addUser } from "@/store/action";

const AddUserForm = () => {
  const dispatch: (func: any) => void = useDispatch();
  const [userInputs, setUserInputs] = useState({
    name: "",
    nameError: false,
    email: "",
    emailError: false,
    address: { city: "" },
    cityError: false,
    id: 1,
  });

  const handleSubmit = () => {
    const nameRegex = /^[A-Za-z]{2,}( [A-Za-z]{2,})+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const cityRegex = /^[A-Za-z\s]+$/;

    setUserInputs((prevUserInputs) => ({
      ...prevUserInputs,
      emailError: !emailRegex.test(prevUserInputs.email),
      nameError: !nameRegex.test(prevUserInputs.name),
      cityError: !cityRegex.test(prevUserInputs.address.city),
    }));

    if (
      nameRegex.test(userInputs.name) &&
      emailRegex.test(userInputs.email) &&
      cityRegex.test(userInputs.address.city)
    ) {
      dispatch(addUser(userInputs));
    }
  };

  return (
    <div className="flex gap-6 py-3">
      <div className="w-full">
        <Label
          className={`pl-3 ${
            userInputs.nameError ? "text-red-500" : "text-black"
          }`}
        >
          Name
        </Label>
        <Input
          id="name"
          className={`pl-3 ${userInputs.nameError ? "border-red-500" : ""}`}
          value={userInputs.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserInputs({ ...userInputs, name: e.target.value })
          }
        />
      </div>
      <div className="w-full">
        <Label>Email</Label>
        <Input
          id="email"
          className={`pl-3 ${userInputs.emailError ? "border-red-500" : ""}`}
          value={userInputs.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserInputs({ ...userInputs, email: e.target.value })
          }
        />
      </div>
      <div className="w-full">
        <Label>City</Label>
        <Input
          id="city"
          className={`pl-3 ${userInputs.cityError ? "border-red-500" : ""}`}
          value={userInputs.address.city}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserInputs({
              ...userInputs,
              address: { ...userInputs.address, city: e.target.value },
            })
          }
        />
      </div>
      <div className="flex items-end">
        <Button onClick={handleSubmit} className="px-8 bg-green-500">
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddUserForm;
