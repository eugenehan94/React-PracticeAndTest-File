import React, { useState, useEffect, useRef, useReducer } from "react";

const reducer = (state, action) => {};

function App() {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      setShowModal(true);
      setPeople([...people]);

      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && "Modal should appear"}
      <h1>Title</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
