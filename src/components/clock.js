import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toString());
    // [time, setTime] = this is destructure of array, basically useState return an array having two elements in it.
    // useState is internally storing every previous state after every Clock() function call - this function call is done internally in react
    useEffect(() => {
        console.log("component mounted(first time render) or updated");
        const interval = setInterval(showDate, 1000);
        return () => {
            console.log("cleanup of Interval");
            // cleanup is required inorder to clear our work done
            clearInterval(interval);
        };
    }, [time]); // it will only work when time changes
    // useEffect - always work after rendering of that file
    //[] = dependency array, so when-ever there will be change in time then useEffect will work
    // if dependency array is empty then it useEffect will run once one time
    
    function showDate() {
        //console.log(new Date().toString());
        setTime(new Date().toString());
    }
    return <div>{time}</div>;
}
export default Clock;