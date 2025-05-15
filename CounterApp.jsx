import React, { useState } from "react";

const CounterApp = () => {
  // State to manage counter value
  const [counter, setCounter] = useState(0);

  // Handlers for buttons
  const handleIncrease = () => setCounter(counter + 1);
  const handleDecrease = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  const handleReset = () => setCounter(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div>
        <button
          onClick={handleIncrease}
          style={{ margin: "5px", padding: "10px 20px" }}
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          style={{ margin: "5px", padding: "10px 20px" }}
        >
          Decrease
        </button>
        <button
          onClick={handleReset}
          style={{ margin: "5px", padding: "10px 20px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
