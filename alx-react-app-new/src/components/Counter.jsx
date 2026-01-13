import { useState } from 'react';

function Counter() {
  // Initialize state at 0
  const [count, setCount] = useState(0);

  // Inline styles for a cleaner look
  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>Interactive Counter</h2>
      
      {/* Displaying the current state */}
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Current Count: {count}
      </p>

      {/* Button handlers update the state directly */}
      <button 
        style={{ ...buttonStyle, backgroundColor: '#d4edda' }} 
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button 
        style={{ ...buttonStyle, backgroundColor: '#f8d7da' }} 
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button 
        style={{ ...buttonStyle, backgroundColor: '#fff3cd' }} 
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;