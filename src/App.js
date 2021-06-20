import React, { useReducer, useRef } from "react";

function App() {
  const nums = [2, 4, 6];
  const initialState = 0;
  const total = nums.reduce(reducer, initialState);

  function reducer(state, value) {
    return state + value;
  }

  return (
    <>
      <h1>Title</h1>
    </>
  );
}

export default App;
