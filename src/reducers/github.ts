import { Reducer } from "redux";
import { AxiosError } from "axios";

import { GithubAction } from "../actions/github";
import * as ActionType from "../actions/githubConstants";
import * as Model from "../services/github/models";

export interface GithubState {
  users: Model.User[];
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: GithubState = {
  users: [],
  isLoading: false
};

const githubReducer: Reducer<GithubState, GithubAction> = (
  state: GithubState = initialState,
  action: GithubAction
): GithubState => {
  switch (action.type) {
    case ActionType.GET_USERS_START:
      return {
        ...state,
        users: [],
        isLoading: true
      };
    case ActionType.GET_USERS_SUCCEED:
      return {
        ...state,
        users: action.payload.result.users,
        isLoading: false
      };
    case ActionType.GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default: {
      const _: never = action;
      return state;
    }
  }
};

export default githubReducer;
