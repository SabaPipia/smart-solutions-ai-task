import { rowInterface, userInterface } from "@/types";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export interface usersInterface {
  type: typeof FETCH_USERS | typeof FETCH_USERS_ERROR;
  payload: string;
}

export const REMOVE_USER = "REMOVE_USER";
export const REMOVE_USER_ERROR = "REMOVE_USER_ERROR";
export interface userRemoveInterface {
  type: typeof REMOVE_USER | typeof REMOVE_USER_ERROR;
  payload: string | number;
}

export const EDIT_USER = "EDIT_USER";
export const EDIT_USER_ERROR = "EDIT_USER_ERROR";
export interface userEditInterface {
  type: typeof EDIT_USER | typeof EDIT_USER_ERROR;
  payload: string | rowInterface;
}

export const ADD_USER = "ADD_USER";
export const ADD_USER_ERROR = "ADD_USER_ERROR";
export interface userAddInterface {
  type: typeof ADD_USER | typeof ADD_USER_ERROR;
  payload: string | rowInterface | any;
}

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export interface singleUserInterface {
  type: typeof FETCH_USER | typeof FETCH_USER_ERROR;
  payload: string | number;
}
