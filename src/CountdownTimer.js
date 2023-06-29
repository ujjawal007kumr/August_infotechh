import React, { useState, useEffect } from 'react';

const CountdownTimer = ({targetTime}) => {
    const [remainingTime, setRemainingTime] = useState(targetTime);

useEffect(()=> {
    const interval = setInterval(()=>{
        setRemainingTime(prevTime => prevTime -1);
    },1000);

    return () => {
        clearInterval(interval);
    };
},[]);

useEffect(()=>{
    if(remainingTime === 0) {
        console.log("countdown reaching zero");
    }
},[remainingTime]);

const formatTime = time => {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    return '${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')};
};
 return (
  <div>
    <h1>Countdown Timer</hr>
    <p>Remaining Time:{formatTime(remainingTime)}</p>
  </div>
 );
};

export default CountdownTimer;