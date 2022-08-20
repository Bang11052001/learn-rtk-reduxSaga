import { takeLatest, call, put } from "redux-saga/effects";
import { cityActions } from "./citySlice";
import cityApi from "../../api/cityApi";

function* fetchCityList(action) {
  try {
    const responList = yield call(cityApi.getAll);
    yield put(cityActions.fetchCitySuccess(responList.data));
  } catch (err) {
    console.log(err);
    yield put(cityActions.fetchCityFailed());
  }
}

function* citySaga() {
  yield takeLatest(cityActions.fetchCityList.type, fetchCityList);
}

export default citySaga;
