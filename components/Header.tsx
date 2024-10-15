"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ClipboardList } from 'lucide-react'
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key="header-content"
          initial={false}
          animate={{
            height: isScrolled ? 'auto' : '48px',
            width: isScrolled ? 'auto' : '180px',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex items-center justify-center overflow-hidden rounded-lg bg-gray-800 px-4 py-2 shadow-lg"
        >
          {isScrolled ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-4"
            >
              <Input
                className="w-64 bg-transparent py-2 text-sm text-white focus-visible:outline-none"
                placeholder="Paste tweet link here..."
              />
              <button className="flex items-center justify-center gap-2 rounded-md bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600">
                <span className="text-sm font-medium text-white">Paste</span>
                <ClipboardList size={18} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">Postable</span>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.header>
  )
}