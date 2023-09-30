"use client";

import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { fetchUsers } from "@/store/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch: (func: any) => void = useDispatch();
  const DATA = useSelector((state: any) => state.data);
  const { users, loading } = DATA;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main className="pt-11 px-44 max-xl:px-20 max-md:px-10">
      <DataTable columns={columns} data={users} />
    </main>
  );
}
