"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedModal() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="group mx-auto w-full mt-6 hidden origin-top scale-[0.6] flex-col items-center justify-center gap-4 rounded-[42px] bg-transparent px-4 py-6 transition-colors hover:bg-[#F9F4FE] sm:flex md:-mb-40">
        <h1 className="italic text-5xl font-light">
            Try Simple Tweet 
        </h1>
      <div className="flex justify-center items-center">
        {images.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 9,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="1000"
              height="400"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
            <p className="text-left text-sm font-normal text-[#14171A] mt-2">
              Get scroll-stopping posts from your tweets with zero design
              experience, only with Postable.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
