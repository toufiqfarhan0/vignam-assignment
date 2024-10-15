

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div className="flex flex-col gap-4 h-[50vh] md:h-[75vh] size-screen mx-auto justify-center items-center">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.3 }}
        initial={{ y: -20, opacity: 0 }}
        className="max-w-7xl mx-auto px-4 flex flex-col gap-4 items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="tracking-tighter text-6xl md:text-7xl xl:text-8xl text-center font-bold my-2">
            <span className="font-bold bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Convert
            </span>{" "}
            into Engaging 
          </h1>
          <h1 className="tracking-tighter text-6xl md:text-7xl xl:text-8xl text-center font-bold my-2">
          Social Media Posts, Instantly!
          </h1>
        </div>
        <p className="text-primary/80 max-w-lg text-center tracking-tight md:text-lg font-light">
          A platform where you'll find the right content to help you improve your skills and grow your knowledge.
        </p>
      </motion.div>
    </div>
  );
}
