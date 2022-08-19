import { all, call, put, takeLatest } from "redux-saga/effects";

import cityApi from "../../api/cityApi";
import studentsApi from "../../api/studentsApi";
import { dashboardActions } from "./dashboardSlice";

function* fetchStatistics() {
  var responseList = yield all([
    call(studentsApi.getAll, { _page: 1, _limit: 1, gender: "male" }),
    call(studentsApi.getAll, { _page: 1, _limit: 1, gender: "female" }),
    call(studentsApi.getAll, { _page: 1, _limit: 1, mark_gte: 8 }),
    call(studentsApi.getAll, { _page: 1, _limit: 1, mark_lte: 5 }),
  ]);

  const statisticList = responseList.map((x) => x.pagination._totalRows);
  const [maleCount, femaleCount, highMarkCount, LowMarkCount] = statisticList;

  yield put(
    dashboardActions.setStatistics({
      maleCount,
      femaleCount,
      highMarkCount,
      LowMarkCount,
    })
  );
}

function* fetchHighestStudentList() {
  const highestStudentList = yield call(studentsApi.getAll, {
    _page: 1,
    _limit: 5,
    _order: "desc",
    _sort: "mark",
  });

  yield put(dashboardActions.setHighestStudentList(highestStudentList));
}

function* fetchLowestStudentList() {
  const lowestStudentList = yield call(studentsApi.getAll, {
    _page: 1,
    _limit: 5,
    _order: "asc",
    _sort: "mark",
  });

  yield put(dashboardActions.setLowestStudentList(lowestStudentList));
}

function* fetchRankingByCityList() {
  const { data: cityList } = yield call(cityApi.getAll);
  const newList = cityList.map((x) =>
    call(studentsApi.getAll, {
      _page: 1,
      _limit: 5,
      _sort: "mark",
      _order: "desc",
      city: x.code,
    })
  );

  const responseList = yield all(newList);

  const rankingByCityList = responseList.map((x, index) => ({
    cityId: cityList[index].code,
    rankingList: x.data,
    cityName: cityList[index].name,
  }));

  yield put(dashboardActions.setRankingByCityList(rankingByCityList));
}

function* fetchDataDashboard() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ]);

    yield put(dashboardActions.fetchDataSuccess());
  } catch (err) {
    console.log(err);
    yield put(dashboardActions.fetchDataFailed());
  }
}

function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDataDashboard);
}

export default dashboardSaga;
