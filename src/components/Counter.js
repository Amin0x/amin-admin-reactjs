import React, { useState } from 'react';

const Counter = ({color, count, title}) => {
  
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container" style={{backgroundColor:color}}>
      <p>{title}<p>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
