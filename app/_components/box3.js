import React from "react";

import { motion } from "framer-motion";

export default function Box3() {
  const container = {
    hidden: {
      opacity: 0,
      height: "0px",
    },
    visible: {
      opacity: 1,
      height: "240px",
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      x: 12,
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: {
      filter: "blur(0px)",
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-[100%] flex items-center  rounded-2xl bg-orange-500"
    >
      {Array.from("Eliasz", (el) => (
        <motion.div
          drag
          key={el}
          variants={item}
          className=" flex justify-center items-center "
        >
          <p className="text-slate-100 font-extrabold italic text-9xl">{el}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
