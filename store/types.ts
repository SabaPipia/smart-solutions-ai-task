export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export interface usersInterface {
  type: typeof FETCH_USERS | typeof FETCH_USERS_ERROR;
  payload: string;
}
