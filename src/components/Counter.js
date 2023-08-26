import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// function fib(n) {
//   if (n === 1 || n === 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

function Counter() {
  //state update do re-rendering
  // we use useRef hook if want any value to be recorded but to be updated on screen
  // useRef is used to access dom apis
  const [count, setCount] = useState(1);
  //   let cnt = 0;
  let cnt = useRef(0);
  const inputRef = useRef(null);

  //useMemo hook is used to save any value, saves calculation(caching)
  //useCallback = whole function is memoized, function which will be made using this will not
  // re-render again and again until its dependency or prop will not change
  
  // const fibMemorized = useMemo(() => {
  //   return fib(count);
  // }, [count]);

  let fibMz = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  },[])

  const fibMemorized = useMemo(() => {
    return fibMz(count);
  }, [count,fibMz]);

  let handleClick = () => {
    cnt.current++;
    console.log(cnt.current);
    setCount(count + 1);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form action="">
        <input ref={inputRef} type="text" placeholder="Enter Name" />
      </form>
      {count} | {fibMemorized}
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
export default Counter;
