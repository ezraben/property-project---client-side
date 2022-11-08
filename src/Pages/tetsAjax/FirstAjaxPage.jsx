import axios from "axios";
const FirstAjaxPage = () => {
  const handleBtnClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => {
        console.log("data from axios", data.data);
      })
      .catch((err) => console.log("errr", err));
  };

  return (
    <button className="btn btn-success" onClick={handleBtnClick}>
      send request
    </button>
  );
};
export default FirstAjaxPage;
