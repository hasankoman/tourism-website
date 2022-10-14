import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="w-full h-full home-page-bg page-bg flex overflow-x-hidden"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 1.5, ease: "easeInOut", when: "beforeChildren" }}
    >
      <div className="page justify-between ">
        <div className="sm:min-w-[600px] sm:w-[600px] flex flex-col justify-center items-center text-center mt-20 bg-primary bg-opacity-90 sm:bg-opacity-0">
          <span className="text-base sm:text-[35px] leading-[34px]">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <span className="text-[80px] sm:text-[240px] leading-[100px] sm:leading-[260px]">
            SPACE
          </span>
          <p className="text-[15px] sm:text-[25px] sm:leading-9 leading-6 w-[327px] ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className=" w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] my-10 lg:mt-32 xl:mt-60 rounded-full  opacity-animation  outline-double  bg-primary flex justify-center items-center sm:hover:ring-[50px] hover:ring-[25px] ring-opacity-20 ring-third ring-offset-0 transition-all">
          <a
            href="#!"
            className="w-full h-full rounded-full flex justify-center items-center"
          >
            <span className="text-third text-[32px] tracking-widest">
              EXPLORE
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
