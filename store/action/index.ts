import { Dispatch } from "redux";
import { FETCH_USERS, FETCH_USERS_ERROR, usersInterface } from "../types";

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
