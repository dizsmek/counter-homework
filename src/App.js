import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counterValue, setCounterValue] = useState(1);
  const [counterInverval, setCounterInterval] = useState(1);

  const handleDecrement = () => {
    const decremented = counterValue - counterInverval;
    setCounterValue(decremented >= 0 ? decremented : 0);
  };

  const handleIncrement = () => {
    setCounterValue((prevValue) => prevValue + counterInverval);
  };

  const handleIntervalChange = ({ target }) => {
    const { value } = target;
    setCounterInterval(value > 0 ? +value : 1);
  };

  return (
    <div className="App">
      <h1>{counterValue}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="button"
          value={`-${counterInverval}`}
          onClick={handleDecrement}
        />
        <input
          type="button"
          value={`+${counterInverval}`}
          onClick={handleIncrement}
        />
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="interval">Interval: </label>
        <input
          type="number"
          id="interval"
          value={counterInverval}
          onChange={(e) => handleIntervalChange(e)}
        />
      </form>
    </div>
  );
}
