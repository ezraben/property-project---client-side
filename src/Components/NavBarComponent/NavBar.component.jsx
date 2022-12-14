import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBarComponent() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userData = useSelector((state) => state.auth.userData);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        loggedIn ? "bg-success" : "bg-danger"
      } `}
    >
      <NavLink className="navbar-brand" to="/">
        Navbar {userData.email ? userData.email : "you are not connected"}
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-link active" to="/DashbordPage">
              Dashbord
            </NavLink>
            <NavLink className="nav-link active" to="/LoginPage">
              login
            </NavLink>
            <NavLink className="nav-link active" to="/SignupPage">
              register
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" to="/CreateCardComponent">
              CreateCardComponent
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
export default NavBarComponent;
