import React, { useState, useEffect, useRef } from "react";
import "./Loading.scss";

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progressStartValue, setProgressStartValue] = useState(0);
  const progressValueRef = useRef<HTMLElement | null>(null);
  const circleProgressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (progressValueRef.current) {
      const progressEndValue = 100;
      const speed = 100;

      const progress = setInterval(() => {
        setProgressStartValue((prevValue) => {
          if (prevValue < progressEndValue) {
            return prevValue + 1;
          }
          return prevValue;
        });
      }, speed);

      return () => {
        clearInterval(progress);
      };
    }
  }, []);

  useEffect(() => {
    if (circleProgressRef.current) {
      const conicGradient = `conic-gradient(grey ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;
      circleProgressRef.current.style.background = conicGradient;
    }
  }, [progressStartValue]);

  return (
    <div className={`container ${isLoading ? "loading" : ""}`}>
      <div ref={circleProgressRef} className="circle-progress">
        <span ref={progressValueRef} className="circle-value">
          {/* {progressStartValue}% */}
        </span>
      </div>
    </div>
  );
};

export default Loading;
