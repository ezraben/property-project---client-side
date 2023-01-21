import { useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

import signUpSchema from "../../validation/signUp.validation";
import signupCss from "./signupCss.css";

////////////////////////////////////
//from here singup that works --- send secuusee messge also if amail exsist- but dos not create in data base in that case --- also befor multer

const SignupComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [img, setImg] = useState(null);
  // const [name, setName] = useState();
  const [img, setImg] = useState(null);
  const [phone, setPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleFirstNameChange = (ev) => {
    setFirstName(ev.target.value);
  };
  const handleLastNameChange = (ev) => {
    setLastName(ev.target.value);
  };
  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleConfirmPassword = (ev) => {
    setConfirmPassword(ev.target.value);
  };
  const handelImgChange = (ev) => {
    setImg(ev.target.files[0]);
    console.log(ev);
    // console.log(ev.target.files[0]);

    // setImg(ev.target.files[0]);
  };

  const handlePhoneChange = (ev) => {
    setPhone(ev.target.value);
  };
  const handelCheckButton = (ev) => {
    setIsAdmin(ev.target.checked);
    console.log(ev.target.checked);
  };
  const history = useHistory();

  const handelSubmit = (ev) => {
    ev.preventDefault();
    // const fd = new FormData();
    // fd.append("img", setImg(imgSelectedHandler.name));
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("img", img);
    formData.append("phone", phone);
    formData.append("isAdmin", isAdmin);
    // formData.append("img", setImg(imgSelectedHandler.name));
    console.log(formData);

    const validateValue = Joi.validate(
      {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        // img,
        // img,
        phone,
        isAdmin,
      },

      signUpSchema,
      {
        abortEarly: false,
      }
    );

    const { error } = validateValue;

    if (error) {
      console.log("error", error);

      let errorArr = [...validateValue.error.details];

      for (let i = 0; i < errorArr.length; i++) {
        toast.error(error.details[i].message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      console.log("error from exios", error);
    } else {
      axios
        .post(
          "/auth/signup",
          formData
          // {
          //   firstName,
          //   lastName,
          //   email,
          //   password,
          //   confirmPassword,
          //   img,
          //   // img,
          //   phone,
          //   isAdmin,
          // }
        )
        .then(({ data }) => {
          // if (data.status === "Failed") {
          //   toast.error(data.msg, {
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //   });
          //   throw error;
          // }
          console.log("data", data);
          console.log("formdata", formData);

          localStorage.setItem("token", data.msg);

          if (data.status === "Success") {
            toast.success("🦄 Welcome! " + firstName, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            history.push("/LoginPage", { email: email, password: password });
          }
        })
        .catch((err) => {
          console.log("err from exios", err);
        });
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={handelSubmit} encType="multipart/form-data">
        <h1>Create an account </h1>
        {/* <input
          type="img"
          htmlFor="img"
          name="img"
          id="img"
          onChange={imgSelectedHandler}
        /> */}
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            first Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleFirstNameChange}
            value={firstName}
          />
        </div>
        {firstName.length > 0 && firstName.length <= 1 && (
          <div className="alert alert-warning">
            First name must be at least 2 characters
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="last Name" className="form-label" />
          last Name
          <input
            type="text"
            className="form-control"
            onChange={handleLastNameChange}
            value={lastName}
          />
        </div>
        {lastName.length > 0 && lastName.length <= 1 && (
          <div className="alert alert-warning">
            Last name must be at least 2 characters
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        {email.length > 0 && email.length <= 4 && (
          <div className="alert alert-warning">
            email must be an valid stracture <br /> such as 'email@gmail.com'
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="Password"
            className="form-control"
            onChange={handlePasswordChange}
            value={password}
          />
          {password.length > 0 && password.length <= 8 && (
            <div className="alert alert-warning">
              Password must be at least 8 characters <br /> use at least one
              upper case letter <br /> and one lower case, use at least one
              number <br />
              and at least on spacial eg, !#$&*
            </div>
          )}
        </div>{" "}
        <div className="mb-3">
          <label htmlFor="ConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={handleConfirmPassword}
            value={confirmPassword}
          />
        </div>
        {/* <div>{confirmPassword}</div> */}
        {confirmPassword.length > 3 && confirmPassword !== password && (
          <div className="alert alert-warning">
            password and confirm password must match
          </div>
        )}
        <label htmlFor="img">img</label>
        <input
          className="m-2"
          type="file"
          name="img"
          id="img"
          onChange={handelImgChange}
        />
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number:
          </label>
          <input
            type="phone"
            className="form-control"
            onChange={handlePhoneChange}
            value={phone}
          />
        </div>{" "}
        {phone.length > 0 && phone.length <= 2 && (
          <div className="alert alert-warning">
            Phone number must ne at lest 3 characters
          </div>
        )}
        <div>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={handelCheckButton}
            checked={isAdmin}
          />
          <label className="form-check-label " htmlFor="exampleCheck1">
            Check this box if you want to create a business account
          </label>
        </div>
        <div className="text-center p-5 ">
          <button
            className="btn btn-success  "
            type="submit"
            // className={`btn btn-primary ${
            //   props.showBizCheckBox ? "d-none" : ""
            // }  `}
          >
            Submit
          </button>
        </div>
        {/* {props.showBizCheckBox && biz === true && (
          <button className="btn btn-primary"> submit</button>
        )} */}
        <div className="container d-flex">
          <h5>
            already have an account? <Link to={"/LoginPage"}>login</Link>
          </h5>
        </div>
      </form>
    </div>
  );
};
////////////////////////////////////
//until  here singup that works --- send secuusee messge also if amail exsist- but dos not create in data base in that case --- also befor multer

export default SignupComponent;
