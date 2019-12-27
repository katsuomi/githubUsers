import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as Action from "../actions/githubConstants";
import { getUsers } from "../actions/github";
import * as api from "../services/github/api";

function* runGetUsers(action: ReturnType<typeof getUsers.start>) {
  const { companyName } = action.payload;

  try {
    const handler = api.getUsersFactory();
    const users = yield call(handler, companyName);

    yield put(getUsers.succeed(action.payload, { users }));
  } catch (error) {
    yield put(getUsers.fail(action.payload, error));
  }
}

export function* watchGetUsers() {
  yield takeLatest(Action.GET_USERS_START, runGetUsers);
}

export default function* rootSaga() {
  yield all([fork(watchGetUsers)]);
}
