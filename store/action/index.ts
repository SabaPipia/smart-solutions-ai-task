import { Dispatch } from "redux";
import {
  EDIT_USER,
  EDIT_USER_ERROR,
  FETCH_USERS,
  FETCH_USERS_ERROR,
  REMOVE_USER,
  REMOVE_USER_ERROR,
  userEditInterface,
  userRemoveInterface,
  usersInterface,
} from "../types";
import { rowInterface } from "@/types";

export const fetchUsers = () => async (dispatch: Dispatch<usersInterface>) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    dispatch({
      type: FETCH_USERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_ERROR,
      payload: "error",
    });
  }
};

export const removeUser =
  (userId: number) => async (dispatch: Dispatch<userRemoveInterface>) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
          method: "DELETE",
        }
      ).then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          return;
        }
      });
      dispatch({
        type: REMOVE_USER,
        payload: userId,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_USER_ERROR,
        payload: "error",
      });
    }
  };

export const editUser =
  ({ row, editedName, editedEmail, editedCity }: rowInterface) =>
  async (dispatch: Dispatch<userEditInterface>) => {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${row.original.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: editedName,
            email: editedEmail,
            city: editedCity,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      });
      dispatch({
        type: EDIT_USER,
        payload: { row, editedName, editedEmail, editedCity },
      });
    } catch (error) {
      dispatch({
        type: EDIT_USER_ERROR,
        payload: "error",
      });
    }
  };
