import React, { useState } from 'react';

const Counter = ({color, count, title}) => {
  // State for storing the counter value
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container" style={{backgroundColor:color}}>
      <p>{title}<p>
      <p>{count}</p>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '5px',
    width: '200px',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  counter: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  }
};

export default Counter;
