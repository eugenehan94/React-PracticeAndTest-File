import React, { useState, useReducer, useRef, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Title</h1>
      <div className="loader"></div>
    </div>
  );
}

export default App;
