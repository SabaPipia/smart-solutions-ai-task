import { actionInterface } from "@/types";
import { FETCH_USERS, FETCH_USERS_ERROR } from "../types";

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
    default:
      return state;
  }
};

export default reducer;
