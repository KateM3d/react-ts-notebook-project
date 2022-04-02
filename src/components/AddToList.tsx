import { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
  });

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickBtn = (): void => {
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age, 10),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };
  return (
    <>
      <div className="AddToList">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="AddToList-input"
          value={input.name}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          className="AddToList-input"
          value={input.age}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          placeholder="Image Url"
          name="url"
          className="AddToList-input"
          value={input.url}
          onChange={handleChangeInput}
        />
        <textarea
          placeholder="Notes"
          name="note"
          className="AddToList-input"
          value={input.note}
          onChange={handleChangeInput}
        />
        <button className="AddToList-btn" onClick={handleClickBtn}>
          Add to List
        </button>
      </div>
    </>
  );
};

export default AddToList;
