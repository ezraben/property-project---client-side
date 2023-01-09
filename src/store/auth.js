import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = {
  loggedIn: false,
  admin: false,
  userData: {},
  // isAllCardPage: false,
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
      // state.isAllCardPage = false;
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
    // upDateIsAllCardPage(state, action) {
    //   state.allCardPage = action.payload;
    // },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
