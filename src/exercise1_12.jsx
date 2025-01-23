import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const mostVotes = (votes) => {
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max) {
      max = votes[i];
      maxIndex = i;
    }
  }

  console.log("max", max);
  console.log("maxIndex", maxIndex);
  return [max, maxIndex];
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const onNext = () => {
    if (selected >= anecdotes.length - 1) {
      return;
    }
    setSelected(selected + 1);
  };
  const onPrevious = () => {
    if (selected <= 0) {
      return;
    }
    setSelected(selected - 1);
  };
  const onVote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);
  };

  const [maxVotes, maxIndex] = mostVotes(Object.values(votes));
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br />
      <Button handleClick={onVote} text="Vote" />
      <Button handleClick={onNext} text="Next Anecdote" />
      <Button handleClick={onPrevious} text="Previous Anecdote" />
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxIndex]}
      <p>has {maxVotes} votes</p>
    </div>
  );
};

export default App;
