import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardComponent from "../../Components/CardComponent/Card.component";
import { cloneDeep } from "lodash";
import { object } from "joi";

const LikedPropertyPage = () => {
  const userData = useSelector((state) => state.auth.userData);
  const userTest = useSelector((state) => state.auth.userData);
  const [cardsArr, setCardsArr] = useState([]);
  const [_id, setIdes] = useState();
  const [secondApiTriger, setSecondApiTriger] = useState([]);
  // const [test, setTest] = useState([])
  //////////////////////
  /////////////////
  //handel
  // const handleLickedCards = () => {
  //   axios
  //     .get(`/properties/lickedPropertiesByUser?email=${userData.email}`)
  //     .then((data) => {
  //       const idesToSet = data.data.map((id) => id);
  //       setIdes(idesToSet);
  //       console.log("_idddd", _id);

  //       // setCardsArr(data.data)
  //       setSecondApiTriger(data.data);
  //     })
  //     .catch((err) => {
  //       console.log("err from axios", err);
  //     });
  // };
  //////////////////////
  /////////////////
  //handel
  const arrTest = [];
  // if (secondApiTriger.length > 0) {
  // for (let i = 0; i < secondApiTriger.length; i++) {
  const functTest = () => {
    axios
      .get(`/properties/getLickedPropertiesById?id=${_id}`)
      .then((res) => {
        console.log("res.data", res.data);
        setCardsArr(res.data);

        // arrTest.push(res.data[0]);
        // setCardsArr([...arrTest, res.data[0]]);
        //console.log("res data", res);
        // console.log("arrTest", [i], arrTest);
        // console.log("arrTest,length", arrTest.length);
      })
      .catch((err) => {
        console.log("err", err);
      });
    // }
    console.log("arrtestttttttttt length", arrTest[0]);
    console.log("arrTEst", arrTest);
  };
  // const mpp1 = arrTest.map((item) => {
  //   console.log("item.price", item.price);

  // });
  // }
  //setCardsArr(arrTest);
  // console.log("arrTest", arrTest);

  // console.log("cardsArr", cardsArr);

  return (
    <div>
      <h1>LikedPropertyPage</h1>
      <ul>
        {/* {cardsArr.map((object, index) => (
          <li key={index}>
            <p>Name: {object.price}</p>
          </li>
        ))} */}
      </ul>
      {/* <button onClick={handleLickedCards}>see your licked property</button> */}
      <button onClick={functTest}>functTest</button>

      {
        /* <h1>{cardsArr}</h1>h1 */
        //////////////////
        //from here shows on secreen buy meny rewnderws
        <div>
          {cardsArr.map((item) => (
            <div key={item.id}>
              {item.price}
              {item.description}
              {item.address}
            </div>
          ))}
        </div>
        //////////////////
        //until here shows on secreen buy meny rewnderws
      }
    </div>
  );
};

export default LikedPropertyPage;
