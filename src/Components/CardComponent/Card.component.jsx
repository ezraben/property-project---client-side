import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, Fragment } from "react";
import { useSelector } from "react-redux";

import CardComponentCss from "./cardComponentCss.css";

const CardComponent = ({
  price,
  description,
  city,
  address,
  img,
  _id,
  onDelete,
  onEdit,
  onLike,
  onSeeProperty,
  extraInfo,
}) => {
  const handelCardClick = (ev) => {
    onSeeProperty(_id);
  };
  const hendeleDedleteBtnClick = () => {
    onDelete(_id);
  };
  const handeleEditeClick = () => {
    onEdit(_id);
  };
  const handeleLikecheckBtn = (ev) => {
    setIsLikeProperty(ev.target.checked);
    if (ev.target.checked === true) {
      onLike(_id);
      console.log(ev.target.checked);
      setIsLikeProperty(false);
    }
  };
  const [isLikeProperty, setIsLikeProperty] = useState(false);

  const isAdmin = useSelector((state) => state.auth.admin);
  const userEmail = useSelector((state) => state.auth.userData.email);

  return (
    <div className="card  card-pointer">
      <img
        className="card-img-top "
        src={img}
        alt={description}
        onClick={handelCardClick}
      />

      <div className="card-body p-5 ">
        <h5 className="card-title ">
          price: <span className="cardColor">{price}</span>{" "}
        </h5>
        <h5 className="card-text">
          description: <span className="cardColor"> {description} </span>
        </h5>
        <h5 className="card-title">
          City: <span className="cardColor"> {city} </span>
        </h5>
        <h5 className="card-title">
          address: <span className="cardColor"> {address}</span>
        </h5>
        {window.location.pathname === "/allCards" && isAdmin === true && (
          <Fragment>
            <div className="starContainer">
              {/* <span> */}
              <input
                type="checkbox"
                className="star"
                // className="form-check-input star"
                id="likePropCheckBox"
                onChange={handeleLikecheckBtn}
                checked={isLikeProperty}
              />

              <p className="likeMsg">tick the box to like the property</p>
              {/* </span> */}
            </div>
          </Fragment>
        )}
        {window.location.pathname === "/allCards" &&
          isAdmin === false &&
          userEmail && (
            <Fragment>
              <div className="starContainer">
                {/* <span> */}
                <input
                  type="checkbox"
                  className="star"
                  // className="form-check-input star"
                  id="likePropCheckBox"
                  onChange={handeleLikecheckBtn}
                  checked={isLikeProperty}
                />

                <p className="likeMsg">tick the box to like the property</p>
                {/* </span> */}
              </div>
            </Fragment>
            // <Fragment>
            //   <input
            //     type="checkbox"
            //     className="form-check-input"
            //     id="likePropCheckBox"
            //     onChange={handeleLikecheckBtn}
            //     checked={isLikeProperty}
            //   />
            //   <p className="likeMsg">tick the box to like the property</p>
            // </Fragment>
          )}
        {window.location.pathname === "/LikedPropertyPage" && (
          <Fragment>
            <div className="card-body d-flex justify-content-center btnCard ">
              <button
                className="btn btn-danger"
                onClick={hendeleDedleteBtnClick}
              >
                Delete <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </Fragment>
        )}
      </div>
      {window.location.pathname === "/DashbordPage" && isAdmin === true && (
        <div className="card-body btnCard   ">
          {/* <div className="card-body btnCard d-flex justify-content-around  "> */}
          <button className="btn btn-warning " onClick={handeleEditeClick}>
            Edite
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className="btn btn-danger" onClick={hendeleDedleteBtnClick}>
            Delete <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
