import { actionInterface, userInterface } from "@/types";
import {
  ADD_USER,
  ADD_USER_ERROR,
  EDIT_USER,
  EDIT_USER_ERROR,
  FETCH_USER,
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USER_ERROR,
  REMOVE_USER,
  REMOVE_USER_ERROR,
} from "../types";

const initialState = {
  error: null,
  loading: false,
  users: [],
  user: [],
};

const reducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        users: state.users.length != 0 ? [...state.users] : action.payload,
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
        (user: userInterface) => user.id !== action.payload
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
    case ADD_USER:
      state.users.map((user: any) => {
        user.id += 1;
      });

      return {
        users: [action.payload, ...state.users],
        loading: false,
        error: null,
      };
    case ADD_USER_ERROR:
      return {
        state,
        loading: false,
        error: action.payload,
      };
    case FETCH_USER:
      const singleUser = state.users.filter(
        (user: userInterface) => user.id === action.payload
      );
      return {
        users: state.users,
        loading: false,
        user: singleUser,
        error: null,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
