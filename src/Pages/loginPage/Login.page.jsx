import { useState, useEffect } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import axios from "axios";
import loginSchema from "../../validation/Login.validation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const handelPassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handelSubmit = (ev) => {
    ev.preventDefault();
    const validatedVlue = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validatedVlue;
    if (error) {
      console.log("invalidddddddd", { error });
    }

    if (email && password) {
      axios
        .post("/auth/login", { email, password })
        // .post("/auth/login", { email, password })
        .then(({ data }) => {
          localStorage.setItem("token", data.msg);
          console.log("data", data);
          console.log("token", data.msg);
        })

        .catch((err) => {
          console.log("err from axios", err);
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };
  return (
    <form onSubmit={handelSubmit} className="topSpaceFromNav">
      <h1 className="text-center mt-5">please login</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handelEmail}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handelPassword}
          value={password}
        />
      </div>

      <div className="text-center">
        <button className="btn btn-primary text-center m-5">Login</button>
      </div>
    </form>
  );
};
export default LoginPage;
