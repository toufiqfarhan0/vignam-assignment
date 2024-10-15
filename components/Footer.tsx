"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-gray-100 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          © 2023 Postable Clone. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
