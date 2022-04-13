import React from "react";
import { GoThreeBars } from "react-icons/go";
const Topbar = ({setOpenSidebar}) => {
  return (
    <div className=" h-24 bg-black w-full flex items-center justify-end pr-10 fixed top-0 left-0 z-50">
      <div>
        <button className=" px-3 rounded-xl text-white font-semibold text-sm uppercase py-3 bg-pr cursor-pointer">
          Connect Wallet
        </button>
      </div>
      <div className=" block lg:hidden pl-5">
        <GoThreeBars onClick={()=>setOpenSidebar(false)} className=" cursor-pointer text-white w-7 h-7" />
      </div>
    </div>
  );
};

export default Topbar;
