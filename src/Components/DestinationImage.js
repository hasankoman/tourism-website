import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

export default function DestinationImage({ destinations, onIndex, isActive }) {
  const ref = useRef();

  useEffect(() => {
    setTimeout(
      () => ref.current.classList.remove("active-destination-image"),
      500
    );
  }, [destinations[onIndex].name]);
  useEffect(() => {
    ref.current.classList.remove("opacity-0");

    ref.current.classList.add("active-destination-image");
  }, [isActive]);

  return (
    <div className="2xl:mr-40 2xl:mt-10 pb-10 overflow-hidden 2xl:overflow-visible">
      <figure
        className="w-[250px] h-[250px] sm:w-[445px] sm:h-[445px] 2xl:h-[600px] 2xl:w-[600px] transition-all opacity-0 duration-700 ease-in-out"
        ref={ref}
      >
        <img
          src={destinations[onIndex].images.png}
          className="w-full h-full"
          alt=""
        />
      </figure>
    </div>
  );
}
