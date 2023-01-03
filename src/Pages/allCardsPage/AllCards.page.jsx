import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import CardComponent from "../../Components/CardComponent/Card.component";
import SearchBarComponent from "../../Components/SearchBarComponent/SearchBar.component";

const AllCardPage = () => {
  const [cardsArr, setCardsArr] = useState([]);

  //   const [dataToEdit, setDataToEdit] = useState(null);
  //   const [likedPropertyId, setLikedPropertyId] = useState(null);
  //   const [showEditPopUp, setShowEditPopUp] = useState(false);
  //   const [showLikedPropertyPopUp, setShowLikedPropertyPopUp] = useState(false);
  //   const userData = useSelector((state) => state.auth.userData);
  //   const [_id, set_id] = useState({});

  useEffect(() => {
    getAllCards();
    // console.log("use effect");
  }, []);

  const getAllCards = () => {
    axios
      .get(`/properties/allCards`)

      .then((res) => {
        setCardsArr(res.data);
      })
      .catch((err) => {
        console.log("axios error", err);
        toast.error("cannot get cards", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    // }
  };
  ////////////////
  /////////

  const renderRowsFromArr = (arrOfItems) => {
    let newArr = [];
    let inArr = [];
    let l = arrOfItems.length;
    for (let i = 0; i < l; i++) {
      if (i > 0 && i % 3 === 0) {
        newArr = [
          ...newArr,
          <div className="row" key={i + "cards row"}>
            {[...inArr]}
          </div>,
        ];
        inArr = [];
      }
      inArr = [
        ...inArr,

        <div key={arrOfItems[i]._id} className="col col-lg-4 ">
          <CardComponent
            key={arrOfItems[i]._id + "_child"}
            {...arrOfItems[i]}
            // onDelete={handleDeleteCard}
            // onEdit={handleShowPopUP}
            // onLike={handleShowLikedPopUP}
          />
        </div>,
      ];
    }
    if (inArr.length > 0) {
      newArr = [
        ...newArr,
        <div className="row" key={l + "cards row"}>
          {[...inArr]}
        </div>,
      ];
    }
    return newArr;
  };
  return (
    <div className="topSpaceFromNav">
      {/* <SearchBarComponent /> */}
      <h1> Your Dashboard</h1>
      {cardsArr.length === 0 && (
        <h1 className="noCardMsg">no cards are created yet</h1>
      )}
      {renderRowsFromArr(cardsArr)}
      {/* {showEditPopUp && (
        <EditPopUPComponent
        //   onEditCancel={handleCanceleEdit}
        //   onEditDone={handleEditCard}
        //   {...dataToEdit}
        />
      )} */}
      {/* {showLikedPropertyPopUp && (
        <LikedPropertyComponent
        //   onLikeCancel={handleCanceleLike}
        //   onLikeDone={handleLikeCard}
        //   {...likedPropertyId}

          // {...dataToEdit}
        />
      )} */}
    </div>
  );
};

export default AllCardPage;
