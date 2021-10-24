import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const App = () => {
  const [post, setPost] = React.useState(null);
  const clickHandler = () => {};

  if (!post)
    return (
      <div>
        {" "}
        <button onClick={() => clickHandler()}>Click to get</button>
      </div>
    );

  return <div></div>;
};

export default App;
