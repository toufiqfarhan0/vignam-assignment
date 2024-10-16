"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { InputWithPaste } from "@/components/ui/input";

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center min-w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 50 }}
    >
      <motion.div
        layout
        className="mt-4 overflow-hidden rounded-lg bg-neutral-900 shadow-xl flex items-center"
        initial={false}
        animate={{
          height: isScrolled ? "auto" : "48px",
          width: isScrolled ? "auto" : "180px",
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center space-x-4 px-4 py-2">
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="text-xl font-extrabold text-white italic">Postable</span>
        </div>

        <AnimatePresence mode="wait">
          {isScrolled && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center space-x-2 p-2"
            >
              <InputWithPaste
                className="w-80 items-center gap-2 rounded-xl border border-transparent bg-neutral-800 py-2 pe-2 ps-4 transition-colors focus-within:border-white/10 hover:bg-neutral-700 md:flex"
                placeholder="Paste tweet link here..."
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
