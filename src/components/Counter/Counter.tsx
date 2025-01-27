import Button from "../Button/Button";
import "./styles.css";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
  };

  console.log("counter in Counter Component", counter);

  const onMinusClick = (): void => {
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" type="button" onClick={onMinusClick} />
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" type="button" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;