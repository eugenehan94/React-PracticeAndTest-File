import React, { useState, useReducer, useRef, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Error from "./Error";
// import Navbar from "./Navbar";
function App() {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  console.log("This is outside the return " + refContainer.current);
  console.log(refContainer.current === null);
  return (
    <div>
      <h1>Title</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}></input>
          <button type="sumbit">
            {refContainer.current === null ? "refContainer is null" : "submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
