import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>About</h2>
      {count < 2 ? (
        <h3>{count}</h3>
      ) : (
        <Navigate to={'/home'} replace={false} />
      )}
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Add
      </button>
    </div>
  );
}
