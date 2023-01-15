import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, Fragment } from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

// import { useDispatch } from "react-redux";

// import { authActions } from "../../store/auth";
import CardComponentCss from "./cardComponentCss.css";

// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

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
  // const []

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
    // ev.stopPropagation();
    setIsLikeProperty(ev.target.checked);
    if (ev.target.checked === true) {
      onLike(_id);
      console.log(ev.target.checked);
      setIsLikeProperty(false);
    }

    // onLike(_id);
    // setIsLikeProperty(ev.target.checked);
    // console.log(ev.target.checked);
  };
  const [isLikeProperty, setIsLikeProperty] = useState(false);

  const isAdmin = useSelector((state) => state.auth.admin);
  const userEmail = useSelector((state) => state.auth.userData.email);

  // if (isAdmin === false) {
  //   if (!userEmail && window.location.pathname === "/allCards") {
  //     return (
  //       <Fragment>
  //         <div className="card-body">
  //           <div className="card ">
  //             <img
  //               className="card-img-top card-pointer"
  //               src={img}
  //               alt={description}
  //               onClick={handelCardClick}
  //             />
  //             <div className="card-body">
  //               <h5 className="card-title cardHeader">price: {price}</h5>
  //               <p className="card-text">description:{description}</p>
  //               <h5 className="card-title">City: {city}</h5>
  //               <h5 className="card-title">address: {address}</h5>
  //             </div>
  //             <div className="card-body"></div>
  //           </div>
  //         </div>
  //       </Fragment>
  //     );
  //   }
  //   if (window.location.pathname === "/allCards") {
  //     return (
  //       <Fragment>
  //         <div className="card-body">
  //           <div className="card ">
  //             <img
  //               className="card-img-top card-pointer"
  //               src={img}
  //               alt={description}
  //               onClick={handelCardClick}
  //             />
  //             <div className="card-body">
  //               <h5 className="card-title">price: {price}</h5>
  //               <p className="card-text">description:{description}</p>
  //               <h5 className="card-title">City: {city}</h5>
  //               <h5 className="card-title">address: {address}</h5>
  //               <input
  //                 type="checkbox"
  //                 className="form-check-input"
  //                 id="likePropCheckBox"
  //                 onChange={handeleLikecheckBtn}
  //                 checked={isLikeProperty}
  //               />
  //             </div>
  //             <div className="card-body"></div>
  //           </div>
  //         </div>
  //       </Fragment>
  //     );
  //   }
  //   if (window.location.pathname === "/LikedPropertyPage") {
  //     return (
  //       <Fragment>
  //         <div className="card">
  //           <img className="card-img-top" src={img} alt={description} />
  //           <div className="card-body">
  //             <h5 className="card-title">price: {price}</h5>
  //             <p className="card-text">description: {description}</p>
  //           </div>
  //           <h5 className="card-title">City: {city}</h5>

  //           <h5 className="card-title">address: {address}</h5>
  //           <div className="card-body">
  //             <button className="btn btn-warning" onClick={handeleEditeClick}>
  //               Edite
  //               <FontAwesomeIcon icon={faPenToSquare} />
  //             </button>
  //             <button
  //               className="btn btn-danger"
  //               onClick={hendeleDedleteBtnClick}
  //             >
  //               Delete <FontAwesomeIcon icon={faTrash} />
  //             </button>
  //           </div>
  //         </div>
  //       </Fragment>
  //     );
  //   }
  //   if (window.location.pathname === "/") {
  //     return (
  //       <Fragment>
  //         <div className="card">
  //           <img className="card-img-top" src={img} alt={description} />
  //           <div className="card-body">
  //             <h5 className="card-title">price: {price}</h5>
  //             <p className="card-text">description: {description}</p>
  //           </div>
  //           <h5 className="card-title">City: {city}</h5>

  //           <h5 className="card-title">address: {address}</h5>
  //           <h5 className="card-title">extra info: {extraInfo}</h5>
  //         </div>
  //       </Fragment>
  //     );
  //   }
  //   return (
  //     <Fragment>
  //       <div className="card">
  //         <img className="card-img-top" src={img} alt={description} />
  //         <div className="card-body">
  //           <h5 className="card-title">price: {price}</h5>
  //           <p className="card-text">description: {description}</p>
  //         </div>
  //         <h5 className="card-title">City: {city}</h5>

  //         <h5 className="card-title">address: {address}</h5>
  //       </div>
  //     </Fragment>
  //   );
  // }
  // if (isAdmin === true) {
  //   if (window.location.pathname === "/allCards") {
  //     return (
  //       <Fragment>
  //         <div className="card-body">
  //           <div className="card ">
  //             <img
  //               className="card-img-top card-pointer"
  //               src={img}
  //               alt={description}
  //               onClick={handelCardClick}
  //             />
  //             <div className="card-body">
  //               <h5 className="card-title">price: {price}</h5>
  //               <p className="card-text">description:{description}</p>
  //               <h5 className="card-title">City: {city}</h5>
  //               <h5 className="card-title">address: {address}</h5>
  //               <input
  //                 type="checkbox"
  //                 className="form-check-input"
  //                 id="likePropCheckBox"
  //                 onChange={handeleLikecheckBtn}
  //                 checked={isLikeProperty}
  //               />
  //             </div>
  //             <div className="card-body"></div>
  //           </div>
  //         </div>
  //       </Fragment>
  //     );
  //   }
  // }
  // if (isAdmin === true) {
  //   if (window.location.pathname === "/DashbordPage") {
  //     return (
  //       <Fragment>
  //         <div className="card ">
  //           <img
  //             className="card-img-top card-pointer"
  //             src={img}
  //             alt={description}
  //             onClick={handelCardClick}
  //           />
  //           <div className="card-body">
  //             <h5 className="card-title cardHeader">price: {price}</h5>
  //             <p className="card-text">description: {description}</p>
  //             <p className="card-text">city:{city}</p>
  //           </div>
  //           <h5 className="card-title">address: {address}</h5>
  //           <div className="card-body">
  //             <button className="btn btn-warning" onClick={handeleEditeClick}>
  //               Edite
  //               <FontAwesomeIcon icon={faPenToSquare} />
  //             </button>
  //             <button
  //               className="btn btn-danger"
  //               onClick={hendeleDedleteBtnClick}
  //             >
  //               Delete <FontAwesomeIcon icon={faTrash} />
  //             </button>
  //           </div>
  //         </div>
  //       </Fragment>
  //     );
  //   }
  // }

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////??
  ////////////////////////////////!
  // from here chnges  to minimize cards

  return (
    <div className="card  card-pointer">
      <img
        className="card-img-top"
        src={img}
        alt={description}
        onClick={handelCardClick}
      />

      <div className="card-body">
        <h5 className="card-title ">price: {price}</h5>
        <p className="card-text">description: {description}</p>
        <h5 className="card-title">City: {city}</h5>
        <h5 className="card-title">address: {address}</h5>
        {window.location.pathname === "/allCards" && isAdmin === true && (
          <input
            type="checkbox"
            className="form-check-input"
            id="likePropCheckBox"
            onChange={handeleLikecheckBtn}
            checked={isLikeProperty}
          />
        )}
        {window.location.pathname === "/allCards" &&
          isAdmin === false &&
          userEmail && (
            <input
              type="checkbox"
              className="form-check-input"
              id="likePropCheckBox"
              onChange={handeleLikecheckBtn}
              checked={isLikeProperty}
            />
          )}
        {window.location.pathname === "/LikedPropertyPage" && (
          <Fragment>
            {/* <input
                type="checkbox"
                className="form-check-input"
                id="likePropCheckBox"
                onChange={handeleLikecheckBtn}
                checked={isLikeProperty}
              /> */}
            <div className="card-body d-flex justify-content-center btnCard ">
              {/* <button
                  className="btn btn-warning "
                  onClick={handeleEditeClick}
                >
                  Edite
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button> */}
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
        <div className="card-body btnCard d-flex justify-content-around">
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
