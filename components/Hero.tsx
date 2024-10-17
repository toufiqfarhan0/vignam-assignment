"use client";

import { AnimatedModal } from "./Animate-Modal";
import { InputWithPaste } from "./ui/input";

export default function Hero() {
  return (
    <div className="flex min-h-screen md:h-[600px] flex-col items-center justify-center text-center">
      <h1 className="mb-6 text-6xl font-extrabold text-gray-800">
        Convert <span className="text-purple-800">Tweets</span>{" "}
        <span className="flex mt-2">into Engaging Social</span>{" "}
        <span className="flex mt-2">Media Posts, Instantly!</span>
      </h1>
      <h1 className="text-lg text-neutral-700 font-semibold">
        Paste your tweet link below to get started for FREE
      </h1>
      <div className="flex items-center space-x-2 mt-2">
        <InputWithPaste
          className="min-w-80 items-center gap-2 rounded-xl border-transparent bg-white shadow-xl py-2 pe-2 ps-4"
          placeholder="Paste tweet link here..."
        />
      </div>
      <div className="mt-4">
        <p className="text-sm font-bold text-slate-400">
          No signup, no credit card, no crap!
        </p>
      </div>
      <AnimatedModal />
    </div>
  );
}
