import { AxiosError } from "axios";

import * as Model from "../services/github/models";
import * as ActionType from "./githubConstants";

export interface GetUsersParams {
  userName: string;
}
interface GetUsersResult {
  users: Model.User[];
}

export const getUsers = {
  start: (params: GetUsersParams) => ({
    type: ActionType.GET_USERS_START as typeof ActionType.GET_USERS_START,
    payload: params
  }),
  succeed: (params: GetUsersParams, result: GetUsersResult) => ({
    type: ActionType.GET_USERS_SUCCEED as typeof ActionType.GET_USERS_SUCCEED,
    payload: { params, result }
  }),

  fail: (params: GetUsersParams, error: AxiosError) => ({
    type: ActionType.GET_USERS_FAIL as typeof ActionType.GET_USERS_FAIL,
    payload: { params, error },
    error: true
  })
};

export type GithubAction =
  | ReturnType<typeof getUsers.start>
  | ReturnType<typeof getUsers.succeed>
  | ReturnType<typeof getUsers.fail>;
