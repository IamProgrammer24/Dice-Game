import React, { useState } from "react";
import img1 from "../assets/dice_1.png";
import img2 from "../assets/dice_2.png";
import img3 from "../assets/dice_3.png";
import img4 from "../assets/dice_4.png";
import img5 from "../assets/dice_5.png";
import img6 from "../assets/dice_6.png";

const RoldDice = ({ resetScore }) => {
  const images = [img1, img2, img3, img4, img5, img6];

  const [randomImage, setRandomImage] = useState(images[0]);
  const [showRule, setShowRule] = useState(false);

  const showRandomImage = () => {
    const index = Math.floor(Math.random() * images.length);
    setRandomImage(images[index]);
  };

  const toggleRules = () => {
    setShowRule((prev) => !prev); // ✅ Toggles the rules section
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10 space-y-6">
        {/* ✅ Image Section */}
        <div className="flex flex-col items-center">
          <img
            src={randomImage}
            alt="Random"
            onClick={showRandomImage}
            className="w-40 h-40 object-contain cursor-pointer hover:scale-105 transition"
          />
          <p className="mt-2 text-gray-800">Click on Dice to Roll</p>
        </div>

        {/* ✅ Buttons Section */}
        <div className="flex flex-col gap-4">
          <button
            onClick={resetScore}
            className="px-8 py-1.5 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Reset Score
          </button>
          <button
            onClick={toggleRules}
            className="px-8 py-1.5 focus:outline-none bg-white border border-black text-black rounded hover:bg-gray-400 transition"
          >
            {showRule ? "Hide Rules" : "Show Rules"}
          </button>
        </div>
      </div>

      {/* ✅ Conditional rendering of rules */}
      {showRule && (
        <div className="mt-4 p-4 bg-red-50 rounded shadow-md text-gray-800 max-w-xl mx-auto">
          <h2 className="text-xl font-bold mb-2">How to play dice game</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-sm">Rule 1: Select any Number.</li>
            <li className="text-sm">Rule 2: Click on Dice Image.</li>
            <li className="text-sm">
              Rule 3: after click on dice if selected number is equal to dice
              number you will get same point as dice.
            </li>
            <li className="text-sm">
              Rule 4: if you get wrong guess then 2 point will be dedcuted.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoldDice;
