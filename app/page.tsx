"use client";

import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { fetchUsers } from "@/store/action";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorContext } from "./provider";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import AddUserForm from "@/components/addUserForm";

export default function Home() {
  const { isError, isSaved, setIsError, setIsSaved } = useContext(errorContext);
  const dispatch: (func: any) => void = useDispatch();
  const DATA = useSelector((state: any) => state.data);
  const { users, loading } = DATA;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main className="relative py-11 px-44 max-xl:px-20 max-md:px-10">
      <Alert
        onClick={() => {
          setIsError(false);
          setIsSaved(false);
        }}
        className={`cursor-pointer fixed bottom-10 left-10 bg-white w-max z-50 hover:translate-y-[-0.5rem] marker:${
          isSaved ? "border-green-600" : "border-red-600"
        } border-[1px] ${isError || isSaved ? "opacity-100" : "opacity-0"} `}
      >
        <Terminal className="h-4 w-4" />
        <AlertTitle className="text-sm">
          {isSaved ? "Success!" : "Error: Incomplete Edits"}
        </AlertTitle>
        <AlertDescription className="text-sm">
          {isError
            ? "Sorry, but you can't leave any fields blank. Please make sure all input fields are filled."
            : "Your changes have been successfully saved."}
        </AlertDescription>
      </Alert>
      <AddUserForm />
      <DataTable columns={columns} data={users} />
    </main>
  );
}
