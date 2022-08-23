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
      <h2 className="text-center text-yellow-500 card-title text-4xl py-4">
        <img src={binc} className="w-16 h-16"></img>
        Screeners
        <div className="badge bg-white border-green-600 text-green-700 px-3"><div className="w-1 h-1 bg-green-400 ring-2 ring-green-300 rounded-full dark:border-gray-900 dark:bg-gray-700"></div><div className="px-1"></div>Active</div>
      </h2>
      <div className="text-2xl py-2 font-bold text-black">
        <p className="text-md text-gray-500 text-3xl font-bold py-2">Top 3</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
          <div className="justify-items-start rounded-lg bg-black text-white shadow-lg px-2 py-2">
            <div className="justify-items-start card">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  <img src={eth} className="w-6 h-6"></img>
                  Ethereum
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
          <div className="justify-items-start rounded-lg bg-black text-white shadow-lg px-2 py-2">
            <div className="justify-items-start card">
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
          <div className="justify-items-start rounded-lg bg-black text-white shadow-lg px-2 py-2">
            <div className="justify-items-start card">
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
        </div>
      </div>
      <div className="grid grid-rows-7 gap-2">
        <p className="text-lg font-bold text-gray-700 text-center py-4">Subscribe to see <span className="text-red-600">all</span> screeners. Pricing starts at <span className="text-indigo-600">$4 a month per screener.</span></p>
        <Screener1 />
        <Screener2 />
        <Screener3 />
        <Screener4 />
        <Screener5 />
        {/* <Screener5 /> */}
      </div>
      <footer className="footer items-center p-4 bg-white text-lg text-black text-neutral-content">
  <div className="items-center grid-flow-col">
    <p>Copyright PingTrader© 2022 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a> 
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </div>
</footer>
    </div>
  );
}

export default App;
