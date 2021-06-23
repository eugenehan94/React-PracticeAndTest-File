import React, { useState, useReducer, useRef, useContext } from "react";

const someContext = React.createContext();

function App() {
  const [number, setNumber] = useState(541);

  return (
    <>
      <someContext.Provider value={number}>
        <h1>Title</h1>
        <button onClick={() => setNumber(number + 1)}>Increase Number</button>
        <Level1 />
      </someContext.Provider>
    </>
  );
}

export default App;

const Level1 = () => {
  return (
    <>
      <h2>This is level 1</h2>
      <Level2></Level2>
    </>
  );
};

const Level2 = () => {
  return (
    <>
      <h2>This is level 2</h2>
      <Level3 />
    </>
  );
};

const Level3 = () => {
  const number = useContext(someContext);
  return (
    <>
      <h2>This is level 3</h2>
      <p>This is the data: {number}</p>
    </>
  );
};
