"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Boxd1() {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{
        x: 0,
        height: "48px",
      }}
      animate={{
        scale: !hover ? 1 : 1.2,
        height: !hover ? "40px" : "380px",
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        duration: 2,
      }}
      className="h-[380px] w-[380px] bg-sky-300 rounded-xl "
    >
      <p className="text-center text-2xl font-extrabold">Hover me</p>
    </motion.div>
  );
}
