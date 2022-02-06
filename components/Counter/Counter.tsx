import React, { useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div>
      <h5>
        DESC: {description} - DC: {defaultCount}
      </h5>
      <label>
        Incrementor:
        <input
          type="number"
          value={incrementor}
          onChange={(e) => {
            setIncrementor(parseInt(e.target.value) || 0);
          }}
        />
      </label>
      <button
        aria-label="Decrement"
        onClick={() => {
          setCount((prev) => prev - incrementor);
        }}
      >
        -
      </button>
      <span>Current count: {count}</span>
      <button
        aria-label="Increment"
        onClick={() => setCount(count + incrementor)}
      >
        +
      </button>
    </div>
  );
}
