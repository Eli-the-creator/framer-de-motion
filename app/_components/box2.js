"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Box2() {
  const [hover, setHover] = useState(false);
  const constraintsRef = useRef(null);
  return (
    <motion.div
      ref={constraintsRef}
      className="h-[400px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-24"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={constraintsRef}
        transition={{
          type: "spring",
          stiffness: 160,
          duration: 0.2,
        }}
        className="w-[160px] h-[160px] rounded-full bg-sky-300 "
      ></motion.div>
    </motion.div>
  );
}
