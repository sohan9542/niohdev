import React from "react";
import leaf1 from "../assets/images/fire.png";
const Dashboard = () => {
  return (
    <div className=" min-h-screen w-full relative overflow-hidden">
      <div className=" pt-36 w-full relative z-10">
        <h1 className="  element_style font-semibold text-white text-3xl text-center w-full">
          Analytics
        </h1>
        <div className=" element_style my-10 w-full flex items-center justify-center">
          <div className="  max_width grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className=" border-2 cursor-pointer rounded-xl border-pr bg-black p-4">
              <h1 className=" text-white text-3xl font-bold">0.275313</h1>
              <h1 className=" text-white text-3xl font-bold">USD</h1>
              <h6 className=" text-font pt-2">$DINO price (Coingecko)</h6>
            </div>
            <div
              className=" rounded-xl  p-4"
              style={{ background: "rgb(34, 36, 35)" }}
            >
              <h1 className=" text-white text-3xl font-bold">0</h1>

              <h6 className=" text-font pt-2">All eggs</h6>
            </div>
            <div
              className=" rounded-xl  p-4"
              style={{ background: "rgb(34, 36, 35)" }}
            >
              <h1 className=" text-white text-3xl font-bold">0</h1>

              <h6 className=" text-font pt-2">Diplodocus eggs</h6>
            </div>
            <div
              className=" rounded-xl  p-4"
              style={{ background: "rgb(34, 36, 35)" }}
            >
              <h1 className=" text-white text-3xl font-bold">0</h1>

              <h6 className=" text-font pt-2">T-Rex eggs</h6>
            </div>
            <div
              className=" rounded-xl  p-4"
              style={{ background: "rgb(34, 36, 35)" }}
            >
              <div className=" flex items-center gap-1">
                <h1 className=" text-white text-3xl font-bold">20</h1>

                <h6 className=" text-font  uppercase">$Dino</h6>
              </div>
              <h6 className=" text-font pt-2  ">Diplodocus egg price</h6>
            </div>
            <div
              className=" rounded-xl  p-4"
              style={{ background: "rgb(34, 36, 35)" }}
            >
              <h1 className=" text-white text-2xl font-semibold">
                20 $DINO + 20 Diplo eggs
              </h1>

              <h6 className=" text-font pt-2  ">T-rex egg price</h6>
            </div>
          </div>
        </div>
        <h1 className=" element_style font-semibold text-white text-3xl text-center w-full">
          My data
        </h1>
        <div className=" element_style my-10 w-full flex flex-col items-center justify-center  px-10">
          <div className="max_width  grid grid-cols-1 lg:grid-cols-3 gap-4 w-full px-3 lg:px-0">
            <div
              className=" rounded-xl  p-4"
              style={{ background: "rgb(34, 36, 35)" }}
            >
              <h1 className=" text-white text-3xl font-bold">0</h1>

              <h6 className=" text-font pt-2">My eggs</h6>
            </div>
            <div
              className=" rounded-xl  p-4"
              style={{ background: "rgb(34, 36, 35)" }}
            >
              <h1 className=" text-white text-3xl font-bold">0/50</h1>

              <h6 className=" text-font pt-2">My Diplodocus eggs</h6>
            </div>
            <div
              className=" rounded-xl  p-4"
              style={{ background: "rgb(34, 36, 35)" }}
            >
              <h1 className=" text-white text-3xl font-bold">0/20</h1>

              <h6 className=" text-font pt-2">My T-Rex eggs</h6>
            </div>
            <div
              className=" rounded-xl  p-4"
              style={{ background: "rgb(34, 36, 35)" }}
            >
              <div className=" flex items-center gap-1">
                <h1 className=" text-white text-3xl font-bold">0.00</h1>

                <h6 className=" text-font  uppercase">$Dino</h6>
              </div>
              <h6 className=" text-font pt-2  ">Balance of $DINO</h6>
            </div>

            <div className=" border-2 rounded-xl border-pr cursor-pointer bg-black p-4">
              <div className=" flex items-end gap-1">
                <h1 className=" text-white text-3xl font-bold">0.00</h1>
                <h1 className=" text-font text-lg font-semibold">$DINO</h1>
              </div>
              <h6 className=" text-font pt-2">Diplo eggs rewards</h6>
            </div>
            <div className=" border-2 rounded-xl border-pr cursor-pointer bg-black p-4">
              <div className=" flex items-end gap-1">
                <h1 className=" text-white text-3xl font-bold">0.00</h1>
                <h1 className=" text-font text-lg font-semibold">$DINO</h1>
              </div>
              <h6 className=" text-font pt-2">T-Rex eggs rewards</h6>
            </div>
          </div>
        </div>
      </div>
      <img
        src={leaf1}
        className=" absolute dashboard1 hidden lg:block"
        alt=""
      />
      <img
        src={leaf1}
        className=" absolute dashboard2 hidden lg:block"
        alt=""
      />
      <img
        src={leaf1}
        className=" absolute dashboard3 hidden lg:block"
        alt=""
      />
    </div>
  );
};

export default Dashboard;
