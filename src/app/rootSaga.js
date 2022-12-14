import { all } from "redux-saga/effects";
import authSaga from "../features/auth/authSaga";
import { citySaga } from "../features/city";
import dashboardSaga from "../features/dashboard/dashboardSaga";
import studentSaga from "../features/student/studentSaga";

function* rootSaga() {
  console.log("rootSaga");
  yield all([authSaga(), dashboardSaga(), studentSaga(), citySaga()]);
}

export default rootSaga;
