import React, { useState } from "react";
import SelectNumber from "./SelectNumber";
import RoldDice from "./RoldDice";

const GamePage = () => {
  const [score, setScore] = useState(0); // By default score 0

  const resetScore = () => {
    setScore(0); // Reset Score
  };

  return (
    <div>
      <SelectNumber score={score} />
      <RoldDice resetScore={resetScore} />
    </div>
  );
};

export default GamePage;
