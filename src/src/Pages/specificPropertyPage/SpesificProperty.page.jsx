import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import CardComponent from "../../Components/CardComponent/Card.component";
const SpecificPropertyPage = () => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [img, setImg] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.id) {
      setId(location.state.id);

      axios

        .get(`/properties/specificProperty?id=${id}`)
        .then((data) => {
          if (data.data[0]) {
            setPrice(data.data[0].price);
            setDescription(data.data[0].description);
            setCity(data.data[0].city);
            setAddress(data.data[0].address);
            setImg(data.data[0].img);
            setExtraInfo(data.data[0].extraInfo);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [id]);

  return (
    <div className="card ">
      <img
        className="card-img-top img-fluid max-width- 100%  height-auto "
        src={img}
        alt={description}
      />

      <div className="card-body">
        <h5 className="card-title">price: {price}</h5>
        <p className="card-text">description: {description}</p>
      </div>

      <h5 className="card-title">city: {city}</h5>
      <h5 className="card-title">address: {address}</h5>
      <h5 className="card-title">extra info: {extraInfo}</h5>
      {/* <div className="card"> */}
      {/* <img className="card-img-top" src={img} alt={description} /> */}
      {/* <div className="card-body"> */}
      {/* <h5 className="card-title">price: {price}</h5> */}
      {/* <p className="card-text">{description}</p> */}
      {/* <CardComponent
        price={price}
        description={description}
        address={address}
        img={img}
        extraInfo={extraInfo}
      /> */}
      {/* </div> */}
      {/* <div className="card-body">extraInfo: {extraInfo}</div> */}
    </div>
  );
};

export default SpecificPropertyPage;
