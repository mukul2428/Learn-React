import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1); // intenally re render the dom
    // we use setCount(count + 1) = if we want user to stop until dom is not re-rendered
    // (count + 1) =  eg- if we have count=1  and user clicks 3 times
    // at one go but previous state of dom has not change during his clicks then it will not show count=4
    // in the dom, it will show count = 1 only in dom.
    // to show count = 4 in dom, we have to use
    // setCount(count=> count+1); - prefered way
    console.log(count);
  }
  return (
    <>
      <h1>Count - {count}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

// in react, we don't change variable of useState directly = we make copy of that variable then that will be our new state
// use spread operator to create copy of that variable 
// state as a snapshort

export default UseState;
