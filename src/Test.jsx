import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StaticLine = ({ text, value }) => {
  console.log({ text }, { value });
  return (
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  );
};

const Statistic = (props) => {
  console.log("props", props);
  if (props.total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StaticLine text="Total" value={props.total} />
      <StaticLine text="Average" value={props.average} />
      <StaticLine text="Positive" value={props.positive} />
      <StaticLine text="Good" value={props.good} />
      <StaticLine text="Neutral" value={props.neutral} />
      <StaticLine text="Bad" value={props.bad} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const [average, setAverage] = useState(0);

  const GetAverage = (good, bad, total) => () => {
    const avg = (good - bad) / total;
    return avg;
  };

  const GetPositive = (good, total) => () => {
    const pos = (good / total) * 100;
    return pos;
  };

  const onGood = () => {
    setGood(good + 1);
    const total = good + neutral + bad + 1;
    setTotal(total);
    const pos = GetPositive(good + 1, total);
    setPositive(pos);
    setAverage(GetAverage(good + 1, bad, total));
  };
  const onNeutral = () => {
    setNeutral(neutral + 1);
    const total = good + neutral + bad + 1;
    setTotal(total);
    setAverage(GetAverage(good, bad, total));
    setPositive(GetPositive(good, total));
  };
  const onBad = () => {
    setBad(bad + 1);
    const total = good + neutral + bad + 1;
    setTotal(total);
    setAverage(GetAverage(good, bad + 1, total));
    setPositive(GetPositive(good, total));
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={onGood} />
      <Button text="Neutral" handleClick={onNeutral} />
      <Button text="Bad" handleClick={onBad} />
      <Statistic
        good={good}
        bad={bad}
        neutral={neutral}
        average={average}
        positive={positive}
        total={total}
      />
    </div>
  );
};

export default App;

//<p>Good: {good}</p>
//<p>Neutral: {neutral}</p>
//<p>Bad: {bad}</p>
//<p>Total Feedback: {total}</p>

//<p>Average: {average}</p>
//<p>Positive: {positive}</p>
