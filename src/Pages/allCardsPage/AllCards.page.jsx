import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { cloneDeep } from "lodash";
import CardComponent from "../../Components/CardComponent/Card.component";
import SearchBarComponent from "../../Components/SearchBarComponent/SearchBar.component";
import LikedPropertyComponent from "../../Components/likedPropertyComponent/LikedProperty.component";
import FilterdPropertyPage from "../filterdPropertyPage/FilterdProperty.page";

const AllCardPage = () => {
  const [cardsArr, setCardsArr] = useState([]);
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [price, setPrice] = useState();
  // const [searchBtnName, setsearchBtnName] = useState("Search");
  const handeleCityChange = (ev) => {
    setCity(ev.target.value);
  };
  const handeleminPriceChange = (ev) => {
    setMinPrice(ev.target.value);
  };
  const handeleMaxPriceChange = (ev) => {
    setMaxPrice(ev.target.value);
  };
  // const handleSerachBtnName = (ev) => {
  //   setsearchBtnName("back to cards");
  // };

  //   const [dataToEdit, setDataToEdit] = useState(null);
  const [likedPropertyId, setLikedPropertyId] = useState(null);
  // const [showEditPopUp, setShowEditPopUp] = useState(false);
  const [showLikedPropertyPopUp, setShowLikedPropertyPopUp] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const [id, set_id] = useState();

  const history = useHistory();

  useEffect(() => {
    getAllCards();
  }, [likedPropertyId]);
  const getCardsByCity = () => {
    if (city.length === 0) {
      getAllCards();
    }

    axios
      .post("/properties/filterByCity", { city })
      .then((res) => {
        setCardsArr(res.data);
        console.log(cardsArr);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  };
  const getCardsByMinPrice = () => {
    if (minPrice.length === 0) {
      getAllCards();
    }

    axios
      .post("/properties/filterByMinPrice", { minPrice })
      .then((res) => {
        setCardsArr(res.data);
        console.log(cardsArr);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  };
  const getCardsByMaxPrice = () => {
    if (maxPrice.length === 0) {
      getAllCards();
    }

    axios
      .post("/properties/filterByMaxPrice", { maxPrice })
      .then((res) => {
        setCardsArr(res.data);
        console.log(cardsArr);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  };

  const handleShowLikedPopUP = (id) => {
    setShowLikedPropertyPopUp(true);
    let ktemp = cloneDeep(cardsArr.find((item) => item._id === id));
    setLikedPropertyId(ktemp);

    setLikedPropertyId(
      cardsArr.find((item) => item._id === id),
      userData.email
    );
  };

  const getCardId = (id) => {
    let card = cardsArr.find((item) => item._id === id);
    setPrice(card.price);

    let cardId = card._id;

    set_id(cardId);
    if (id) {
      history.push("/SpecificPropertyPage", { id: id });
    }
  };

  const handleCanceleLike = () => {
    setShowLikedPropertyPopUp(false);
  };

  const handleLikeCard = (_id) => {
    axios
      .get(`properties/likedProperties/${_id.id}`)

      .then((res) => {
        console.log("_id, and email from dashbord", _id);
        toast.success("🦄 woop woop you just licked this property", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        console.log("likedPropertyId", likedPropertyId);

        axios
          .post(
            `/properties/addLikedPropertyId?id=${_id.id}&email=${_id.email}`
          )
          .then(({ data }) => {
            console.log("dataaaa", data, "idddddd0", _id);
          })

          .catch((err) => {
            console.log(" err from axios", err);
          });

        setShowLikedPropertyPopUp(false);

        setLikedPropertyId(null);
      })
      .catch((err) => {
        console.log(err);
        console.log("calllll axios arror");
        toast("error");
      });
  };

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
  };

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
            onSeeProperty={getCardId}
            // onDelete={handleDeleteCard}
            // onEdit={handleShowPopUP}
            onLike={handleShowLikedPopUP}
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
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search by city"
        aria-label="Search"
        onChange={handeleCityChange}
        value={city}
      />

      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={getCardsByCity}
      >
        Search
      </button>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter options
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by min Price"
            aria-label="Search"
            onChange={handeleminPriceChange}
            value={minPrice}
          />

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={getCardsByMinPrice}
          >
            Search
          </button>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by max Price"
            aria-label="Search"
            onChange={handeleMaxPriceChange}
            value={maxPrice}
          />

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={getCardsByMaxPrice}
          >
            Search
          </button>
        </div>
      </div>

      <h1> all card page</h1>
      {cardsArr.length === 0 && <h1 className="noCardMsg">no Properties </h1>}
      {renderRowsFromArr(cardsArr)}
      {/* {showEditPopUp && (
        <EditPopUPComponent
        //   onEditCancel={handleCanceleEdit}
        //   onEditDone={handleEditCard}
        //   {...dataToEdit}
        />
      )} */}
      {showLikedPropertyPopUp && (
        <LikedPropertyComponent
          onLikeCancel={handleCanceleLike}
          onLikeDone={handleLikeCard}
          {...likedPropertyId}

          // {...dataToEdit}
        />
      )}
    </div>
  );
};

export default AllCardPage;
//////////////////////////
///////////////////////
// beffor adding filyerd cards
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { cloneDeep } from "lodash";
// import CardComponent from "../../Components/CardComponent/Card.component";
// import SearchBarComponent from "../../Components/SearchBarComponent/SearchBar.component";
// import LikedPropertyComponent from "../../Components/likedPropertyComponent/LikedProperty.component";
// import FilterdPropertyPage from "../filterdPropertyPage/FilterdProperty.page";

// const AllCardPage = () => {
//   const [cardsArr, setCardsArr] = useState([]);

//   //   const [dataToEdit, setDataToEdit] = useState(null);
//   const [likedPropertyId, setLikedPropertyId] = useState(null);
//   // const [showEditPopUp, setShowEditPopUp] = useState(false);
//   const [showLikedPropertyPopUp, setShowLikedPropertyPopUp] = useState(false);
//   const userData = useSelector((state) => state.auth.userData);
//   // const [_id, set_id] = useState({});

//   useEffect(() => {
//     getAllCards();
//   }, [likedPropertyId]);

//   const handleShowLikedPopUP = (id) => {
//     setShowLikedPropertyPopUp(true);
//     let ktemp = cloneDeep(cardsArr.find((item) => item._id === id));
//     setLikedPropertyId(ktemp);
//     console.log("ktemp", ktemp);
//     setLikedPropertyId(
//       cardsArr.find((item) => item._id === id),
//       userData.email
//     );
//   };
//   const handleCanceleLike = () => {
//     setShowLikedPropertyPopUp(false);
//   };

//   const handleLikeCard = (_id) => {
//     axios
//       .get(`properties/likedProperties/${_id.id}`)

//       .then((res) => {
//         console.log("_id, and email from dashbord", _id);
//         toast.success("🦄 woop woop you just licked this property", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });

//         console.log("likedPropertyId", likedPropertyId);

//         axios
//           .post(
//             `/properties/addLikedPropertyId?id=${_id.id}&email=${_id.email}`
//           )
//           .then(({ data }) => {
//             console.log("dataaaa", data, "idddddd0", _id);
//           })

//           .catch((err) => {
//             console.log(" err from axios", err);
//           });

//         setShowLikedPropertyPopUp(false);

//         setLikedPropertyId(null);
//       })
//       .catch((err) => {
//         console.log(err);
//         console.log("calllll axios arror");
//         toast("error");
//       });
//   };

//   const getAllCards = () => {
//     axios
//       .get(`/properties/allCards`)

//       .then((res) => {
//         setCardsArr(res.data);
//       })
//       .catch((err) => {
//         console.log("axios error", err);
//         toast.error("cannot get cards", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//     // }
//   };
//   ////////////////
//   /////////

//   const renderRowsFromArr = (arrOfItems) => {
//     let newArr = [];
//     let inArr = [];
//     let l = arrOfItems.length;
//     for (let i = 0; i < l; i++) {
//       if (i > 0 && i % 3 === 0) {
//         newArr = [
//           ...newArr,
//           <div className="row" key={i + "cards row"}>
//             {[...inArr]}
//           </div>,
//         ];
//         inArr = [];
//       }
//       inArr = [
//         ...inArr,

//         <div key={arrOfItems[i]._id} className="col col-lg-4 ">
//           <CardComponent
//             key={arrOfItems[i]._id + "_child"}
//             {...arrOfItems[i]}
//             // onDelete={handleDeleteCard}
//             // onEdit={handleShowPopUP}
//             onLike={handleShowLikedPopUP}
//           />
//         </div>,
//       ];
//     }
//     if (inArr.length > 0) {
//       newArr = [
//         ...newArr,
//         <div className="row" key={l + "cards row"}>
//           {[...inArr]}
//         </div>,
//       ];
//     }
//     return newArr;
//   };
//   return (
//     <div className="topSpaceFromNav">

//       {/* <SearchBarComponent /> */}
//       <h1> all card page</h1>
//       {cardsArr.length === 0 && (
//         <h1 className="noCardMsg">no cards are created yet</h1>
//       )}
//       {renderRowsFromArr(cardsArr)}
//       {/* {showEditPopUp && (
//         <EditPopUPComponent
//         //   onEditCancel={handleCanceleEdit}
//         //   onEditDone={handleEditCard}
//         //   {...dataToEdit}
//         />
//       )} */}
//       {showLikedPropertyPopUp && (
//         <LikedPropertyComponent
//           onLikeCancel={handleCanceleLike}
//           onLikeDone={handleLikeCard}
//           {...likedPropertyId}

//           // {...dataToEdit}
//         />
//       )}
//     </div>
//   );
// };

// export default AllCardPage;
//////////////////////////
///////////////////////
// until here beffor adding filyerd cards
