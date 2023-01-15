import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../imges/ybn-logo.png";
import footerCss from "./footerCss.css";

import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
// import { useState } from "react";
// import { Link } from "react-router-dom";

const FooterComponent = () => {
  // const [img, setImg] = useState("");
  // const handleImg = (ev) => {
  //   setImg(ev.target.value);
  // };
  return (
    <footer className="text-center text-lg-start bg-light text-muted footer">
      {/* <!-- Section: Social media --> */}

      <section className="">
        {/* <div className="container text-center text-md-start mt-5"> */}
        {/* <div className="row mt-3"> */}
        {/* <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"> */}
        {/* <!-- Links --> */}
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p>
          <i className="fas fa-home me-3"></i> Tel aviv, shalom alichem 55,
          israel
        </p>
        <div className="container d-flex justify-content-around ">
          <p className="icons">
            <a
              href=" https://wa.me/+972548193664"
              target="_blank"
              rel="noreferrer"
              className="fas fa-phone me-3"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </p>
          {/* <p> */}
          {/* <a
                  href="mailto:ezrabn0@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a> */}
          {/* <a href="mailto:ezrabn0@gmail.com">ezrabn0@gmail.com</a> */}
          {/* </p> */}
          <p className="icons">
            <a
              href="https://github.com/ezraben"
              target="_blank"
              rel="noreferrer"
              className="me-4 text-reset"
            >
              <i className="fab fa-github">
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
          </p>
          <p className="icons">
            <a
              href="https://linkedin.com/in/ezra-ben-natan-8234a51a5"
              target="_blank"
              rel="noreferrer"
              className="me-4 text-reset"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <i className="fab fa-linkedin"></i>
            </a>
          </p>
        </div>
        {/* </div> */}
        {/* <!-- Grid column --> */}
        {/* </div> */}
        {/* <!-- Grid row --> */}
        {/* </div> */}
      </section>
      <div className="w-25 p-3 imgFooter">
        <img
          src={logo}
          alt="logo of ybn properties"
          className="img-thumbnail "
        ></img>
      </div>
      {/* <img
        src={logo}
        alt=
        // value="../../imges/ybn-logo.png"
      /> */}

      <div
        className="text-center p-4"
        // style="background-color: rgba(0, 0, 0, 0.05);"
      >
        © 2023 Copyright: EBN
      </div>
    </footer>
  );
};

export default FooterComponent;
