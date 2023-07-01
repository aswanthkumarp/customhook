import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const[number,increment,decrement]=useCounter();

  return (
    <div className="counter-container">
      <div className="counter-wrapper">
        <h1 className="counter-title">Counter</h1>
        <div className="counter-content">
          <button className="counter-button" onClick={decrement}>
            -
          </button>
          <h1 className="counter-number">{number}</h1>
          <button className="counter-button" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
function useCounter(){

  const [number, setNumber] = useState(0);
  const increment = () => setNumber((i) => i + 1);
  const decrement = () => setNumber((i) => i - 1);
  return [number,increment,decrement];

}
export default Counter;
