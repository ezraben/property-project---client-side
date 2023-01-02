import SearchBarComponent from "../SearchBarComponent/SearchBar.component";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import CardComponent from "../CardComponent/Card.component";

const FilterdPropertyByPrice = () => {
  const [price, setPrice] = useState("");
  const [cardsArr, setCardsArr] = useState([]);
  const handelePriceChange = (ev) => {
    setPrice(ev.target.value);
  };
  useEffect(() => {
    // getAllCards();
    console.log("use effect");
  }, []);
  const getFilterdCrads = () => {
    axios
      .post("/properties/filterByPrice", { price })
      .then((res) => {
        setCardsArr(res.data);
        console.log(cardsArr);
      })
      .catch((err) => {
        console.log("err from axios", err);
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
    <div>
      {/* <form onSubmit={handelSubmit}> */}
      <h1>Filter Propety buy max price</h1>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handelePriceChange}
        value={price}
      />
      {/* <h1>{test}</h1> */}
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={getFilterdCrads}
      >
        Search
      </button>
      {/* </form> */}
      {renderRowsFromArr(cardsArr)}
      {cardsArr.length === 0 && (
        <h1 className="noCardMsg">
          your cards will show up here after you create them, if you created
          them already make sure you search from 400,000
        </h1>
      )}
      {/* {cardsArr.length > 0 &&  (
        <h1 className="noCardMsg">
          your cards will show up here after you create them
        </h1>
      )} */}
    </div>
  );
};

export default FilterdPropertyByPrice;
