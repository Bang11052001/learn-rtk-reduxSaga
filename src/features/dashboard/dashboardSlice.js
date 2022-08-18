import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    LowMarkCount: 0,
  },
  highestStudentList: [],
  lowestStudentList: [],
  rankingByCityList: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchData: (state) => {
      state.isLoading = true;
    },
    fetchDataSuccess: (state) => {
      state.isLoading = false;
    },
    fetchDataFailed: (state) => {
      state.isLoading = false;
    },

    setStatistics: (state, action) => {
      state.statistics = action.payload;
    },
    setHighestStudentList: (state, action) => {
      state.highestStudentList = action.payload;
    },
    setLowestStudentList: (state, action) => {
      state.lowestStudentList = action.payload;
    },
    setRankingByCityList: (state, action) => {
      state.rankingByCityList = action.payload;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice.reducer;
