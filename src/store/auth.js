import { createSlice } from "@reduxjs/toolkit";

let initalAuthState;
if (localStorage.getItem("admin") === "false") {
  initalAuthState = {
    loggedIn: false,

    admin: false,

    userData: { email: localStorage.getItem("userEmail") },
  };
}
if (localStorage.getItem("admin") === "true") {
  initalAuthState = {
    loggedIn: false,

    admin: true,
    //  admin: localStorage.getItem("admin"),

    userData: { email: localStorage.getItem("userEmail") },
  };
}
if (localStorage.getItem("admin") === null) {
  initalAuthState = {
    loggedIn: false,

    admin: false,
    //  admin: localStorage.getItem("admin"),

    userData: { email: localStorage.getItem("userEmail") },
  };
}

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
      // state.userEmail = {};
      state.userData.email = false;
      // state.userData = {};
    },
    isAdmin(state) {
      // if (localStorage.getItem("admin")) {
      //   state.admin=
      // }
      state.admin = true;
    },
    isAdminTest(state) {
      if (localStorage.getItem("admin")) {
        state.admin = true;
      } else {
        state.admin = false;
      }
    },

    isAllCardPage(state) {
      state.allCardPage = true;
    },
    notAllCardPage(state) {
      state.allCardPage = false;
    },
    updateUserData(state, action) {
      // state.userEmail = action.payload;
      state.userData = action.payload;
    },
    upDateIsAdmin(state, action) {
      state.admin = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

/////////////////////////////
//before error from react after refresh token
// import { createSlice } from "@reduxjs/toolkit";

// let initalAuthState;
// if (localStorage.getItem("admin") === "false") {
//   initalAuthState = {
//     loggedIn: false,

//     admin: false,

//     userData: { email: localStorage.getItem("userEmail") },
//   };
// }
// if (localStorage.getItem("admin") === "true") {
//   initalAuthState = {
//     loggedIn: false,

//     admin: true,
//     //  admin: localStorage.getItem("admin"),

//     userData: { email: localStorage.getItem("userEmail") },
//   };
// }
// if (localStorage.getItem("admin") === null) {
//   initalAuthState = {
//     loggedIn: false,

//     admin: false,
//     //  admin: localStorage.getItem("admin"),

//     userData: { email: localStorage.getItem("userEmail") },
//   };
// }
// // const initalAuthState = {
// //   loggedIn: false,

// //   // admin: false,
// //   admin: localStorage.getItem("admin"),

// //   userData: { email: localStorage.getItem("userEmail") },
// // };
// ///////////////
// // const initalAuthState = {
// //   loggedIn: false,

// //   admin: false,
// //   // admin: localStorage.getItem("admin"),

// //   userData: { email: localStorage.getItem("userEmail") },
// // };

// const authSlice = createSlice({
//   name: "auth",

//   initialState: initalAuthState,
//   reducers: {
//     login(state) {
//       state.loggedIn = true;
//     },
//     loggedOut(state) {
//       state.loggedIn = false;
//       state.admin = false;
//       // state.userEmail = {};
//       state.userData.email = false;
//       // state.userData = {};
//     },
//     isAdmin(state) {
//       // if (localStorage.getItem("admin")) {
//       //   state.admin=
//       // }
//       state.admin = true;
//     },
//     isAdminTest(state) {
//       if (localStorage.getItem("admin")) {
//         state.admin = true;
//       } else {
//         state.admin = false;
//       }
//     },

//     isAllCardPage(state) {
//       state.allCardPage = true;
//     },
//     notAllCardPage(state) {
//       state.allCardPage = false;
//     },
//     updateUserData(state, action) {
//       // state.userEmail = action.payload;
//       state.userData = action.payload;
//     },
//     upDateIsAdmin(state, action) {
//       state.admin = action.payload;
//     },
//   },
// });

// export const authActions = authSlice.actions;

// export default authSlice.reducer;
