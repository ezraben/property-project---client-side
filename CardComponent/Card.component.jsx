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
  address,
  img,
  _id,
  onDelete,
  onEdit,
  onLike,
}) => {
  // const history = useHistory();
  // const dispatch = useDispatch();

  // dispatch(authActions.upDateIsAllCardPage(true));
  const hendeleDedleteBtnClick = () => {
    onDelete(_id);
  };
  const handeleEditeClick = () => {
    onEdit(_id);
  };
  const handeleLikecheckBtn = (ev) => {
    onLike(_id);
    // if (isLikeProperty === false) {
    //   setIsLikeProperty(false);
    // }

    setIsLikeProperty(ev.target.checked);
    console.log(ev.target.checked);
  };
  const [isLikeProperty, setIsLikeProperty] = useState(false);

  const isAdmin = useSelector((state) => state.auth.admin);

  // const isAllCardPage = useSelector((state) => state.auth.allCardPage);

  if (isAdmin === false) {
    if (window.location.pathname === "/allCards") {
      return (
        <Fragment>
          <div className="card">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{price}</h5>
              <p className="card-text">{description}</p>
              <input
                type="checkbox"
                className="form-check-input"
                id="likePropCheckBox"
                onChange={handeleLikecheckBtn}
                checked={isLikeProperty}
                // style={{ display: "none" }}
              />
            </div>

            <h5 className="card-title">{address}</h5>
            <div className="card-body">
              {/* <button className="btn btn-warning" onClick={handeleEditeClick}>
              Edite
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="btn btn-danger" onClick={hendeleDedleteBtnClick}>
              Delete <FontAwesomeIcon icon={faTrash} />
            </button> */}
            </div>
          </div>
        </Fragment>
      );
    }
    if (window.location.pathname === "/LikedPropertyPage") {
      return (
        <Fragment>
          <div className="card">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{price}</h5>
              <p className="card-text">{description}</p>
              {/* <input
              type="checkbox"
              // ref={checkBoxRef}
              className="form-check-input"
              id="likePropCheckBox"
              onChange={handeleLikecheckBtn}
              checked={isLikeProperty}
              style={{ display: "none" }}
            /> */}
              <h1>hhh</h1>
            </div>

            <h5 className="card-title">{address}</h5>
            <div className="card-body">
              <button className="btn btn-warning" onClick={handeleEditeClick}>
                Edite
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                className="btn btn-danger"
                onClick={hendeleDedleteBtnClick}
              >
                Delete <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className="card">
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{price}</h5>
            <p className="card-text">{description}</p>
            {/* <input
              type="checkbox"
              // ref={checkBoxRef}
              className="form-check-input"
              id="likePropCheckBox"
              onChange={handeleLikecheckBtn}
              checked={isLikeProperty}
              style={{ display: "none" }}
            /> */}
          </div>

          <h5 className="card-title">{address}</h5>
          <div className="card-body">
            {/* <button className="btn btn-warning" onClick={handeleEditeClick}>
              Edite
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="btn btn-danger" onClick={hendeleDedleteBtnClick}>
              Delete <FontAwesomeIcon icon={faTrash} />
            </button> */}
          </div>
        </div>
      </Fragment>
    );
  }
  if (isAdmin === true) {
    if (window.location.pathname === "/allCards") {
      return (
        <Fragment>
          <div className="card">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{price}</h5>
              <p className="card-text">{description}</p>
              <input
                type="checkbox"
                className="form-check-input"
                id="likePropCheckBox"
                onChange={handeleLikecheckBtn}
                checked={isLikeProperty}
                // style={{ display: "none" }}
              />
            </div>

            <h5 className="card-title">{address}</h5>
            <div className="card-body">
              {/* <button className="btn btn-warning" onClick={handeleEditeClick}>
              Edite
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="btn btn-danger" onClick={hendeleDedleteBtnClick}>
              Delete <FontAwesomeIcon icon={faTrash} />
            </button> */}
            </div>
          </div>
        </Fragment>
      );
    }
  }

  return (
    <div className="card">
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{price}</h5>
        <p className="card-text">{description}</p>
        {/* <input
          type="checkbox"
          className="form-check-input"
          id="likePropCheckBox"
          onChange={handeleLikecheckBtn}
          checked={isLikeProperty}
          ref={checkBoxRef}
          // style={{ display: "none" }}
        /> */}
      </div>

      <h5 className="card-title">{address}</h5>
      <div className="card-body">
        <button className="btn btn-warning" onClick={handeleEditeClick}>
          Edite
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className="btn btn-danger" onClick={hendeleDedleteBtnClick}>
          Delete <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
///////////////////////////////////////////////////////////////////////////
//from here befor working on liked property
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// // import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// const CardComponent = ({
//   price,
//   description,
//   address,
//   _id,
//   onDelete,
//   onEdit,
// }) => {
//   const hendeleDedleteBtnClick = () => {
//     onDelete(_id);
//   };
//   const handeleEditeClick = () => {
//     onEdit(_id);
//   };
//   return (
//     <div className="card">
//       <img className="card-img-top" src="..." alt="Card image cap" />
//       <div className="card-body">
//         <h5 className="card-title">{price}</h5>
//         <p className="card-text">{description}</p>
//         <input
//           type="checkbox"
//           className="form-check-input"
//           id="likePropCheckBox"
//           // onChange={handelCheckButton}
//           // checked={likePropety}
//         />
//       </div>

//       <h5 className="card-title">{address}</h5>
//       <div className="card-body">
//         <button className="btn btn-warning" onClick={handeleEditeClick}>
//           Edite
//           <FontAwesomeIcon icon={faPenToSquare} />
//         </button>
//         <button className="btn btn-danger" onClick={hendeleDedleteBtnClick}>
//           Delete <FontAwesomeIcon icon={faTrash} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardComponent;
///////////////////////////////////////////////////////////////////////////
//until here befor working on liked property
