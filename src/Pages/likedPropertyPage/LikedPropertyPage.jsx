import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardComponent from "../../Components/CardComponent/Card.component";
import { cloneDeep } from "lodash";

const LikedPropertyPage = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [cardsArr, setCardsArr] = useState([]);

  const handleLickedCards = () => {
    axios
      .get(`/properties/lickedPropertiesByUser?email=${userData.email}`)
      .then((data) => {
        // setCardsArr(data.data);

        if (data.data.length > -1) {
          let arr = [];
          for (let i = 0; i < data.data.length; i++) {
            axios
              .get(`/properties/getLickedPropertiesById?id=${data.data[i]}`)
              .then((res) => {
                arr.push(res.data);
                console.log("arrToSendToReact", arr);
                setCardsArr(...arr);

                console.log("resss", res.data);
              })
              .catch((err) => {
                console.log("err", err);
              });
          }
          console.log("arr", arr);

          console.log("updated cards arr", cardsArr);
        }
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  };
  return (
    <div>
      <h1>LikedPropertyPage</h1>
      <button onClick={handleLickedCards}>see your licked property</button>
    </div>
  );
};

export default LikedPropertyPage;
