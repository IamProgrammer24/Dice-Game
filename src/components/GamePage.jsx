import React, { useState } from "react";
import SelectNumber from "./SelectNumber";
import RoldDice from "./RoldDice";

const GamePage = () => {
  const [score, setScore] = useState(0); // Optional: set default score

  const resetScore = () => {
    setScore(0); // Reset to first image
  };

  return (
    <div>
      <SelectNumber score={score} />
      <RoldDice resetScore={resetScore} />
    </div>
  );
};

export default GamePage;
