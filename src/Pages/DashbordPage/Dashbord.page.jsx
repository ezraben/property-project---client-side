import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CardComponent from "../../Components/CardComponent/Card.component";
import SearchBarComponent from "../../Components/SearchBarComponent/SearchBar.component";
import { cloneDeep } from "lodash";
import EditPopUPComponent from "../../Components/editPropertyPopup/EditePropertyPopUp.component";
import { log } from "joi-browser";

const DashbordPage = () => {
  const [cardsArr, setCardsArr] = useState([]);
  const [dataToEdit, setDataToEdit] = useState({});
  const [showEditPopUp, setShowEditPopUp] = useState(false);
  useEffect(() => {
    getAllCards();
    console.log("use effect");
  }, [dataToEdit]);

  const handleDeleteCard = (id) => {
    //delete from cards arr(state)
    //delete from serever (database)
    axios
      .delete(`/properties/:id?${id}`)
      .then((res) => {
        let newCardsArr = cloneDeep(cardsArr);
        newCardsArr = newCardsArr.filter((item) => item._id !== id);
        setCardsArr(newCardsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleShowPopUP = (id) => {
    setShowEditPopUp(true);
    setDataToEdit(cardsArr.find((item) => item._id === id));
    console.log("dataToEdit", dataToEdit);
  };
  const handleCanceleEdit = () => {
    setShowEditPopUp(false);
  };
  const handleEditCard = (
    _id,
    price,
    description,
    address,
    upDatedProperty
  ) => {
    axios

      // .put(`/properties/:id${_id}`)
      // (url[, data[, config]]
      .put(
        // `/properties/:id?${_id}${upDatedProperty}` // `/properties/:id?${_id}${upDatedProperty}`

        // // dwon from here routh works and query params is right
        `/properties/${_id}/${price}/${description}/${address}`
        // // until from here routh works and query params is right
        // `/properties/:id:price${_id}${upDatedProperty.price}${upDatedProperty.description}${upDatedProperty.address}`
        // `/properties/:id?${_id}${upDatedProperty}`
        // `/properties/:id?${_id}${upDatedProperty}`
      )
      .then((res) => {
        // console.log("upDatedProperty", upDatedProperty);
        // console.log(res);

        let newArrOfCards = cloneDeep(cardsArr);

        let cardItemIndx = newArrOfCards.findIndex((item) => item._id === _id);
        if (cardItemIndx !== -1) {
          newArrOfCards[cardItemIndx] = { ...cloneDeep(upDatedProperty), _id };
          // console.log("upDatedProperty 22222", cardsArr);
          setCardsArr(newArrOfCards);
          toast.success("🦄 Card updated successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        console.log("upDatedProperty", upDatedProperty);
        setDataToEdit(null);
      })
      .catch((err) => {
        console.log("err from axios");
        console.log(err);
        toast("error");
      });
  };
  ///////////////////////////////////
  //from here old handele edit
  // const handleEditCard = (_id, upDatedProperty) => {
  //   axios

  //     // .put(`/properties/:id${_id}`)
  //     .put(`/properties/:id?${_id}${upDatedProperty}`)
  //     .then((res) => {
  //       let newArrOfCards = cloneDeep(cardsArr);
  //       let cardItemIndex = newArrOfCards.findIndex((item) => item._id === _id);
  //       if (cardItemIndex !== -1) {
  //         newArrOfCards[cardItemIndex] = { ...cloneDeep(upDatedProperty), _id };
  //         setCardsArr(newArrOfCards);
  //       }
  //       setDataToEdit(null);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  ///////////////////////////////////
  //until here old handele edit

  const getAllCards = () => {
    axios
      .get("/properties")
      .then((res) => {
        // console.log(" from axios", res.data[0]);
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
  };

  const renderRowsFromArr = (arrOfItems) => {
    /*
        renderRowsFromArr will recive array of property cards
        and will create html elms to display the  property cards
        in the page
    */
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
            onDelete={handleDeleteCard}
            onEdit={handleShowPopUP}
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
        <h1 className="noCardMsg">
          your cards will show up here after you create them
        </h1>
      )}
      {renderRowsFromArr(cardsArr)}
      {showEditPopUp && (
        <EditPopUPComponent
          onEditCancel={handleCanceleEdit}
          onEditDone={handleEditCard}
          {...dataToEdit}
        />
      )}

      {/* {showTheEditPopUp && (
          <EditCardComponent
            onCancel={handeleCancelEdite}
            onEditDone={handleEditCard}
            {...dataToEdit}
          />
        )} */}
    </div>
  );
};

export default DashbordPage;
