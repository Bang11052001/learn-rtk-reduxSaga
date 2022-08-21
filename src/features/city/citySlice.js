import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  list: [],
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    fetchCityList: (state) => {
      state.isLoading = true;
    },
    fetchCitySuccess: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    fetchCityFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const cityActions = citySlice.actions;

export const selectCityList = (state) => state.city.list;

export const selectCityMap = createSelector(selectCityList, (cityList) =>
  cityList.reduce((map, city) => {
    map[city.code] = city;
    return map;
  }, {})
);

export const selectCityOptions = createSelector(selectCityList, (cityList) =>
  cityList.map((city) => ({
    value: city.code,
    label: city.name,
  }))
);

export default citySlice.reducer;
