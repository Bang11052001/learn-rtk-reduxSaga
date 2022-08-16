import { takeEvery, all, delay, put, takeLatest } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";

function* handleCounterSaga(action) {
  console.log("waiting 1s");
  yield delay(1000);
  console.log("result");
  yield put(incrementSagaSuccess(action.payload));
}

function* counterSaga() {
  yield takeLatest(incrementSaga.type, handleCounterSaga);
}

export default counterSaga;
