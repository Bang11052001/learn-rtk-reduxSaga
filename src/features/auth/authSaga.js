import { fork, put, take, delay } from "redux-saga/effects";
import { authActions } from "./authSlice";
import { history } from "../../utils";

function* LoginRequest(payload) {
  try {
    yield delay(2000);
    localStorage.setItem("access_token", { id: 1, name: "bang" });
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: "bang",
      })
    );

    yield history.push("/admin/dashboard");
  } catch {
    yield put(authActions.loginFailed("login fail"));
  }
}

function* logoutRequest(payload) {
  yield delay(500);
  localStorage.removeItem("access_token");
  yield history.push("/");
}

function* watchLoginFlow() {
  while (true) {
    const action = yield take(authActions.loginRequest.type);
    yield fork(LoginRequest, action.payload);

    yield take(authActions.logoutRequest.type);
    yield fork(logoutRequest);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
