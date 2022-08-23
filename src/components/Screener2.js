import React from "react";
import eon from "../assets/eon.svg"
import ada from "../assets/ada.svg"
import xrp from "../assets/xrp.svg"
import trx from "../assets/trx.svg"
import qlc from "../assets/qlc.svg"

const Screener2 = () => {
    return (
<div className="">
          <div className="py-3 flex flex-row content-center">
            <div className="px-1">
              <h1 className="text-2xl px-1 font-bold flex flex-row items-center"><div className="px-2"><div className="w-2 h-2 bg-green-400 ring-2 ring-green-300 rounded-full dark:border-gray-900 dark:bg-gray-700"></div></div>Scr2</h1>
            </div>
            <div className="px-1 py-1">
              <h1 className="badge text-2xl border-green-900 text-green-900 bg-green-300 px-2 text-xs font-bold">SMA-14</h1>
            </div>
            <div className="px-1 py-1">
              <h1 className="badge border-green-900 text-green-900 bg-green-300 text-2xl px-2 text-xs font-bold">SMA-21</h1>
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
                  <img src={eon} className="w-6 h-6"></img>EOS
                  <div className="badge bg-green-700">+15.55%</div>
                </h2>
                <p>Trade the BTC-EOS Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$1.78</div> 
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
                <p>Trade the BTC-Cardano Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-red-100 text-red-900 font-bold ring-2 ring-red-400 px-3">$0.44</div> 
                  <div className="badge bg-red-100 text-red-900 font-bold ring-2 ring-red-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-green-200 h-full bg-gradient-to-r from-green-400 to-green-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={xrp} className="w-6 h-6"></img>Xrpdown
                  <div className="badge bg-green-700">+3.78%</div>
                </h2>
                <p>Trade the BTC-XRPDOWN Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$0.0009</div> 
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">Low</div>
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
                <p>Trade the BTC-TRXDOWN Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$1.12</div> 
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-items-start">
            <div className="justify-items-start card shadow-lg shadow-green-200 h-full bg-gradient-to-r from-green-400 to-green-300 ">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={qlc} className="w-6 h-6"></img>QLC
                  <div className="badge bg-green-700">+133.55%</div>
                </h2>
                <p>Trade the BTC-QLC Pair now on Binance</p>
                <div className="card-actions justify-end">
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3">$0.026</div> 
                  <div className="badge bg-green-100 text-green-900 font-bold ring-2 ring-green-400 px-3 ">High</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Screener2