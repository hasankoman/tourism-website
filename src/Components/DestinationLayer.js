import React, { useState } from "react";
import Destination from "./Destination";
import { motion } from "framer-motion";

export default function DestinationLayer() {
  return (
    <motion.div
      className="w-full h-100vh sm:h-full destination-page-bg page-bg flex sm:overflow-hidden"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ width: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="page !w-11/12 !justify-center">
        <div className="2xl:max-h-[756px] mt-5">
          <div className="mb-20 flex justify-center sm:justify-start ">
            <h2 className="text-lg sm:text-2xl inline bg-primary px-3 py-2 tracking-[4.72px] ">
              <span className="opacity-25 mr-6">01</span>
              <span>PICK YOUR DESTINATION</span>
            </h2>
          </div>
          <Destination />
        </div>
      </div>
    </motion.div>
  );
}
