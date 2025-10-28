"use client";
import React, { useState, useEffect } from "react";

interface TimerProps {
  targetDate: string; // e.g. "2025-11-04T19:00:00+05:30"
  title?: string;
  subtext?: string;
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
    <div className="relative w-full text-center py-10 px-6 bg-background border border-primary/30 rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.1)] backdrop-blur-sm">
      {/* Neon Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl blur-xl -z-10"></div>

      <h2
        className="text-2xl md:text-3xl font-bold text-foreground neon-glow mb-2"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        {title}
      </h2>

      <p className="text-sm text-muted mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
        {subtext}
      </p>

      {!isEnded ? (
        <div
          className="flex justify-center gap-4 text-primary text-3xl md:text-4xl font-extrabold tracking-wider"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-foreground">{timeLeft.days}</span>
            <span className="text-muted text-xs mt-1">Days</span>
          </div>
          <span className="text-accent">:</span>
          <div className="flex flex-col items-center">
            <span className="text-foreground">{timeLeft.hours}</span>
            <span className="text-muted text-xs mt-1">Hrs</span>
          </div>
          <span className="text-accent">:</span>
          <div className="flex flex-col items-center">
            <span className="text-foreground">{timeLeft.minutes}</span>
            <span className="text-muted text-xs mt-1">Min</span>
          </div>
          <span className="text-accent">:</span>
          <div className="flex flex-col items-center">
            <span className="text-foreground">{timeLeft.seconds}</span>
            <span className="text-muted text-xs mt-1">Sec</span>
          </div>
        </div>
      ) : (
        <p
          className="text-xl md:text-2xl font-semibold text-destructive neon-glow mt-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          🚀 Contribution Period Ended
        </p>
      )}
    </div>
  );
};

export default Timer;
