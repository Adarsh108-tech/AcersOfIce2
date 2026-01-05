"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Clouds() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const cloudBack = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const cloudMid = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const cloudFront = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);

  return (


   <div ref={ref} className="relative w-full">
  <div className="absolute -top-32 left-0 w-full h-[28vh] md:h-[32vh] overflow-hidden z-30">
    {/* BACK */}
    <motion.div
      className="absolute inset-0 bg-repeat-x"
      style={{
        y: cloudBack,
        backgroundImage: "url('/clouds/cloud-layer1.png')",
        backgroundSize: "auto 100%",
      }}
    />

    {/* MID */}
    <motion.div
      className="absolute inset-0 bg-repeat-x"
      style={{
        y: cloudMid,
        backgroundImage: "url('/clouds/cloud-layer2.png')",
        backgroundSize: "auto 100%",
      }}
    />

    {/* FRONT */}
    <motion.div
      className="absolute inset-0 bg-repeat-x"
      style={{
        y: cloudFront,
        backgroundImage: "url('/clouds/cloud-layer3.png')",
        backgroundSize: "auto 100%",
      }}
    />

    {/* Fade at bottom */}
    <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-white"></div>
  </div>
</div>

  );
}
