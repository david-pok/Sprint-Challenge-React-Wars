import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Chars from "./components/Chars";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log("API CALL", res.data);
        setChars(res.data.results);
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }, []);

  if (!chars) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {chars.map(char => {
        console.log("map", char);
        return <Chars char={char} />;
      })}
    </div>
  );
};

export default App;
