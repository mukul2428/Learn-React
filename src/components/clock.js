import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toString());
    // [time, setTime] = this is destructure of array, basically useState return an array having two elements in it.
    // useState is internally storing every previous state after every Clock() function call - this function call is done internally in react
    useEffect(() => {
        console.log("component mounted or updated");
        const interval = setInterval(showDate, 1000);
        return () => {
            console.log("cleanup of Interval");
            clearInterval(interval);
        };
    }, [time]); // it will only when time changes
    
    function showDate() {
        //console.log(new Date().toString());
        setTime(new Date().toString());
    }
    return <div>{time}</div>;
}
export default Clock;