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
          // arrTest.push(idesToSet);
          // setCardsArr(data.data);
          setCardsArr(idesToSet);
          // setIdes(idesToSet);
          console.log("cardsdaArr", cardsArr);

          console.log("can you idd", _id);
        }
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  };
  // console.log("arrTest", arrTest[0]);

  // const functTest = () => {
  //   for (let i = 0; i < _id.length; i++) {
  //     axios
  //       .get(`/properties/getLickedPropertiesById?&id=${_id[i]}`)
  //       .then((res) => {
  //         console.log(_id[i]);
  //         console.log("idddddddd", _id);
  //         console.log("res.data", res.data);
  //         arrTest.push(res.data[0]);
  //         console.log("arrTest", arrTest);
  //       })
  //       .catch((err) => {
  //         console.log("err", err);
  //       });
  //   }
  //   setCardsArr(arrTest);
  //   console.log("cardsArr", cardsArr);
  //   renderRowsFromArr();
  // };

  // const mpp1 = arrTest.map((item) => {
  //   console.log("item.price", item.price);

  // });
  // }
  //setCardsArr(arrTest);
  // console.log("arrTest", arrTest);

  // console.log("cardsArr", cardsArr);
  const removeLIckedProperty = (id) => {
    axios
      // .put(`/properties/removeFavoriteProp`)
      .put(`/properties/removeFavoriteProp/:?id=${id}&email=${userData.email}`)
      .then(() => {
        let newCardsArr = cloneDeep(cardsArr);
        newCardsArr = newCardsArr.filter((item) => item._id !== id);
        setCardsArr(newCardsArr);
        console.log("id in react", id);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const hendleSeeProperty = (ev) => {
    console.log("hendleSeeProperty");
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
      {cardsArr.length === 0 && (
        <h1 className="noCardMsg">
          your cards will show up here after you create them
        </h1>
      )}
      {renderRowsFromArr(cardsArr)}
      <h1>LikedPropertyPage</h1>
      <ul>
        {/* {cardsArr.map((object, index) => (
          <li key={index}>
            <p>price: {object.price}</p>
            <p>description: {object.description}</p>
            <p>address: {object.address}</p>
          </li>
        ))} */}
      </ul>
      {/* <button onClick={handleLickedCards}>see your licked property</button> */}

      {/* <button onClick={functTest}>
        click here to see your favorite properties
      </button> */}

      {
        /* <h1>{cardsArr}</h1>h1 */
        //////////////////
        //from here shows on secreen buy meny rewnderws
        <div>
          {/* {cardsArr.map((item) => (
            <div key={item.id}>
              {item.price}
              {item.description}
              {item.address}
            </div>
          ))} */}
        </div>
        //////////////////
        //until here shows on secreen buy meny rewnderws
      }
    </div>
  );
};

export default LikedPropertyPage;
//////////////////////////////////////////////////////////
//from  here it kind of worked with react but not alweys somtime neded to click button a few times tp get all crads
/////////////////////////////////////////////////////
//**************************************** */

//   const handleLickedCards = () => {
//     console.log("hhhh");
//     axios
//       .get(`/properties/lickedPropertiesByUser?email=${userData.email}`)
//       .then((data) => {
//         const idesToSet = data.data.map((id) => id);

//         setIdes(idesToSet);

//         console.log("can you idd", _id);
//       })
//       .catch((err) => {
//         console.log("err from axios", err);
//       });
//   };

//   const arrTest = [];

//   const functTest = () => {
//     for (let i = 0; i < _id.length; i++) {
//       axios
//         .get(`/properties/getLickedPropertiesById?&id=${_id[i]}`)
//         .then((res) => {
//           console.log(_id[i]);
//           console.log("idddddddd", _id);
//           console.log("res.data", res.data);
//           arrTest.push(res.data[0]);
//           console.log("arrTest", arrTest);
//         })
//         .catch((err) => {
//           console.log("err", err);
//         });
//     }
//     setCardsArr(arrTest);
//     console.log("cardsArr", cardsArr);
//     renderRowsFromArr();
//   };

//   // const mpp1 = arrTest.map((item) => {
//   //   console.log("item.price", item.price);

//   // });
//   // }
//   //setCardsArr(arrTest);
//   // console.log("arrTest", arrTest);

//   // console.log("cardsArr", cardsArr);
//   const onDelete = (ev) => {
//     console.log("ondelete");
//   };
//   const hendleSeeProperty = (ev) => {
//     console.log("hendleSeeProperty");
//   };

//   const renderRowsFromArr = (arrOfItems) => {
//     /*
//         renderRowsFromArr will recive array of property cards
//         and will create html elms to display the  property cards
//         in the page
//     */
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
//             onDelete={onDelete}
//             onEdit={hendleSeeProperty}
//             // onLike={handleShowLikedPopUP}
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
//     <div onLoad={handleLickedCards}>
//       {cardsArr.length === 0 && (
//         <h1 className="noCardMsg">
//           your cards will show up here after you create them
//         </h1>
//       )}
//       {renderRowsFromArr(cardsArr)}
//       <h1>LikedPropertyPage</h1>
//       <ul>
//         {/* {cardsArr.map((object, index) => (
//           <li key={index}>
//             <p>price: {object.price}</p>
//             <p>description: {object.description}</p>
//             <p>address: {object.address}</p>
//           </li>
//         ))} */}
//       </ul>
//       {/* <button onClick={handleLickedCards}>see your licked property</button> */}

//       <button onClick={functTest}>
//         click here to see your favorite properties
//       </button>

//       {
//         /* <h1>{cardsArr}</h1>h1 */
//         //////////////////
//         //from here shows on secreen buy meny rewnderws
//         <div>
//           {/* {cardsArr.map((item) => (
//             <div key={item.id}>
//               {item.price}
//               {item.description}
//               {item.address}
//             </div>
//           ))} */}
//         </div>
//         //////////////////
//         //until here shows on secreen buy meny rewnderws
//       }
//     </div>
//   );
// };

// export default LikedPropertyPage;

//////////////////////////////////////////////////////////
//until here it kind of worked with react but not alweys somtime neded to click button a few times tp get all crads
/////////////////////////////////////////////////////
//**************************************** */
//////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//down from here works also with ewact- but funcrion are trigerd with buttons ans also without carsd array like in dashbord yet
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import CardComponent from "../../Components/CardComponent/Card.component";
// import { cloneDeep } from "lodash";
// import { object } from "joi";

// const LikedPropertyPage = () => {
//   const userData = useSelector((state) => state.auth.userData);
//   const userTest = useSelector((state) => state.auth.userData);
//   const [cardsArr, setCardsArr] = useState([]);
//   const [_id, setIdes] = useState({});

//   const handleLickedCards = () => {
//     axios
//       .get(`/properties/lickedPropertiesByUser?email=${userData.email}`)
//       .then((data) => {
//         const idesToSet = data.data.map((id) => id);

//         setIdes(idesToSet);

//         console.log("can you idd", _id);
//       })
//       .catch((err) => {
//         console.log("err from axios", err);
//       });
//   };

//   const arrTest = [];

//   const functTest = () => {
//     for (let i = 0; i < _id.length; i++) {
//       axios
//         .get(`/properties/getLickedPropertiesById?&id=${_id[i]}`)
//         .then((res) => {
//           console.log(_id[i]);
//           console.log("idddddddd", _id);
//           console.log("res.data", res.data);
//           arrTest.push(res.data[0]);
//           console.log("arrTest", arrTest);
//         })
//         .catch((err) => {
//           console.log("err", err);
//         });
//     }
//     setCardsArr(arrTest);
//     console.log("cardsArr", cardsArr);
//   };

//   // const mpp1 = arrTest.map((item) => {
//   //   console.log("item.price", item.price);

//   // });
//   // }
//   //setCardsArr(arrTest);
//   // console.log("arrTest", arrTest);

//   // console.log("cardsArr", cardsArr);

//   return (
//     <div>
//       <h1>LikedPropertyPage</h1>
//       <ul>
//         {cardsArr.map((object, index) => (
//           <li key={index}>
//             <p>price: {object.price}</p>
//             <p>description: {object.description}</p>
//             <p>address: {object.address}</p>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleLickedCards}>see your licked property</button>
//       <button onClick={functTest}>functTest</button>

//       {
//         /* <h1>{cardsArr}</h1>h1 */
//         //////////////////
//         //from here shows on secreen buy meny rewnderws
//         <div>
//           {/* {cardsArr.map((item) => (
//             <div key={item.id}>
//               {item.price}
//               {item.description}
//               {item.address}
//             </div>
//           ))} */}
//         </div>
//         //////////////////
//         //until here shows on secreen buy meny rewnderws
//       }
//     </div>
//   );
// };

// export default LikedPropertyPage;
