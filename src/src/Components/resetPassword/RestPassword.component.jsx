import axios from "axios";
import { useState } from "react";
const ResetPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const handelEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const handelSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post("/auth/forgetPassword", { email })
      .then((data) => {
        console.log("data", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <form onSubmit={handelSubmit} className="topSpaceFromNav">
      <h1 className="text-center mt-5">
        Forgot your password? <br />
        please enter your email and we well send you your recovery link
      </h1>
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
      <button className="btn btn-primary text-center m-5">send</button>
    </form>
  );
};
export default ResetPasswordComponent;
