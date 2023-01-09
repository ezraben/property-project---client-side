import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import CardComponent from "../../Components/CardComponent/Card.component";
import { cloneDeep } from "lodash";
import { object } from "joi";

const LikedPropertyPage = () => {
  const userData = useSelector((state) => state.auth.userData);
  const userTest = useSelector((state) => state.auth.userData);
  const [cardsArr, setCardsArr] = useState([]);
  const [_id, setIdes] = useState({});
  useEffect(() => {
    handleLickedCards();

    console.log("use effect");
  }, []);
  console.log("user daattata", userData);
  const arrTest = [];

  const handleLickedCards = () => {
    console.log("hhhh");
    axios
      .get(`/properties/lickedPropertiesByUser?email=${userData.email}`)
      .then((data) => {
        if (data.data.length > 0) {
          console.log("data.data", data.data);
          const idesToSet = data.data.map((id) => id);
          console.log("idesToSet", idesToSet);

          setCardsArr(idesToSet);

          console.log("cardsdaArr", cardsArr);

          console.log("can you idd", _id);
        }
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  };

  const removeLIckedProperty = (id) => {
    axios

      .put(`/properties/removeFavoriteProp/:?id=${id}&email=${userData.email}`)
      .then(() => {
        let newCardsArr = cloneDeep(cardsArr);
        newCardsArr = newCardsArr.filter((item) => item._id !== id);
        setCardsArr(newCardsArr);
        toast.success(
          "🦄 the property was removed successfully from your licked properties",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const hendleSeeProperty = (ev) => {
    console.log("hendleSeeProperty");
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
            onDelete={removeLIckedProperty}
            onEdit={hendleSeeProperty}
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
    <div>
      <h1>LikedPropertyPage</h1>
      {cardsArr.length === 0 && (
        <h1 className="noCardMsg">
          your cards will show up here after you create them
        </h1>
      )}
      {renderRowsFromArr(cardsArr)}
    </div>
  );
};

export default LikedPropertyPage;
