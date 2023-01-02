import { useState } from "react";
import { useParams } from "react-router-dom";
import recoverPasswordSchema from "../../validation/recoverPassword.validation";
import Joi from "joi-browser";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ForgetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { keyParam, iv, encryptedData } = useParams();

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handlesetConfirmPasswordChange = (ev) => {
    setConfirmPassword(ev.target.value);
  };
  const history = useHistory();
  const handelSubmit = (ev) => {
    ev.preventDefault();
    const validatedVlue = Joi.validate(
      { password, confirmPassword },
      recoverPasswordSchema,
      {
        abortEarly: false,
      }
    );
    const { error } = validatedVlue;
    if (error) {
      console.log("invalidddddddd", { error });
    } else {
      if (password === confirmPassword) {
        axios
          .post(`/auth/recoverPassword/${keyParam}/${iv}/${encryptedData}`, {
            password,
          })
          .then((data) => {
            console.log("success", data);

            //todo
            //redirect to login
          })
          .catch((err) => {
            console.log(err);
            //todo
            //displey error
          });
      }
    }
  };

  ///auth/forgetPassword
  return (
    <form onSubmit={handelSubmit}>
      <div className="card-body px-5">
        <div className="form-outline">
          <label className="form-label" htmlFor="password">
            password
          </label>
          <input
            type="password"
            id="password"
            className="form-control my-3"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div className="form-outline">
          <label className="form-label" htmlFor="typeEmail">
            confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control my-3"
            onChange={handlesetConfirmPasswordChange}
            value={confirmPassword}
          />
        </div>
        {confirmPassword.length > 3 && confirmPassword !== password && (
          <div className="alert alert-warning">
            password and confirm password must match
          </div>
        )}
      </div>

      <button className="btn btn-success">send</button>
    </form>
  );
};

export default ForgetPasswordPage;
