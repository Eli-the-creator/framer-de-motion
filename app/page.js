"use client";
import { motion } from "framer-motion";

import Boxd1 from "./_components/boxd1";
import Box2 from "./_components/box2";
import Box3 from "./_components/box3";
import { useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);

  return (
    <main className=" mx-24 mt-24">
      <section className="h-[400px] mb-12">
        <Boxd1 />
      </section>

      <Box2 />

      <div className="pb-12">
        <Box3 />
      </div>

      <motion.div
        initial={{}}
        animate={{
          scale: [1, 2, 4, 2, 1],
        }}
        transition={{
          duration: 2,
        }}
        className="w-16 h-16 bg-emerald-500"
      ></motion.div>
    </main>
  );
}
