import React, { useEffect, useState } from "react";
import Diplodocus from "./Diplodocus";
import tunder from "../assets/images/giphy.webp";
import ReactAudioPlayer from "react-audio-player";
import raor from "../assets/audio/roar.mp3"
const Tregs = ({ color, name, img }) => {
  const [change, setChange] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChange(true);
    }, 1500);
  }, []);

  return (
    <div>
      {change ? (
        <Diplodocus color={color} name={name} img={img} />
      ) : (
        <div className=" min-h-screen w-full">
          <img
            src={tunder}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />

          <ReactAudioPlayer src={raor} autoPlay controls />
        </div>
      )}
    </div>
  );
};

export default Tregs;
