import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(false);

  const increment = () => setCounter(counter + 1);

  const decrement = () => {
    if (counter === 1) {
      setVisible(false);
    }
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  if (counter > 0 && !visible) {
    setVisible(true);
  }

  const reset = () => {
    setCounter(0);
    setVisible(false);
  };

  return (
    <div id="container">
      <h1>Counter App</h1>
      <div id="counter-value">{counter}</div>
      <div id="button-container">
        <button onClick={increment} id="increment-btn">
          Increment
        </button>
        <button onClick={reset} id="reset-btn">
          Reset
        </button>
        {visible && (
          <button onClick={decrement} id="decrement-btn">
            Decrement
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
