import React from "react";
import Screener1 from "./components/Screener1";
import Screener2 from "./components/Screener2";
import Screener3 from "./components/Screener3";
import Screener4 from "./components/Screener4";
import Screener5 from "./components/Screener5";
import qlc from "./assets/qlc.svg"
import eth from "./assets/eth.svg"
import eon from "./assets/eon.svg"
import binc from "./assets/binc.svg"

function App() {
  return (
    <div className="max-w-8xl mx-auto px-4 py-4 items-center sm:px-6 font-roboto">
      <h2 class="text-center text-yellow-500 card-title text-4xl py-4">
        <img src={binc} className="w-16 h-16"></img>
        Binance Screeners
        <div class="badge bg-white border-green-600 text-green-700 px-3">Data Active</div>
      </h2>
      <div className="text-2xl py-2 font-bold text-black">
        <p className="text-md text-gray-500 text-3xl font-bold py-2">Top 3</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="justify-items-start rounded-lg bg-black text-white shadow-lg px-2 py-2">
            <div class="justify-items-start card">
              <div class="card-body">
                <h2 class="card-title text-2xl">
                  <img src={eth} className="w-6 h-6"></img>
                  Ethereum
                  <div class="badge bg-green-700">+1.25%</div>
                </h2>
                <p>Trade the BTC-ETH Pair now on Binance</p>
                <div class="card-actions justify-end">
                  <div class="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$21,509.33</div> 
                  <div class="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start rounded-lg bg-black text-white shadow-lg px-2 py-2">
            <div class="justify-items-start card">
              <div class="card-body">
                <h2 class="card-title text-2xl">
                  <img src={qlc} className="w-6 h-6"></img>QLC
                  <div class="badge bg-green-700">+133.55%</div>
                </h2>
                <p>Trade the BTC-QLC Pair now on Binance</p>
                <div class="card-actions justify-end">
                  <div class="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$0.026</div> 
                  <div class="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start rounded-lg bg-black text-white shadow-lg px-2 py-2">
            <div class="justify-items-start card">
              <div class="card-body">
                <h2 class="card-title text-2xl">
                  <img src={eon} className="w-6 h-6"></img>EOS
                  <div class="badge bg-green-700">+15.55%</div>
                </h2>
                <p>Trade the BTC-EOS Pair now on Binance</p>
                <div class="card-actions justify-end">
                  <div class="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$1.78</div> 
                  <div class="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
