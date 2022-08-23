import React from "react";
import eth from "../assets/eth.svg"
import ada from "../assets/ada.svg"
import link from "../assets/link.svg"
import trx from "../assets/trx.svg"
import solana from "../assets/sol.svg"

const Screener3 = () => {
    return (
<div className="">
          <div className="py-3 flex flex-row content-center">
            <div className="px-1">
              <h1 className="text-2xl px-1 font-bold flex flex-row items-center"><div className="px-2"><div className="w-2 h-2 bg-green-400 ring-2 ring-green-300 rounded-full dark:border-gray-900 dark:bg-gray-700"></div></div>Scr3</h1>
            </div>
            <div className="px-1 py-1">
              <h1 className="badge text-2xl border-green-900 text-green-900 bg-green-300 px-2 text-xs font-bold">SMA-17</h1>
            </div>
            <div className="px-1 py-1">
              <h1 className="badge border-yellow-900 text-yellow-900 bg-yellow-300 text-2xl px-2 text-xs font-bold">EMA-25</h1>
            </div>
            <div className="px-1 py-1">
              <h1 className="badge border-blue-900 text-blue-900 bg-blue-300 text-2xl px-2 text-xs font-bold">ADXM-80</h1>
            </div>
          </div>
        <div className="grid sm:grid-cols-5 grid-cols-1 gap-2 items-center rounded-xl">
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-green-200 h-full bg-gradient-to-r from-green-400 to-green-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={eth} className="w-6 h-6"></img>Ethdown
                  <div className="badge bg-green-700">+12.66%</div>
                </h2>
                <p className="text-md">Trade the BTC-ETHDOWN Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$0.96</div> 
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-green-200 h-full bg-gradient-to-r from-green-400 to-green-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={ada} className="w-6 h-6"></img>Adadown
                  <div className="badge bg-green-700">+4.67%</div>
                </h2>
                <p className="text-md">Trade the BTC-ADADOWN Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$0.004</div> 
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-green-200 h-full bg-gradient-to-r from-green-400 to-green-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={link} className="w-6 h-6"></img>Linkdown
                  <div className="badge bg-green-700">+4.98%</div>
                </h2>
                <p className="text-md">Trade the BTC-LINKDOWN Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$0.009</div> 
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-green-200 h-full bg-gradient-to-r from-green-400 to-green-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={trx} className="w-6 h-6"></img>TRXDOWN
                  <div className="badge bg-green-700">+3.55%</div>
                </h2>
                <p className="text-md">Trade the BTC-TRXDOWN Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$1.12</div> 
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-red-200 h-full bg-gradient-to-r from-red-400 to-red-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={ada} className="w-6 h-6"></img>Cardano
                  <div className="badge bg-red-700">-3.67%</div>
                </h2>
                <p className="text-md">Trade the BTC-Cardano Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-red-100 text-red-900 font-bold ring-2 ring-red-400 px-3">$0.44</div> 
                  <div className="badge bg-red-100 text-red-900 font-bold ring-2 ring-red-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Screener3