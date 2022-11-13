import { useState } from "react";

const TestImg = () => {
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const send = (ev) => {
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);
    console.log(data);
  };
  return (
    <form action="#">
      name
      <label htmlFor="name">name</label>
      <input
        type="text"
        id="name"
        onChange={(event) => {
          const { value } = event.target;
          setName(value);
          console.log(value);
        }}
      />
      <label htmlFor="file">file</label>
      <input
        type="file"
        id="file"
        onChange={(event) => {
          const file = event.target.files[0];
          setFile(file);
        }}
      />
      <button onClick={send}>send</button>
    </form>
  );
};

export default TestImg;
