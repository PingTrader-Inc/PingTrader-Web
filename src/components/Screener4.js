import React from "react";
import eth from "../assets/eth.svg"
import usdt from "../assets/usdt.svg"
import doge from "../assets/doge.svg"
import matic from "../assets/matic.svg"
import solana from "../assets/sol.svg"

const Screener4 = () => {
    return (
<div className="">
          <div className="py-3 flex flex-row content-center">
            <div className="px-1">
              <h1 className="text-2xl px-1 font-bold flex flex-row items-center"><div className="px-2"><div className="w-2 h-2 bg-green-400 ring-2 ring-green-300 rounded-full dark:border-gray-900 dark:bg-gray-700"></div></div>Scr4</h1>
            </div>
            <div className="px-1 py-1">
              <h1 className="badge text-2xl border-yellow-900 text-yellow-900 bg-yellow-300 px-2 text-xs font-bold">StockRSI</h1>
            </div>
            <div className="px-1 py-1">
              <h1 className="badge border-indigo-900 text-indigo-900 bg-indigo-300 text-2xl px-2 text-xs font-bold">MACD</h1>
            </div>
          </div>
        <div className="grid sm:grid-cols-5 grid-cols-1 gap-2 items-center rounded-xl">
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-green-200 h-full bg-gradient-to-r from-green-400 to-green-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={eth} className="w-6 h-6"></img>Ethereum
                  <div className="badge bg-green-700">+1.25%</div>
                </h2>
                <p>Trade the BTC-ETH Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$21,509.33</div> 
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-red-200 h-full bg-gradient-to-r from-red-400 to-red-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={usdt} className="w-6 h-6"></img>Tether
                  <div className="badge bg-red-700">-0.6%</div>
                </h2>
                <p>Trade the BTC-USDT Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-red-100 text-red-900 font-bold ring-2 ring-red-400 px-3">$1.00</div> 
                  <div className="badge bg-red-100 text-red-900 font-bold ring-2 ring-red-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start">
                <div className="justify-items-start card shadow-lg shadow-green-200 h-full bg-gradient-to-r from-green-400 to-green-300 ">
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                    <img src={doge} className="w-6 h-6"></img>DOGE
                    <div className="badge bg-green-700">+3.22%</div>
                    </h2>
                    <p>Trade the BTC-DOGE Pair now on Binance</p>
                    <div className="card-actions justify-end">
                    <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$0.06</div> 
                    <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                    </div>
                </div>
                </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-green-200 h-full bg-gradient-to-r from-green-400 to-green-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={matic} className="w-6 h-6"></img>Matic
                  <div className="badge bg-green-700">+5.89%</div>
                </h2>
                <p>Trade the BTC-Matic Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$0.78</div> 
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-red-200 h-full bg-gradient-to-r from-red-400 to-red-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={solana} className="w-6 h-6"></img>Solana
                  <div className="badge bg-red-700">-2.45%</div>
                </h2>
                <p>Trade the BTC-Solana Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-red-100 text-red-900 font-bold ring-2 ring-red-400 px-3">$34.23</div> 
                  <div className="badge bg-red-100 text-red-900 font-bold ring-2 ring-red-400 px-3 ">Low</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Screener4