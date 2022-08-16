import { takeEvery, all } from "redux-saga/effects";
import { increment } from "../features/counter/counterSlice";
import counterSaga from "../features/counter/counterSaga";

function* counter() {
  console.log("counter");
}

function* rootSaga() {
  console.log("rootSaga");
  yield all([counter(), counterSaga()]);
}

export default rootSaga;
