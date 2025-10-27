"use client";
import React, { useState, useEffect } from "react";

interface TimerProps {
  targetDate: string; // e.g. "2025-11-04T19:00:00+05:30"
  title?: string;     // optional heading text
  subtext?: string;   // optional subtitle text (like date)
}

const Timer: React.FC<TimerProps> = ({
  targetDate,
  title = "Contribution Period Ends In",
  subtext = "(Date: 4 Nov 2025, 7:00 PM IST)",
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(targetDate).getTime();
      const diff = end - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  const isEnded =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="relative text-center py-4 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl overflow-hidden">
      <h2 className="text-xl font-bold mb-2 drop-shadow-lg animate-pulse">
        {title}
      </h2>
      <p className="text-sm text-gray-100 mb-4">{subtext}</p>

      {!isEnded ? (
        <p className="text-2xl font-extrabold tracking-widest animate-bounce">
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </p>
      ) : (
        <p className="text-3xl font-semibold text-yellow-300 animate-pulse">
          🚀 Contribution Period Ended
        </p>
      )}

      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg -z-10"></div>
    </div>
  );
};

export default Timer;
