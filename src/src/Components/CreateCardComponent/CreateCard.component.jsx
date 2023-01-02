import { useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import cardSchema from "../../validation/CreateCard.Validation";

const CreateCardComponent = () => {
  const [price, setPrice] = useState("");
  const [description, setDdescription] = useState("");
  const [address, setAddress] = useState("");

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

    const validateValue = Joi.validate(
      { price, description, address },
      cardSchema,
      { abortEarly: false }
    );
    const { error } = validateValue;
    let dataToSend = {
      price,
      description,
      address,
    };

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
      console.log("validation error", error);
    } else {
      axios
        .post("/properties", dataToSend)
        .then((data) => {
          console.log(data);
          toast.success("🦄 Property card created successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((err) => {
          console.log("err from axios", err);
        });
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="priceInput" className="form-label">
          Price:
        </label>
        <input
          type="text"
          className="form-control"
          id="priceInput"
          value={price}
          onChange={handlePriceChange}
        />
        <div>{price}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="descriptionInput" className="form-label">
          description:
        </label>
        <input
          type="text"
          className="form-control"
          id="descriptionInput"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>{description}</div>
      <div className="mb-3">
        <label htmlFor="addressInput" className="form-label">
          address:
        </label>
        <input
          type="text"
          className="form-control"
          id="addressInput"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <div>{address}</div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreateCardComponent;
