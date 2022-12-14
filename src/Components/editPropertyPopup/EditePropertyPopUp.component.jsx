import { useState } from "react";
// import axios from "axios";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faBan } from "@fortawesome/free-solid-svg-icons";

import cardSchema from "../../validation/CreateCard.Validation";
import editCss from "./editCss.css";
const EditPopUPComponent = (props) => {
  const [price, setPrice] = useState(props.price);
  const [description, setDdescription] = useState(props.description);
  const [address, setAddress] = useState(props.address);

  const handlePriceChange = (ev) => {
    setPrice(ev.target.value);
  };
  const handleDescriptionChange = (ev) => {
    setDdescription(ev.target.value);
  };
  const handleAddressChange = (ev) => {
    setAddress(ev.target.value);
  };
  const handelSubmit = (ev) => {
    ev.preventDefault();
  };

  const hendeleConfirmClick = () => {
    const validateValue = Joi.validate(
      { price, description, address },
      cardSchema,
      { abortEarly: false }
    );
    console.log("validateValue.value", validateValue.value);
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
      throw error;
    }

    let dataToSend = {
      price,
      description,
      address,
    };

    console.log("dataToSend", dataToSend);
    props.onEditDone(
      props._id,
      dataToSend.price,
      dataToSend.description,
      dataToSend.address
    );
  };
  const hendeleCancelClick = () => {
    props.onEditCancel();
  };
  const handelFormClick = (ev) => {
    ev.stopPropagation();
  };
  return (
    <div className="center-wrapper" onClick={hendeleCancelClick}>
      <form
        onSubmit={handelSubmit}
        onClick={handelFormClick}
        className="center-form "
      >
        <div className="mb-3">
          <h3>Edit card</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="priceInput" className="form-label">
            Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="priceInput"
            onChange={handlePriceChange}
            value={price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label">
            description:
          </label>
          <input
            type="text"
            className="form-control"
            id="descriptionInput"
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addressInput" className="form-label">
            address:
          </label>
          <input
            type="text"
            className="form-control"
            id="addressInput"
            onChange={handleAddressChange}
            value={address}
          />
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
              onClick={hendeleCancelClick}
            >
              <FontAwesomeIcon icon={faBan} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditPopUPComponent;
