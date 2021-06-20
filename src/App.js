import React, { useReducer, useRef } from "react";

const initialAmount = 0;

const ree = (state, action) => {};

function App() {
  const [state, dispatch] = useReducer(ree, initialAmount);

  return (
    <>
      <h1>Title</h1>
      <button onClick={() => dispatch({ type: "plus" })}>Increase</button>
      <button onClick={() => dispatch({ type: "minus" })}>Decrease</button>
    </>
  );
}

export default App;
