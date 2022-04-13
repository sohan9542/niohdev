import React from "react";
import camp from "../assets/images/camp.png";
const DinoCamp = () => {
  return (
    <div className=" min-h-screen w-full">
      <div className="pt-32 w-full">
        <div className=" w-full flex items-center justify-center">
          <div className="  w-full max_width">
            <div className=" bounce_background rounded-xl overflow-hidden">
              <img src={camp} alt="" />
            </div>
            <div className=" rounded-xl bg-sr p-5 my-5 gap-3 flex items-center flex-col">
              <h1 className=" font-semibold text-2xl text-white">Dino Camp</h1>
              <p className="  text-font text-center">
                The Dino camp is over. Thank you all for participating! You were
                all great. You can always share your referral link! 🦖🦖🦖
              </p>
            </div>
            <div className=" rounded-xl bg-sr p-5 my-5 gap-2 flex items-center flex-col">
              <h1 className=" font-semibold text-2xl text-white">
                Leaderboard
              </h1>
              <div className=" my-1 px-3 py-4 border-tr border-2 w-full rounded-xl flex items-center justify-between">
                <div className=" flex items-center">
                  <div className=" w-10 h-10 rounded-full bg-tr text-2xl text-white font-semibold flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  N/A
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  N/A
                </div>
                <div className=" flex items-center justify-center  ">
                  <button className=" py-2 px-3 rounded-md bg-transparent border border-tr outline-none text-tr uppercase">
                    Copy referral link
                  </button>
                </div>
              </div>
              <div className=" my-1 px-3 py-4 border-font border-2 w-full rounded-xl flex items-center justify-between">
                <div className=" flex items-center">
                  <div className=" w-10 h-10 rounded-full bg-font text-2xl text-white font-semibold flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  N/A
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  N/A
                </div>
                <div className=" flex items-center justify-center  ">
                  <button className=" py-2 px-3 rounded-md bg-transparent border border-font outline-none text-font uppercase">
                    Copy referral link
                  </button>
                </div>
              </div>
              <div className=" my-1 px-3 py-4 border-tr border-2 w-full rounded-xl flex items-center justify-between">
                <div className=" flex items-center">
                  <div className=" w-10 h-10 rounded-full bg-tr text-2xl text-white font-semibold flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  N/A
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  N/A
                </div>
                <div className=" flex items-center justify-center  ">
                  <button className=" py-2 px-3 rounded-md bg-transparent border border-tr outline-none text-tr uppercase">
                    Copy referral link
                  </button>
                </div>
              </div>
            </div>
            <div className=" rounded-xl bg-sr p-5 my-5 gap-2 flex items-center flex-col">
              <h1 className=" font-semibold text-2xl text-white">Cashprizes</h1>
              <div className=" my-1 px-3 py-4 border-tr border-2 w-full rounded-xl flex items-center justify-between">
                <div className=" flex items-center">
                  <div className=" w-10 h-10 rounded-full bg-tr text-2xl text-white font-semibold flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  1 T-Rex egg
                </div>
                <div className=" flex items-center justify-center text-white text-xl pr-5">
                  1st
                </div>
              </div>
              <div className=" my-1 px-3 py-4 border-font border-2 w-full rounded-xl flex items-center justify-between">
                <div className=" flex items-center">
                  <div className=" w-10 h-10 rounded-full bg-font text-2xl text-white font-semibold flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  10 Diplo eggs
                </div>
                <div className=" flex items-center justify-center text-white text-xl pr-5">
                  2nd
                </div>
              </div>
              <div className=" my-1 px-3 py-4 border-tr border-2 w-full rounded-xl flex items-center justify-between">
                <div className=" flex items-center">
                  <div className=" w-10 h-10 rounded-full bg-tr text-2xl text-white font-semibold flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  5 Diplo eggs
                </div>
                <div className=" flex items-center justify-center text-white text-xl pr-5">
                  3rd
                </div>
              </div>
              <div className=" my-1 px-3 py-4 border-pr border-2 w-full rounded-xl flex items-center justify-between">
                <div className=" flex items-center">
                  <div className=" w-10 h-10 rounded-full bg-pr text-2xl text-white font-semibold flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className=" flex items-center justify-center text-white text-xl ">
                  1 T-Rex egg
                </div>
                <div className=" flex items-center justify-center text-white text-xl pr-5">
                  Random Player
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoCamp;
