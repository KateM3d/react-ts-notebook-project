import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
interface IState {
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
      name: "James",
      url: "",
      age: 36,
      note: "notes goe here",
    },
  ]);

  people.map((person) => {
    return person.age;
  });
  return (
    <div className="App">
      <h1>People invited to your party:</h1>
      <List people={people} />
    </div>
  );
}

export default App;
