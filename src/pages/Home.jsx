import React from "react";
import leaf1 from "../assets/images/leaf1.png"
import bolt1 from "../assets/images/fire.png"
import dino1 from "../assets/images/dino1.png"
import dino2 from "../assets/images/dino2.png"
import volc from "../assets/images/volc.png"
const Home = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 relative p-2 lg:px-8 min-h-screen lg:h-screen overflow-hidden">
      <div className=" pt-24 element_style z-40">
        <h1 className=" h1_font text-white font-bold">
          Gain passive income by leveraging 
          <span className=" text-pr"> Jurassic's</span> Financial protocol
        </h1>
        <p className=" pt-8 text-gray-400">
          Jurassic Nodes is a new protocol on the Avalanche ecosystem. The price
          of a node is 20 $DINO with daily rewards of 1 $DINO, or 5% a day.
        </p>
        <p className=" text-gray-400">
          Keep in mind: if the price of the token doubles after its creation,
          you will only need 10 days instead of 20 to get your investment back.
        </p>
        <p className=" text-gray-400">
          The creation of nodes will allow you to get passive income for{" "}
          <span className=" text-pr font-semibold">LIFE.</span>
        </p>
        <div className=" pt-7 flex gap-5">
          <button className=" px-8 rounded-xl text-white font-semibold text-sm uppercase py-3 bg-pr ">
            Get Started
          </button>
          <button className=" px-8 rounded-xl text-pr font-medium text-sm uppercase py-3 bg-transparent border border-pr ">
            BUY $Dino
          </button>
        </div>
      </div>
      <img src={leaf1} className=" absolute decoration1" alt="" />
      <img src={bolt1} className=" absolute decoration2 hidden lg:block" alt="" />
      <img src={bolt1} className=" absolute decoration3 hidden lg:block" alt="" />
      <img src={leaf1} className=" absolute decoration4" alt="" />
      <img src={dino1} className=" absolute decoration5 hidden lg:block" alt="" />
      <img src={dino2} className=" absolute decoration6 hidden lg:block" alt="" />
      <img src={volc} className=" absolute decoration7" alt="" />
    </div>
  );
};

export default Home;
