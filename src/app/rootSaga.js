import { takeEvery, all } from "redux-saga/effects";
import { increment } from "../features/counter/counterSlice";
import authSaga from "../features/auth/authSaga";

function* rootSaga() {
  console.log("rootSaga");
  yield all([authSaga()]);
}

export default rootSaga;
