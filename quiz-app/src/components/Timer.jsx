import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";

const timerProps = {
  isPlaying: true,
  size: 60,
  strokeWidth: 3
};

export default function Timer({time}) {
    const navigate = useNavigate()

  return (
      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={time*60}
        onComplete={() => navigate("/score" ,{replace:true})}
      >
        {children}
      </CountdownCircleTimer>
   
  );
}
const children = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60)
  const seconds = remainingTime % 60

  return `${minutes}:${seconds}`
}