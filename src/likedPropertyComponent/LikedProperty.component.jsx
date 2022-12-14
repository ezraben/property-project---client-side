import { useState } from "react";
// import axios from "axios";

import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faBan } from "@fortawesome/free-solid-svg-icons";
const LikedPropertyComponent = (props) => {
  const [id, setId] = useState(props._id);

  const handelSubmit = (ev) => {
    ev.preventDefault();
  };

  const hendeleConfirmClick = (ev) => {
    setId(props.id);

    console.log("this is the id", id);

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
    let dataToSend = { id };
    console.log("dataToSend", dataToSend);
    props.onLikeDone(props._id);
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

        <div className="row">
          <div className="col">
            {" "}
            <button
              type="submit"
              className="btn btn-success w-100"
              onClick={hendeleConfirmClick}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </button>
          </div>
          <div className="col">
            {" "}
            <button
              type="submit"
              className="btn btn-danger w-100"
              onClick={handleCanceleLike}
            >
              <FontAwesomeIcon icon={faBan} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LikedPropertyComponent;
