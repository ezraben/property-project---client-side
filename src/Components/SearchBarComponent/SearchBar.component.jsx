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

//         if (res.length > 0) {
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
