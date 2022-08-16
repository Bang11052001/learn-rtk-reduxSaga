import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      console.log(state.isLoading);
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    loginFailed: (state, action) => {
      state.isLoading = false;
    },
    logoutRequest: (state) => {
      state.isLoggedIn = false;
      state.currentUser = {};
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
