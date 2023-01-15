import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  // faArrowAltCircleLeft,
  faRightToBracket,
  faUser,
  faUserXmark,
  // faArrowUpLeftFromCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import AllCardPage from "../../Pages/allCardsPage/AllCards.page";
import navCss from "./navBarCss.css";
import logo from "../../imges/ybn-logo.png";
function NavBarComponent() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userData = useSelector((state) => state.auth.userData);
  const isAdmin = useSelector((state) => state.auth.admin);
  const showLogin = () => {
    if (userData.email && isAdmin) {
      return (
        <Fragment>
          {/* <div className=""> */}
          <li className="nav-item active">
            {" "}
            <NavLink className="nav-link" to="/">
              home <FontAwesomeIcon icon={faHome} />
              <span className="sr-only">(current)home</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link active" to="/DashbordPage">
              Dashbord
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/CreateCardComponent">
              CreateCardComponent
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/LikedPropertyPage">
              LikedPropertyPage
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/allCards">
              allCards
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/logout">
              Logout
              <FontAwesomeIcon icon={faUserXmark} />
            </NavLink>
          </li>
          {/* </div> */}
        </Fragment>
      );
    }
    if (userData.email) {
      return (
        <Fragment>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" to="/LikedPropertyPage">
              LikedPropertyPage
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/allCards">
              allCards
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/logout">
              <FontAwesomeIcon icon={faUserXmark} />
              logout
            </NavLink>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/LoginPage">
              Login <FontAwesomeIcon icon={faRightToBracket} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/SignupPage">
              Sighup <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/allCards">
              allCards
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        loggedIn ? "bg-success" : "bg-danger"
      } `}
    >
      <NavLink className="navbar-brand   " to="/">
        <div className="w-25 p-3">
          <img src={logo} alt="logo of the company" className="img-thumbnail" />
        </div>
        {userData.email ? userData.email : "you are not connected"}
      </NavLink>
      <button
        className="navbar-toggler"
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
        <ul className="navbar-nav mr-auto">{showLogin()}</ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            // onClick={}
          >
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
}
export default NavBarComponent;
