import React, { useEffect, useRef } from "react";

export default function DestinationBody({ destinations, onIndex, isActive }) {
  const ref = useRef();
  useEffect(() => {
    setTimeout(() => ref.current.classList.remove("active-destination"), 500);
  }, [destinations[onIndex].name]);
  useEffect(() => {
    ref.current.classList.remove("-translate-x-full");
    ref.current.classList.add("active-destination");
  }, [isActive]);
  return (
    <div
      className={`transition-all duration-700 -translate-x-full ease-in-out opacity-animation-destination`}
      ref={ref}
    >
      <h2 className="text-[56px] sm:text-[100px] uppercase tracking-wider my-2">
        {destinations[onIndex].name}
      </h2>
      <p className="leading-8 text-lg sm:text-2xl">
        {destinations[onIndex].description}
      </p>
      <div className="w-full h-[1px] bg-gray-500 opacity-60 mt-12 mb-8"></div>
      <div className="uppercase flex flex-col sm:flex-row justify-center 2xl:justify-start gap-5 sm:gap-40 text-[20px]">
        <div className="flex flex-col ">
          <span className="opacity-60">AVP. DISTANCE</span>
          <span className="text-4xl sm:text-3xl">
            {destinations[onIndex].distance}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="opacity-60">EST. TRAVEL TIME</span>
          <span className="text-4xl sm:text-3xl mb-9">
            {destinations[onIndex].travel}
          </span>
        </div>
      </div>
    </div>
  );
}
