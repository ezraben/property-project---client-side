import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faRightToBracket,
  faUser,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
// import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import AllCardPage from "../../Pages/allCardsPage/AllCards.page";
import navCss from "./navBarCss.css";
import logo from "../../imges/ybn-logo.png";
import { useState } from "react";
// const NavBarComponent = () => {
function NavBarComponent() {
  const isAdmin = localStorage.getItem("admin");
  useEffect(() => {}, [isAdmin]);
  const userEmail = localStorage.getItem("userEmail");
  useEffect(() => {}, [userEmail]);

  // const [userData, setUserData] = useState(
  //   useSelector((state) => state.auth.userData)
  // );
  // const { isAdmin, setIsAdmin } = useState(
  //   useSelector((state) => state.auth.admin)
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const userDate = localStorage.getItem("userEmail");
  //   const isAdmin = localStorage.getItem("admin");
  //   if (token) {
  //     dispatch(authActions.login());
  //   }
  // }, []);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  // const userData = useSelector((state) => state.auth.userData);
  // const isAdmin = useSelector((state) => state.auth.admin);
  const showLogin = () => {
    if (userEmail && isAdmin === "true") {
      // if (userData.email && isAdmin === "true") {
      return (
        <Fragment>
          {" "}
          <li className="nav-item ">
            {" "}
            <NavLink className="nav-link  " to="/">
              home <FontAwesomeIcon icon={faHome} />
              <span className="sr-only">(current)home</span>
            </NavLink>
          </li>
          <li className="nav-item  ">
            <NavLink className="nav-link" to="/DashbordPage">
              Dashbord
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/CreateCardComponent">
              Create Card Component
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/LikedPropertyPage">
              Liked Property Page
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/allCards">
              all Cards
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/logout">
              Logout <FontAwesomeIcon icon={faUserXmark} />
            </NavLink>
          </li>
        </Fragment>
      );
    }
    if (userEmail) {
      // if (userData.email && isAdmin === false) {
      return (
        <Fragment>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link " to="/LikedPropertyPage">
              Liked Property Page
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/allCards">
              all Cards
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/logout">
              <FontAwesomeIcon icon={faUserXmark} /> logout
            </NavLink>
          </li>
        </Fragment>
      );
    }
    if (!userEmail) {
      // else
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link " to="/LoginPage">
              Login <FontAwesomeIcon icon={faRightToBracket} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/SignupPage">
              Sign up <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/allCards">
              all Cards
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/AboutPage">
              About Page
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light   ${
        loggedIn ? "loggedIn" : "notLoggedIn"
      } `}
    >
      <NavLink className="navbar-brand   " to="/">
        <div className="">
          <img src={logo} alt="logo of the company" className="logo" />{" "}
        </div>
        {userEmail ? userEmail : <p>You are not connected</p>}
        {/* {userData.email ? userData.email : <p>You are not connected</p>} */}
      </NavLink>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  mr-auto ">{showLogin()}</ul>
      </div>
    </nav>
  );
}
export default NavBarComponent;

//////////////////////////////////////
//from here nav works after refresh but not the rest - will try now to update the store with local item on login
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faRightToBracket,
//   faUser,
//   faUserXmark,
// } from "@fortawesome/free-solid-svg-icons";
// // import { useDispatch } from "react-redux";
// import { authActions } from "../../store/auth";
// import { useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Fragment } from "react";
// import AllCardPage from "../../Pages/allCardsPage/AllCards.page";
// import navCss from "./navBarCss.css";
// import logo from "../../imges/ybn-logo.png";
// import { useState } from "react";
// // const NavBarComponent = () => {
// function NavBarComponent() {
//   const isAdmin = localStorage.getItem("admin");
//   useEffect(() => {
//     console.log("isAdmin", isAdmin);
//   }, [isAdmin]);
//   const userEmail = localStorage.getItem("userEmail");
//   useEffect(() => {
//     console.log("userEmail", userEmail);
//   }, [userEmail]);

//   // const [userData, setUserData] = useState(
//   //   useSelector((state) => state.auth.userData)
//   // );
//   // const { isAdmin, setIsAdmin } = useState(
//   //   useSelector((state) => state.auth.admin)
//   // );
//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   //   const token = localStorage.getItem("token");
//   //   const userDate = localStorage.getItem("userEmail");
//   //   const isAdmin = localStorage.getItem("admin");
//   //   if (token) {
//   //     dispatch(authActions.login());
//   //   }
//   // }, []);
//   const loggedIn = useSelector((state) => state.auth.loggedIn);
//   // const userData = useSelector((state) => state.auth.userData);
//   // const isAdmin = useSelector((state) => state.auth.admin);
//   const showLogin = () => {
//     if (userEmail && isAdmin === "true") {
//       // if (userData.email && isAdmin) {
//       return (
//         <Fragment>
//           {" "}
//           <li className="nav-item ">
//             {" "}
//             <NavLink className="nav-link  " to="/">
//               home <FontAwesomeIcon icon={faHome} />
//               <span className="sr-only">(current)home</span>
//             </NavLink>
//           </li>
//           <li className="nav-item  ">
//             <NavLink className="nav-link" to="/DashbordPage">
//               Dashbord
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/CreateCardComponent">
//               Create Card Component
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/LikedPropertyPage">
//               Liked Property Page
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/allCards">
//               all Cards
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/logout">
//               Logout <FontAwesomeIcon icon={faUserXmark} />
//             </NavLink>
//           </li>
//         </Fragment>
//       );
//     }
//     if (userEmail) {
//       // if (userData.email) {
//       return (
//         <Fragment>
//           <li className="nav-item ">
//             <NavLink className="nav-link" to="/">
//               Home <span className="sr-only">(current)</span>
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link " to="/LikedPropertyPage">
//               Liked Property Page
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/allCards">
//               all Cards
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/logout">
//               <FontAwesomeIcon icon={faUserXmark} /> logout
//             </NavLink>
//           </li>
//         </Fragment>
//       );
//     }
//     // else
//     if (!userEmail) {
//       return (
//         <Fragment>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/LoginPage">
//               Login <FontAwesomeIcon icon={faRightToBracket} />
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/SignupPage">
//               Sign up <FontAwesomeIcon icon={faUser} />
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/allCards">
//               all Cards
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/AboutPage">
//               About Page
//             </NavLink>
//           </li>
//         </Fragment>
//       );
//     }
//   };

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-light   ${
//         loggedIn ? "loggedIn" : "notLoggedIn"
//       } `}
//     >
//       <NavLink className="navbar-brand   " to="/">
//         <div className="">
//           <img src={logo} alt="logo of the company" className="logo" />{" "}
//         </div>
//         {userEmail ? userEmail : <p>You are not connected</p>}
//         {/* {userData.email ? userData.email : <p>You are not connected</p>} */}
//       </NavLink>
//       <button
//         className="navbar-toggler "
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav  mr-auto ">{showLogin()}</ul>
//       </div>
//     </nav>
//   );
// }
// export default NavBarComponent;

//////////////////////////////////////
//until here nav works after refresh but not the rest - will try now to update the store with local item on login

// ////////////////////////////////
// befor addinb token actipo
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faRightToBracket,
//   faUser,
//   faUserXmark,
// } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Fragment } from "react";
// import AllCardPage from "../../Pages/allCardsPage/AllCards.page";
// import navCss from "./navBarCss.css";
// import logo from "../../imges/ybn-logo.png";
// function NavBarComponent() {
//   const loggedIn = useSelector((state) => state.auth.loggedIn);
//   const userData = useSelector((state) => state.auth.userData);
//   const isAdmin = useSelector((state) => state.auth.admin);
//   const showLogin = () => {
//     if (userData.email && isAdmin) {
//       return (
//         <Fragment>
//           {" "}
//           <li className="nav-item ">
//             {" "}
//             <NavLink className="nav-link  " to="/">
//               home <FontAwesomeIcon icon={faHome} />
//               <span className="sr-only">(current)home</span>
//             </NavLink>
//           </li>
//           <li className="nav-item  ">
//             <NavLink className="nav-link" to="/DashbordPage">
//               Dashbord
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/CreateCardComponent">
//               Create Card Component
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/LikedPropertyPage">
//               Liked Property Page
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/allCards">
//               all Cards
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/logout">
//               Logout <FontAwesomeIcon icon={faUserXmark} />
//             </NavLink>
//           </li>
//         </Fragment>
//       );
//     }
//     if (userData.email) {
//       return (
//         <Fragment>
//           <li className="nav-item ">
//             <NavLink className="nav-link" to="/">
//               Home <span className="sr-only">(current)</span>
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link " to="/LikedPropertyPage">
//               Liked Property Page
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/allCards">
//               all Cards
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/logout">
//               <FontAwesomeIcon icon={faUserXmark} /> logout
//             </NavLink>
//           </li>
//         </Fragment>
//       );
//     } else {
//       return (
//         <Fragment>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/LoginPage">
//               Login <FontAwesomeIcon icon={faRightToBracket} />
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/SignupPage">
//               Sign up <FontAwesomeIcon icon={faUser} />
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/allCards">
//               all Cards
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link " to="/AboutPage">
//               About Page
//             </NavLink>
//           </li>
//         </Fragment>
//       );
//     }
//   };

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-light   ${
//         loggedIn ? "loggedIn" : "notLoggedIn"
//       } `}
//     >
//       <NavLink className="navbar-brand   " to="/">
//         <div className="">
//           <img src={logo} alt="logo of the company" className="logo" />{" "}
//         </div>
//         {userData.email ? userData.email : <p>You are not connected</p>}
//       </NavLink>
//       <button
//         className="navbar-toggler "
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav  mr-auto ">{showLogin()}</ul>
//       </div>
//     </nav>
//   );
// }
// export default NavBarComponent;
// ////////////////////////////////
// befor addinb token actipo
