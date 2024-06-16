import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Spin_bar({ percentage }) {
  const [isInView, setIsInView] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  const strokeWidth = 10;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex items-center justify-center h-full">
      <svg
        ref={circleRef}
        className="w-32 h-32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <motion.circle
          className="text-blue-500"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          style={{
            strokeDasharray: circumference,
          }}
          animate={{
            strokeDashoffset: isInView
              ? circumference - (percentage / 100) * circumference
              : circumference,
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl font-bold text-gray-700"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  );
}

export default Spin_bar;
