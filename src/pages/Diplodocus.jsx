import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Diplodocus = ({ color, name, img }) => {
  const [count, setCount] = useState(1);
  return (
    <div className=" min-h-screen w-full">
      <div className=" pt-36 w-full">
        <div className=" w-full flex items-center flex-col justify-center">
          <div className=" w-full max_width">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className=" rounded-xl bounce_background overflow-hidden">
                {img}
              </div>
              <div className=" rounded-xl bg-sr p-5">
                <h5 className=" text-white">
                  Name:{" "}
                  <span
                    className={
                      color
                        ? " text-pr font-semibold"
                        : " text-tr font-semibold"
                    }
                  >
                    {name}
                  </span>
                </h5>
                <h5 className=" text-white pt-4">
                  Description:{" "}
                  <span className=" text-font text-sm ">
                    Welcome to the diplodocus, this species is not very
                    threatening, but you will be able to take advantage of the
                    benefits that their eggs bring you...{" "}
                  </span>
                </h5>
                <h5 className=" pt-4 text-white">
                  Price: <span className=" font-bold">$DINO</span>
                </h5>
                <h5 className=" pt-4 text-white">
                  Daily rewards:<span className=" font-bold"> 1 $DINO</span>
                </h5>
              </div>
            </div>
            <div className=" rounded-xl bg-sr p-5 mt-5 gap-8 flex items-center">
              <div>
                <h1 className=" font-semibold text-3xl text-white">0</h1>
                <p className=" text-font">All Diplo eggs</p>
              </div>
              <div>
                <h1 className=" font-semibold text-3xl text-white">0/50</h1>
                <p className=" text-font">My Diplo eggs</p>
              </div>
              <div>
                <h1 className=" font-semibold text-3xl text-white">
                  0.00 $DINO
                </h1>
                <p className=" text-font">Pending rewards</p>
              </div>
              <div>
                <button className=" bg-font uppercase text-sm px-8 py-3 rounded-xl text-white font-semibold">
                  Connect First
                </button>
              </div>
            </div>
            <div className=" rounded-xl bg-sr p-5 mt-5 gap-3 flex items-center flex-col">
              <div>
                <h1 className=" font-semibold text-2xl text-white">
                  Referral link
                </h1>
              </div>
              <div className=" flex items-center justify-center gap-8">
                <div>
                  <h1 className=" font-semibold text-3xl text-white">0</h1>
                  <p className=" text-font">Referred eggs</p>
                </div>
                <div>
                  <div className=" flex items-end gap-1">
                    <h1 className=" font-semibold text-3xl text-white">0</h1>{" "}
                    <span className=" text-font">$DINO</span>
                  </div>
                  <p className=" text-font">Rewards</p>
                </div>
              </div>
              <div>
                <p className=" text-font">
                  Share your referral link to get rewards on eggs created by
                  your affiliates.
                </p>
              </div>
              <div>
                <button className=" bg-font text-sm px-8 py-3 uppercase rounded-xl border border-pr text-white font-semibold">
                  Connect First
                </button>
              </div>
            </div>
            <div className=" rounded-xl bg-black p-5 border-2 border-pr mt-5 gap-3 flex items-center flex-col">
              <div>
                <h1 className=" font-semibold text-2xl text-white">
                  Create Diplo eggs
                </h1>
              </div>
              <div className=" flex items-center gap-2 my-3">
                <h2 className=" text-gray-50">Name: </h2>
                <input
                  type="text"
                  className=" bg-transparent border-2 border-pr p-2 rounded-xl outline-none"
                />
              </div>
              <div className=" flex items-center gap-4 my-3">
                {count > 1 ? (
                  <button
                    onClick={() => setCount(count - 1)}
                    className=" py-2 px-2 rounded-full text-white font-semibold bg-pr"
                  >
                    <AiOutlineMinus className="w-5 h-5" />
                  </button>
                ) : (
                  <button className=" py-2 px-2 rounded-full text-white font-semibold bg-pr">
                    <AiOutlineMinus className="w-5 h-5" />
                  </button>
                )}
                <h1 className=" text-white font-semibold text-2xl">{count}</h1>
                <button
                  onClick={() => setCount(count + 1)}
                  className=" py-2 px-2 rounded-full text-white font-semibold bg-pr"
                >
                  <AiOutlinePlus className="w-5 h-5" />
                </button>
              </div>
              <div>
                <button className=" bg-font text-sm px-8 py-3 uppercase rounded-xl border border-pr text-white font-semibold">
                  Connect First
                </button>
              </div>
              <p className=" text-white text-sm">Not enough $DINO</p>
            </div>
            <div className=" rounded-xl bg-sr p-5 my-5 gap-3 flex items-center flex-col">
              <h1 className=" font-semibold text-2xl text-white">
                Your Diplo eggs
              </h1>
              <p className="  text-font">You don't have any node yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diplodocus;
