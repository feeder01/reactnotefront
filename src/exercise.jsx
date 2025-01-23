import { useState } from "react";

import Button from "./components/Button";
const History = (props) => {
  console.log(props);
  console.log("the vcalues of props are" + props);

  console.log("the vcalues of props are", props);

  if (props.allClicks.length === 0) {
    return (
      <div>
        <p>Please press the button</p>
      </div>
    );
  }
  return (
    <div>
      <p>Button press history: {props.allClicks.join(" - ")}</p>
    </div>
  );
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(10);

  const handleLeftClick = () => {
    setLeft(left + 1);
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setRight(right + 1);
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setTotal(left + updatedRight);
  };

  const setToValue = (newValue) => () => {
    setValue(newValue);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="Left" />
      <Button handleClick={handleRightClick} text="Right" />
      {right}
      <History allClicks={allClicks} />
      <p>{total}</p>
      <Button handleClick={setToValue(1000)} text="1000" />
      <h1>{value}</h1>
      <Button handleClick={setToValue(0)} text="0" />
    </div>
  );
};

export default App;
