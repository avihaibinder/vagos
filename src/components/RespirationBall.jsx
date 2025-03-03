import React, { useState, useEffect } from 'react';
import './RespirationBall.css'; // Assuming the styles are in this file

const RespirationBall = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev === 5 ? 1 : prev + 1));
    }, 1000); // 1-second interval for counting

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="breathing-container">
      <div className="breathing-ball">
        <span className="counter">{count}</span>
      </div>
    </div>
  );
};

export default RespirationBall;
