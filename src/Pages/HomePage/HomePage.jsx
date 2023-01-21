import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const userData = useSelector((state) => state.auth.userData);
  if (userData.email) {
    return (
      <Fragment>
        <h1 className="mb-5">YBN Properties since 1979</h1>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2014/08/03/23/41/house-409451_960_720.jpg"
                alt="Beautiful house img"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Join us today </h5>
                <p>Don't miss out.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555824_960_720.jpg"
                alt="swimming pool in a house"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>30 years of experience </h5>
                <p>This can be your house.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/07/03/21/45/house-2469110_960_720.jpg"
                alt="big house for sale"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>All good things start somewhere</h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h1>YBN Properties since 1979</h1>
      <div
        id="carouselExampleCaptions"
        className="carousel slide mb-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2014/08/03/23/41/house-409451_960_720.jpg"
              alt="Beautiful house img"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Join us today </h5>
              <p>Don't miss out.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555824_960_720.jpg"
              alt="swimming pool in a house"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>30 years of experience </h5>
              <p>This can be your house.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2017/07/03/21/45/house-2469110_960_720.jpg"
              alt="big house for sale"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>All good things start somewhere</h5>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container">
        <h3 className="d-flex justify-content-around">
          <Link to={"/LoginPage"}>
            <button className="btn btn-primary">
              {" "}
              Login <FontAwesomeIcon icon={faRightToBracket} />
            </button>
          </Link>{" "}
          <Link to={"/SignupPage"}>
            <button className="btn btn-primary">
              {" "}
              Sighup <FontAwesomeIcon icon={faUserPlus} />
            </button>
          </Link>
        </h3>
      </div>
    </Fragment>
  );
};

export default HomePage;
