"use client";

import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { fetchUsers } from "@/store/action";
import { Suspense, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorContext } from "./provider";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddUserForm from "@/components/addUserForm";
import { stateInterface } from "@/types";

export default function Home() {
  const [pagCount, setPagCount] = useState(0);
  const { isError, isSaved, setIsError, setIsSaved } = useContext(errorContext);
  const dispatch: (func: any) => void = useDispatch();
  const DATA = useSelector((state: stateInterface) => state.data);
  const { users, loading } = DATA;
  const context = useContext(errorContext);

  const usersPerPage = 10;
  const currentPage = pagCount;
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const usersToDisplay = users.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setPagCount(page);
  };

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
      <DataTable columns={columns} data={usersToDisplay} />
      <div className="flex justify-center mt-5">
        {currentPage != 0 && (
          <Button onClick={() => handlePageChange(currentPage - 1)}>
            Previous Page
          </Button>
        )}

        {endIndex < users.length && (
          <Button onClick={() => handlePageChange(currentPage + 1)}>
            Next Page
          </Button>
        )}
      </div>
    </main>
  );
}
