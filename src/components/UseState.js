import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1); // intenally re render the dom
    console.log(count);
  }
  return (
    <>
      <h1>Count - {count}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default UseState;
