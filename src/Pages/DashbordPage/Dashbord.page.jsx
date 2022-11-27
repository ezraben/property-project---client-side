import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CardComponent from "../../Components/CardComponent/Card.component";
import SearchBarComponent from "../../Components/SearchBarComponent/SearchBar.component";

const DashbordPage = () => {
  const [cardsArr, setCardsArr] = useState([]);
  useEffect(() => {
    getAllCards();
    console.log("use effect");
  }, []);

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
            // onDelete={handleDeleteCard}
            // onEdit={showEditPopUp}
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
      {renderRowsFromArr(cardsArr)}{" "}
      {/* {showTheEditPopUp && (
          <EditCardComponent
            onCancel={handeleCancelEdite}
            onEditDone={hendeleEditCard}
            {...dataToEdite}
          />
        )} */}
    </div>
  );
};

export default DashbordPage;
