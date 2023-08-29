import { useState } from "react";

function Fibonacci() {
  // calculate fibo
  function fib(n) {
    if (n === 1 || n === 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      Count - {count} | Fibo - {fib(count)}
      &nbsp; <button onClick={handleClick}>Increase</button>
    </>
  );
}
export default Fibonacci;
