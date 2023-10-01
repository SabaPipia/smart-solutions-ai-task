import { actionInterface } from "@/types";
import {
  EDIT_USER,
  EDIT_USER_ERROR,
  FETCH_USERS,
  FETCH_USERS_ERROR,
  REMOVE_USER,
  REMOVE_USER_ERROR,
} from "../types";
import { act } from "react-dom/test-utils";

const initialState = {
  error: null,
  loading: false,
  users: [],
};

const reducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_USERS_ERROR:
      return {
        state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_USER:
      const updatedUsers = state.users.filter(
        (user: any) => user.id !== action.payload
      );
      return {
        users: updatedUsers,
        loading: false,
        error: null,
      };
    case REMOVE_USER_ERROR:
      return {
        state,
        loading: false,
        error: action.payload,
      };
    case EDIT_USER:
      const editedUsers = state.users.map((user: any) => {
        if (user.id === action.payload.row.original.id) {
          user.name = action.payload.editedName;
          user.email = action.payload.editedEmail;
          user.address.city = action.payload.editedCity;
        }
        return user;
      });

      return {
        users: editedUsers,
        loading: false,
        error: null,
      };
    case EDIT_USER_ERROR:
      return {
        state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
