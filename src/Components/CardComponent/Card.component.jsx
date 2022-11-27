import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({ price, description, address }) => {
  return (
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{price}</h5>
        <p className="card-text">{description}</p>
      </div>

      <h5 className="card-title">{address}</h5>
      <div className="card-body">
        <button className="btn btn-warning">
          Edite
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className="btn btn-danger">
          Delete <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
