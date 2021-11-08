import { useState, useRef } from "react";

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setTimer(0);
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    console.log("pausing this", countRef.current);
    if (!isPaused) {
      clearInterval(countRef.current);
      setIsPaused(true);
    } else {
      handleResume();
    }
  };

  const handleResume = () => {
    setIsPaused(false);
    countRef.current = setInterval(() => {
      console.log("tick tock");
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    console.log("reset");
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    setTimeout(() => {
      handleStart();
    });
  };

  return { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset };
};

export default useTimer;
