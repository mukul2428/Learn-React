import { useEffect, useRef, useState } from "react";

function Counter() {
  //state update do re-rendering
  // we use useRef if want any value to be recorded but to be updated on screen
  // useRef is used to access dom apis
  const [count, setCount] = useState(0);
  //   let cnt = 0;
  let cnt = useRef(0);
  const inputRef = useRef(null);

  let handleClick = () => {
    cnt.current++;
    console.log(cnt.current);
    setCount(count + 1);
  };

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <div>
        <form action="">
            <input ref={inputRef} type="text" placeholder="Enter Name" />
        </form>
      {count}
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
export default Counter;
