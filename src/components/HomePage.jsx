import React from "react";
import dices from "../assets/dices.png";

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex">
        {/* Left Half: Image */}
        <div className="w-1/2">
          <img src={dices} alt="Dice" className="w-full h-full -covobjecter" />
        </div>

        {/* Right Half: Content */}
        <div className="w-1/2 flex flex-col justify-center items-center text-black p-6">
          <h1 className="text-6xl font-bold mb-6">DICE GAME</h1>
          <button className="bg-black text-white font-semibold ml-[200px] px-8 py-2 rounded hover:bg-gray-800 transition duration-300">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
