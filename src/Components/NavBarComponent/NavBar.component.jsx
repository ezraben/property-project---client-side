// import axios from "axios";
// import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
  //  const handlesetConfirmPasswordChange = (ev) => {
  //   setConfirmPassword(ev.target.value);
  // };
  // const [address, setAddress] = useState("");
  // const handeleaddressChange = (ev) => {
  //   setAddress(ev.target.value);
  // };

  // const handeleSearchSunmit = (ev) => {
  //   ev.preventDefault();
  //   axios
  //     .post("properties/filter", { address })
  //     .then(({ data }) => {
  //       console.log({ data });
  //     })
  //     .catch((err) => {
  //       console.log("err from axios", err);
  //     });
  // };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" to="">
        Navbar
      </a>
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
            <a className="nav-link" to="">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="">
              aink
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              to=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" to="">
                Action
              </a>
              <a className="dropdown-item" to="">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" to="">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" to="">
              Disabled
            </a>
          </li>
        </ul>
        {/* <form
          className="form-inline my-2 my-lg-0"
          onSubmit={handeleSearchSunmit}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handeleaddressChange}
            value={address}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};
export default NavBarComponent;

{
  /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" to="">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" to="">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" to="">Action</a>
          <a className="dropdown-item" to="">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" to="">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" to="">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */
}