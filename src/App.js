import React, { useReducer, useRef } from "react";

function App() {
  const inputRef = useRef();
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [...state, { id: state.length, name: action.name }];
      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef}></input>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
