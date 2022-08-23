import React from "react";
import Screener1 from "./components/Screener1";
import Screener2 from "./components/Screener2";
import Screener3 from "./components/Screener3";
import Screener4 from "./components/Screener4";
import Screener5 from "./components/Screener5";

function App() {
  return (
    <div className="max-w-8xl mx-auto px-4 py-4 items-center sm:px-6 font-roboto">
      <div className="text-5xl text-center font-mono leading-tight py-10">PingTrader</div>
      <div className="text-center text-2xl py-2 font-bold text-black">
      Three screeners running at 8 hours interval over 3 different datasets.
      </div>
      <div className="grid grid-rows-3 gap-2">
        <Screener1 />
        <Screener2 />
        <Screener3 />
        <p className="text-md font-bold text-gray-400 text-center py-2">Login to see locked content.</p>
        <Screener4 />
        <Screener4 />
        <Screener5 />
        <Screener5 />
      </div>
    </div>
  );
}

export default App;
