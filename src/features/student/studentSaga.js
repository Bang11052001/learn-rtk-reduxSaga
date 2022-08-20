import { takeLatest, call, put, debounce } from "redux-saga/effects";
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

function* handleSearchDebouce(action) {
  yield put(studentActions.setFilter(action.payload));
}

function* studentSaga() {
  yield takeLatest(studentActions.fetchStudentList.type, fetchStudentsList);

  yield debounce(
    500,
    studentActions.setFilterWithDebounce.type,
    handleSearchDebouce
  );
}

export default studentSaga;
