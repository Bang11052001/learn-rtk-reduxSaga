import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  list: [],
  filter: {
    _page: 1,
    _limit: 15,
  },
  pagination: {
    _page: 1,
    _limit: 15,
    _totalRows: 15,
  },
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    fetchStudentList(state, action) {
      state.isLoading = true;
    },
    fetchStudentListSuccess(state, action) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.isLoading = false;
    },
    fetchStudentListFailed(state) {
      state.isLoading = false;
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const studentActions = studentSlice.actions;

export default studentSlice.reducer;
