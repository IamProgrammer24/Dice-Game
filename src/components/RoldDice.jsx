import React, { useState } from "react";
import img1 from "../assets/dice_1.png";
import img2 from "../assets/dice_2.png";
import img3 from "../assets/dice_3.png";
import img4 from "../assets/dice_4.png";
import img5 from "../assets/dice_5.png";
import img6 from "../assets/dice_6.png";

const RoldDice = ({ resetScore }) => {
  const images = [img1, img2, img3, img4, img5, img6];

  // ✅ Set initial image to the first image
  const [randomImage, setRandomImage] = useState(images[0]);

  const showRandomImage = () => {
    const index = Math.floor(Math.random() * images.length);
    setRandomImage(images[index]);
  };

  return (
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
          
          className="px-8 py-1.5 focus:outline-none bg-white border border-black text-black rounded hover:bg-gray-400 transition"
        >
          Show Rules
        </button>
      </div>
    </div>
  );
};

export default RoldDice;
