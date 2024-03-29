import { useState } from "react";
import { useSelector } from "react-redux";
// import axios from "axios";

import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faBan } from "@fortawesome/free-solid-svg-icons";
const LikedPropertyComponent = (props) => {
  const [id, setId] = useState(props._id);
  const userData = useSelector((state) => state.auth.userData);
  const [email, setEmail] = useState(userData.email);
  // const [email] = useState(userData.email);

  const handelSubmit = (ev) => {
    ev.preventDefault();
  };
  const handelIdChange = (ev) => {
    setId(props._id);
  };
  const handelEmailChange = (ev) => {
    setEmail(userData.email);
  };

  const hendeleConfirmClick = (ev) => {
    setId(props.id);

    console.log("this is the id", id);
    console.log("userData.email", userData.email);

    // if (error) {
    //   console.log("error", error);
    //   let errorArr = [...validateValue.error.details];
    //   for (let i = 0; i < errorArr.length; i++) {
    //     toast.error(error.details[i].message, {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   }
    //   throw error;
    // }
    let dataToSend = { id, email: userData.email };
    console.log("dataToSend", dataToSend);
    // props.onLikeDone(props._id);
    props.onLikeDone(dataToSend);
    // console.log("dataToSend", dataToSend);
    // props.onEditDone(
    //   props._id,
    //   dataToSend.price,
    //   dataToSend.description,
    //   dataToSend.address
    // );
    // console.log("validation error", error);
    // else {
    //   axios
    //     .post("/properties", dataToSend)
    //     .then((data) => {
    //       console.log(data);
    //       toast.success("🦄 Property card created successfully!", {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     })
    //     .catch((err) => {
    //       console.log("err from axios", err);
    //     });
    // }
  };
  const handleCanceleLike = () => {
    props.onLikeCancel();
  };
  const handelFormClick = (ev) => {
    ev.stopPropagation();
  };
  return (
    <div className="center-wrapper" onClick={handleCanceleLike}>
      <form
        onSubmit={handelSubmit}
        onClick={handelFormClick}
        className="center-form "
      >
        <div className="mb-3">
          <h3>to add this property to liked properties?</h3>
        </div>
        {/* <div className="row"> */}
        <div className="container ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handelEmailChange}
          />

          <label htmlFor="exampleInputId" className="form-label">
            Id
          </label>
          <input
            type="id"
            className="form-control mb-5"
            id="exampleInputid1"
            aria-describedby="idHelp"
            value={id}
            onChange={handelIdChange}
          />

          <div className="container d-flex justify-content-around">
            {/* <div className="d-flex justify-content-between"> */}
            <div>
              <button
                type="submit"
                className="btn btn-success w-100"
                onClick={hendeleConfirmClick}
              >
                confirm {""}
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
            </div>
            {/* <div className="col"> */}{" "}
            <div>
              <button
                type="submit"
                className="btn btn-danger w-100"
                onClick={handleCanceleLike}
              >
                cancel {""}
                <FontAwesomeIcon icon={faBan} />
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};
export default LikedPropertyComponent;
