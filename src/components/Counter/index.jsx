import { useState } from "react";

import "./index.css";

const MIN_VAL = 1;
const MAX_VAL = 100;

const Counter = (props) => {
  const [value, setValue] = useState(1);
  const { className = "" } = props;

  const decrement = () => {
    if (value === MIN_VAL) {
      return;
    }

    const newValue = value - 1;
    setValue(newValue);
  };

  const increment = () => {
    if (value === MAX_VAL) {
      return;
    }

    const newValue = value + 1;
    setValue(newValue);
  };

  return (
    <div className={`counter ${className}`}>
      <input
        type="button"
        value="-"
        className="counter__button dec-button"
        onClick={decrement}
      />
      <span className="counter__indicator">{value}</span>
      <input
        type="button"
        value="+"
        className="counter__button"
        onClick={increment}
      />
    </div>
  );
};

export default Counter;
