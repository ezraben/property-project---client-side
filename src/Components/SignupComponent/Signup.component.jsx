import { useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

import signUpSchema from "../../validation/signUp.validation";

const SignupComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
  const handlePhoneChange = (ev) => {
    setPhone(ev.target.value);
  };
  const handelCheckButton = (ev) => {
    setIsAdmin(ev.target.checked);
    console.log(ev.target.checked);
  };

  const handelSubmit = (ev) => {
    ev.preventDefault();

    const validateValue = Joi.validate(
      {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
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
        .post("/auth/signup", {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          phone,
          isAdmin,
        })
        .then(({ data }) => {
          console.log("data", data);
          localStorage.setItem("token", data.msg);
          console.log(data.msg);
        })
        .catch((err) => {
          console.log("err from exios", err);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
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
        <div>{firstName}</div>
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
        <div>{lastName}</div>
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
        <div>{email}</div>
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
          <div>{password}</div>
        </div>{" "}
        {password.length > 0 && password.length < 8 && (
          <div className="alert alert-warning">
            password must be at least 8 characters
          </div>
        )}
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
        <div>{confirmPassword}</div>
        {confirmPassword.length > 3 && confirmPassword !== password && (
          <div className="alert alert-warning">
            password and confirm password must match
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number (optional)
          </label>
          <input
            type="phone"
            className="form-control"
            onChange={handlePhoneChange}
            value={phone}
          />
          <div>{phone}</div>
        </div>{" "}
        <div>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={handelCheckButton}
            checked={isAdmin}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check this box if you want to create a business account
          </label>
        </div>
        <div className="text-center ">
          <button
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
      </form>
    </div>
  );
};

export default SignupComponent;
