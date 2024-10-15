"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { ClipboardList, MessageCircle } from "lucide-react";

export default function Appbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed left-1/2 top-8 z-20 flex w-fit -translate-x-1/2 items-center justify-between self-stretch rounded-[20px] bg-neutral-900 px-5 py-3 cursor-default"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        damping: 10,
      }}
    >
      <AnimatePresence initial={false}>
        {isScrolled ? (
          <motion.div
            key="full-navbar"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 text-white"
          >
            <Input
              className="w-32 bg-transparent py-2 text-sm text-neutral-10 focus-visible:bg-transparent focus-visible:outline-none active:bg-transparent md:w-80 lg:w-96"
              placeholder="Paste tweet link here.."
            />
            <button className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-white/10 px-4 text-white transition-colors hover:bg-white/20">
              <span className="text-lg font-medium">Paste</span>
              <ClipboardList size={18} />
            </button>
          </motion.div>
        ) : (
          <motion.span
            key="postable-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg md:text-2xl font-bold tracking-tight text-white flex items-center gap-4"
          >
            <MessageCircle size={24} />
            Postable
          </motion.span>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
