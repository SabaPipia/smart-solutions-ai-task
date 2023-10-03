"use client";

import { fetchSingleUser } from "@/store/action";
import { userInterface } from "@/types";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const User = () => {
  const dispatch: (func: any) => void = useDispatch();
  const { user } = useSelector((state: any) => state.data);

  const pathname = usePathname();
  const userId = Number(pathname.split("/").at(-1));
  const route = useRouter();

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [dispatch, userId]);
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-white">
      <span
        className="bg-slate-200 p-2 rounded-xl cursor-pointer hover:shadow-xl hover:-translate-y-1"
        onClick={() => {
          route.replace("/");
        }}
      >
        &#9664; back
      </span>

      {user
        ? user.map((user: userInterface) => {
            return (
              <div
                className="bg-slate-200 p-7 text-center flex flex-col rounded-lg"
                key={user.id}
              >
                <h3 className="text-xl">Name: {user.name}</h3>
                <span>Email: {user.email}</span>
                <div className="flex mt-4 border-t-2 border-t-black justify-center flex-col">
                  <h4 className="text-xl">Address</h4>
                  <span>City: {user.address.city}</span>
                  <span>
                    Street:{" "}
                    {user.address.street || (
                      <span className="italic text-gray-600">N/A</span>
                    )}
                  </span>
                  <span>
                    Suite:{" "}
                    {user.address.suite || (
                      <span className="italic text-gray-600">N/A</span>
                    )}
                  </span>
                  <span>
                    Zip:{" "}
                    {user.address.zipcode || (
                      <span className="italic text-gray-600">N/A</span>
                    )}
                  </span>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default User;
