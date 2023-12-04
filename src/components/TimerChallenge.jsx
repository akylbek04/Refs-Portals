import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const active = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    dialog.current.open();
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        onReset={handleReset}
        targetTime={targetTime}
        timeLeft={timeRemaining}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p className="">
          <button onClick={active ? handleStop : handleStart}>
            {active ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={active ? "active" : undefined}>
          {active ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
