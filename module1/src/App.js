import react, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);
  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        Counter value is&nbsp;
        <span data-test="counter-value">{counter}</span>
      </h1>
      <div
        data-test="error-message"
        className={`error ${error ? "" : "hidden"}`}
      >
        The counter cannot go below 0
      </div>
      <button
        data-test="component-button-increment"
        onClick={() => {
          error && setError(false);
          setCounter(counter + 1);
        }}
        type="button"
      >
        Increment By 1
      </button>
      <button
        data-test="component-button-decrement"
        onClick={() =>
          counter === 0 ? setError(true) : setCounter(counter - 1)
        }
        type="button"
      >
        Decrement By 1
      </button>
    </div>
  );
}

export default App;
