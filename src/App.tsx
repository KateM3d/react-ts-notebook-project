import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";
export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Mickey Mouse",
      url: "https://static.wikia.nocookie.net/disney/images/b/bf/Mickey_Mouse_Disney_1.png",
      age: 36,
      note: "notes go here",
    },
  ]);

  people.map((person) => {
    return person.age;
  });
  return (
    <>
      <div className="App">
        <h1>People invited to your party:</h1>
        <List people={people} />
        <AddToList setPeople={setPeople} people={people} />{" "}
      </div>
    </>
  );
}

export default App;
