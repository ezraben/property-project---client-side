import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({
  price,
  description,
  address,
  _id,
  onDelete,
  onEdit,
  onLike,
}) => {
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
  return (
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{price}</h5>
        <p className="card-text">{description}</p>
        <input
          type="checkbox"
          className="form-check-input"
          id="likePropCheckBox"
          onChange={handeleLikecheckBtn}
          checked={isLikeProperty}
        />
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
