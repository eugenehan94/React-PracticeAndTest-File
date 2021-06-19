import React, { useReducer, useRef } from "react";

const initialState = 0;

const reducer = (state, action) => {
  if (action.type == "Increase") {
    console.log(state + 1);
    return state + 1;
  }
  console.log("If statement not touched");
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>title</h1>
      <button onClick={() => dispatch({ type: "Increas" })}>Click</button>
      <p>Here is the state: {state} </p>
    </div>
  );
}

export default App;
