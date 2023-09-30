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
