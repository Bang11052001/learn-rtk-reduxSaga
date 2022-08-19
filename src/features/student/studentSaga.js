import { takeLatest, call, put } from "redux-saga/effects";
import studentsApi from "../../api/studentsApi";
import { studentActions } from "./studentSlice";

function* fetchStudentsList(action) {
  try {
    const responseList = yield call(studentsApi.getAll, action.payload);
    yield put(studentActions.fetchStudentListSuccess(responseList));
  } catch (err) {
    console.log(err);
    yield put(studentActions.fetchStudentListFailed());
  }
}

function* studentSaga() {
  yield takeLatest(studentActions.fetchStudentList.type, fetchStudentsList);
}

export default studentSaga;
