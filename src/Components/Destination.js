import React, { useEffect, useRef, useState } from "react";
import data from "../Helper/data.json";
import DestinationBody from "./DestinationBody";
import DestinationImage from "./DestinationImage";
import { motion } from "framer-motion";

export default function Destination() {
  const [onIndex, setOnIndex] = useState(0);
  const [destinations, setdestinations] = useState(data.destinations);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   ref.current.classList.add("active-destination");
  //   ref.current.classList.remove("opacity-0");
  // }, [onIndex]);

  const handleHeaderClick = (d) => {
    const index = data.destinations.indexOf(d);

    if (index !== onIndex) {
      setIsActive(true);
      setTimeout(() => {
        setOnIndex(index);
        setIsActive(false);
      }, 800);
    }
  };
  return (
    <div className="flex w-11/12 2xl:10/12 mx-auto flex-col justify-center items-center 2xl:flex-row">
      <DestinationImage
        destinations={destinations}
        onIndex={onIndex}
        isActive={isActive}
      />

      <div className="overflow-x-hidden flex flex-col justify-center items-center text-center 2xl:w-[600px] self-start">
        <header>
          <ul className="flex gap-x-8">
            {data.destinations.map((destination, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => handleHeaderClick(destination)}
                    className={` text-sm sm:text-[23px] tracking-[2.7px] ease-in-out transition-all duration-500 delay-500 uppercase border-b-[3px]  border-opacity-0 border-third hover:transition-none hover:border-opacity-60 ${
                      destination.name === destinations[onIndex].name
                        ? "!border-opacity-100 2xl:border-primary "
                        : ""
                    }`}
                  >
                    {destination.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </header>
        <DestinationBody
          destinations={destinations}
          onIndex={onIndex}
          isActive={isActive}
        />
      </div>
    </div>
  );
}
