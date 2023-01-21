import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { cloneDeep } from "lodash";
import CardComponent from "../../Components/CardComponent/Card.component";
// import SearchBarComponent from "../../Components/SearchBarComponent/SearchBar.component";
import LikedPropertyComponent from "../../Components/likedPropertyComponent/LikedProperty.component";
import FilterdPropertyPage from "../filterdPropertyPage/FilterdProperty.page";
import allCardsCss from "./allCardsCss.css";

const AllCardPage = () => {
  const [cardsArr, setCardsArr] = useState([]);
  const [allLickedPropertiesByUser, setAllLickedPropertiesByUser] = useState(
    []
  );
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [price, setPrice] = useState();
  const [filters, setFilters] = useState(false);
  const [likedPropertyId, setLikedPropertyId] = useState(null);

  const handeleCityChange = (ev) => {
    setCity(ev.target.value);
  };
  const handleShowFilters = (ev) => {
    setFilters(true);
  };
  const handleCloseFilter = (ev) => {
    setFilters(false);
    getAllCards();
  };
  const handeleminPriceChange = (ev) => {
    setMinPrice(ev.target.value);
  };
  const handeleMaxPriceChange = (ev) => {
    setMaxPrice(ev.target.value);
  };
  // const handleAllLikedCardsByUser = (arr) => {
  //   setAllLickedPropertiesByUser(arr);
  // };

  const [showLikedPropertyPopUp, setShowLikedPropertyPopUp] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const [id, set_id] = useState();

  const history = useHistory();

  useEffect(() => {
    getAllCards();
    handleLickedCards();
  }, [likedPropertyId]);
  useEffect(() => {}, []);
  const getCardsByCity = () => {
    if (city.length === 0) {
      getAllCards();
    }

    axios
      .post("/properties/filterByCity", { city })
      .then((res) => {
        setCardsArr(res.data);
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

        setMinPrice("");
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

        setMaxPrice("");
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
        toast.success("🦄 woop woop you just licked this property", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        axios
          .post(
            `/properties/addLikedPropertyId?id=${_id.id}&email=${_id.email}`
          )
          .then(({ data }) => {})

          .catch((err) => {
            console.log(" err from axios", err);
          });

        setShowLikedPropertyPopUp(false);

        setLikedPropertyId(null);
      })
      .catch((err) => {
        console.log("err from axios", err);

        toast("error");
      });
  };
  ////////////////////////////////////

  const handleLickedCards = () => {
    axios
      .get(`/properties/lickedPropertiesByUser?email=${userData.email}`)
      .then((data) => {
        if (data.data.length > 0) {
          const idesToSet = data.data.map((obj) => obj._id);
          let newArrOfCards = cloneDeep(idesToSet);

          // console.log("newArrOfCards", newArrOfCards);
          cloneDeep(newArrOfCards);

          setAllLickedPropertiesByUser([...newArrOfCards]);

          // console.log("allLickedPropertiesByUser", allLickedPropertiesByUser);
        }
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  };
  console.log("allLickedPropertiesByUser", allLickedPropertiesByUser);

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
  ///////////////////////////////
  //before adding licked cards to all cards

  // const getAllCards = () => {
  //   axios
  //     .get(`/properties/allCards`)

  //     .then((res) => {
  //       setCardsArr(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("axios error", err);
  //       toast.error("cannot get cards", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     });
  // };
  ///////////////////////////////
  // until here before adding licked cards to all cards

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
    <div className="topSpaceFromNav ">
      <div className="d-flex space-between mb-1">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by city"
          aria-label="Search"
          onChange={handeleCityChange}
          value={city}
        />

        <button
          className="btn btn-outline-success my-2 my-sm-0 "
          type="submit"
          onClick={getCardsByCity}
        >
          Search
        </button>
      </div>
      {filters === false && (
        <button
          className="btn-danger btnCenter "
          type="submit"
          onClick={handleShowFilters}
        >
          Filter options
        </button>
      )}

      {filters === true && (
        <div className="filters ">
          <button
            className="btn btn-danger my-2 my-sm-0 "
            onClick={handleCloseFilter}
          >
            close filters
          </button>
          <div className="d-flex justify-content-around  ">
            <input
              className="form mr-sm-2 priceInput"
              type="search"
              placeholder="Search by min price"
              aria-label="Search"
              onChange={handeleminPriceChange}
              value={minPrice}
            />
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-success my-2 my-sm-0  "
                type="submit"
                onClick={getCardsByMinPrice}
                value={minPrice}
              >
                Filter
              </button>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={getCardsByMinPrice}
              >
                Refresh
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <input
              className="form-control mr-sm-2 priceInput"
              type="search"
              placeholder="Search by max Price"
              aria-label="Search"
              onChange={handeleMaxPriceChange}
              value={maxPrice}
            />
            <div className="d-flex justify-content-around">
              <button
                className="btn btn-success my-2 my-sm-0"
                type="submit"
                onClick={getCardsByMaxPrice}
              >
                Filter
              </button>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={getCardsByMaxPrice}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="mb-5"> All card page</h1>
      {cardsArr.length === 0 && <h1 className="noCardMsg">no Properties </h1>}
      {renderRowsFromArr(cardsArr)}
      {showLikedPropertyPopUp && (
        <LikedPropertyComponent
          onLikeCancel={handleCanceleLike}
          onLikeDone={handleLikeCard}
          {...likedPropertyId}
        />
      )}
    </div>
  );
};

export default AllCardPage;
