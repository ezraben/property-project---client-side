// import axios from "axios";
// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useHistory } from "react-router-dom";
// import CardComponent from "../CardComponent/Card.component";
// const SearchBarComponent = (props) => {
//   const [address, setAddress] = useState("");
//   const [cardsArr, setCardsArr] = useState([]);
//   useEffect(() => {
//     getAllCards();
//     console.log("use effect");
//   }, []);
//   const handeleSearchSunmit = (ev) => {
//     ev.preventDefault();

//   const getAllCards = () => {
//     axios
//       .post("/properties/filter", { address })
//       .then((res) => {
//         // console.log(" from axios", res.data[0]);
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
//   };
// }

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
//             // onDelete={handleDeleteCard}
//             // onEdit={showEditPopUp}
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
//       {/* <SearchBarComponent /> */}
//       <h1> Your Dashboard</h1>
//       <form className="form-inline my-2 my-lg-0" onSubmit={handeleSearchSunmit}>
//         <input
//           className="form-control mr-sm-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           //  onChange={handeleaddressChange}
//           value={address}
//         />
//         {/* <h1>{test}</h1> */}
//         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//           Search
//         </button>
//       </form>
//       {cardsArr.length === 0 && (
//         <h1 className="noCardMsg">
//           your cards will show up here after you create them
//         </h1>
//       )}
//       {renderRowsFromArr(cardsArr)}{" "}
//       {/* {showTheEditPopUp && (
//           <EditCardComponent
//             onCancel={handeleCancelEdite}
//             onEditDone={hendeleEditCard}
//             {...dataToEdite}
//           />
//         )} */}
//     </div>
//   );
// };
// export default SearchBarComponent;
// import axios from "axios";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import CardComponent from "../CardComponent/Card.component";
// const SearchBarComponent = (props) => {
//   const [address, setAddress] = useState("");
//   const [cardsArr, setCardsArr] = useState([]);
//   const [price, setPrice] = useState();
//   const [description, setDescription] = useState();
//   const [addressToPass, setAddressToPass] = useState();

//   const history = useHistory();

//   const handeleaddressChange = (ev) => {
//     setAddress(ev.target.value);
//   };

//   const handeleSearchSunmit = (ev) => {
//     ev.preventDefault();

//     axios
//       .post("/properties/filter", { address })
//       .then((res) => {
//         console.log(res.data[0]);
//         setCardsArr(res.data[0]);
//         setPrice(cardsArr[0].price);
//         setDescription(res.data[0].description);
//         setAddressToPass(res.data[0].address);

//         // setTest(data[0].description);
//         // console.log(data[0].description);

//         if (res.length > 0) {
//           // history.push("/FilterdPropertyPage");
//         }
//       })
//       .catch((err) => {
//         console.log("err from axios", err);
//       });
//   };

//   return (
//     <div>
//       <form className="form-inline my-2 my-lg-0" onSubmit={handeleSearchSunmit}>
//         <input
//           className="form-control mr-sm-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           onChange={handeleaddressChange}
//           value={address}
//         />
//         {/* <h1>{test}</h1> */}
//         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//           Search
//         </button>
//       </form>
//       <CardComponent
//         price={price}
//         description={description}
//         address={addressToPass}
//       />
//       {/* <CardComponent price={cardsArr[0]} /> */}
//     </div>
//   );
// };
// export default SearchBarComponent;
