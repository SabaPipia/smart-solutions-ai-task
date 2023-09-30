import { Dispatch } from "redux";
import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  REMOVE_USER,
  REMOVE_USER_ERROR,
  userRemoveInterface,
  usersInterface,
} from "../types";

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
          console.log(res);
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
