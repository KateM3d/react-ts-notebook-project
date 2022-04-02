import { useState } from "react";

const AddToList = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChangeInput = () => {};

  return (
    <>
      <div className="AddToList">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="AddToList-input"
          value={input.name}
        />
        <input
          type="text"
          placeholder="Age"
          name="name"
          className="AddToList-input"
          value={input.age}
        />
        <input
          type="text"
          placeholder="Image Url"
          name="name"
          className="AddToList-input"
          value={input.img}
        />
        <textarea
          placeholder="Notes"
          name="name"
          className="AddToList-input"
          value={input.note}
        />
      </div>
    </>
  );
};

export default AddToList;
