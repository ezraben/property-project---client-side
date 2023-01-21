import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = {
  loggedIn: false,
  admin: false,
  userData: {},
};

const authSlice = createSlice({
  name: "auth",

  initialState: initalAuthState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    loggedOut(state) {
      state.loggedIn = false;
      state.admin = false;
      state.userData = {};
    },
    isAdmin(state) {
      state.admin = true;
    },
    isAllCardPage(state) {
      state.allCardPage = true;
    },
    notAllCardPage(state) {
      state.allCardPage = false;
    },
    updateUserData(state, action) {
      state.userData = action.payload;
    },
    upDateIsAdmin(state, action) {
      state.admin = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
