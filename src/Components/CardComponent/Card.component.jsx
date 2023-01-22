import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, Fragment } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
import { cloneDeep } from "lodash";
import { useEffect } from "react";
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
  isCardLicked,
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
  const handeleLoadCard = () => {
    isCardLicked(_id);
  };
  console.log("_id", _id);
  const handeleLikecheckBtn = (ev) => {
    setIsLikeProperty(ev.target.checked);
    if (ev.target.checked === true) {
      onLike(_id);
      console.log(ev.target.checked);
      setIsLikeProperty(true);
    }
  };
  // const handleMsgesForLickedCrads = () => {
  //   log;
  // };
  const [isLikeProperty, setIsLikeProperty] = useState(false);
  const [cardsArr, setCardsArr] = useState([]);
  const [allLickedPropertiesByUser, setAllLickedPropertiesByUser] = useState(
    []
  );
  const [cardMsgLike, setCardMsgLike] = useState(false);
  const handleCardsMsglike = () => {
    setCardMsgLike(true);
  };

  const isAdmin = useSelector((state) => state.auth.admin);
  const userEmail = useSelector((state) => state.auth.userData.email);

  ////////////////////////////////////////////
  //vfrfom heer adding all cards and licked cards
  useEffect(() => {
    getAllCards();
    handleLickedCards();
  }, []);
  const handleLickedCards = () => {
    console.log("userEmail", userEmail);
    axios
      .get(`/properties/lickedPropertiesByUser?email=${userEmail}`)
      .then((data) => {
        console.log("data", data);
        if (data.data.length > 0) {
          const idesToSet = data.data.map((obj) => obj._id);
          let newArrOfCards = cloneDeep(idesToSet);

          // console.log("newArrOfCards", newArrOfCards);
          cloneDeep(newArrOfCards);

          setAllLickedPropertiesByUser([...newArrOfCards]);
        }
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  };
  console.log("allLikedBuyUser", allLickedPropertiesByUser);

  const getAllCards = () => {
    axios
      .get(`/properties/allCards`)

      .then((res) => {
        setCardsArr(res.data);
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  };

  const checkIfCardsIsLicked = () => {
    cardsArr.filter(
      (allLickedPropertiesByUser) => cardsArr._id === allLickedPropertiesByUser
    );
  };
  checkIfCardsIsLicked();
  if (_id === allLickedPropertiesByUser) {
    console.log("allLickedPropertiesByUser fro cards compont");
  }
  // console.log("allLickedPropertiesByUser", allLickedPropertiesByUser);
  // console.log('cardsArr',cardsArr);

  return (
    <div onLoad={handeleLoadCard} className="card  card-pointer">
      <img
        className="card-img-top "
        src={img}
        alt={description}
        onClick={handelCardClick}
      />
      {allLickedPropertiesByUser.map((item) => item === _id && <h1>like</h1>)}
      {/* {allLickedPropertiesByUser.filter(
        (cardsArr) => allLickedPropertiesByUser._id === cardsArr
      ) && <h1>licked</h1>} */}
      {cardMsgLike === true && <h3>this property is licked</h3>}

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
