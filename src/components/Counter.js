import { useCallback, useEffect, useMemo, useRef, useState, forwardRef, useImperativeHandle, useDeferredValue, useTransition } from "react";

// function fib(n) {
//   if (n === 1 || n === 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// forwardRef hook = it passes useRef from one component to other
// so passing ref and useRef will be used in parent component
// note = we are not using prop but still we have to pass props for forwardRef syntax
const Counter = forwardRef(function Counter(props,ref) {
  //state update do re-rendering
  // we use useRef hook if want any value to be recorded but to be updated on screen
  // useRef is used to access dom apis
  const [count, setCount] = useState(1);
  //   let cnt = 0;
  let cnt = useRef(0);
  const inputRef = useRef(null);


  // useImperativeHandle hook will only send selective useRef functionality to other component
  useImperativeHandle(ref,()=>{
    return {
      Focus(){
        inputRef.current.focus()
      }
    }
  },[])


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

  // useDeferedValue hook = delay state update and keep app responsive, so app don't hang, 
  // use defered value(old value) until new cpu computation is not completed

  //useTransition() is used if we know which function will be make delay

  const [isPending, startTransition] = useTransition();

  let handleClick = () => {
    cnt.current++;
    console.log(cnt.current);
    startTransition(()=>{
      setCount(count + 1);
    })
  };
  

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  return (
    <div>
      <form action="">
        <input ref={inputRef} type="text" placeholder="Enter Name" />
      </form>
      {count} | {isPending ? 'Ruko Jara' : fibMemorized}
      <button onClick={handleClick}>Add</button>
    </div>
  );
})
export default Counter;
