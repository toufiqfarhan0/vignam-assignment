"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Zap } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description:
      "Plan your posts in advance and schedule them for the perfect time.",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description:
      "Automate your social media presence and save hours every week.",
  },
  {
    icon: Zap,
    title: "Boost Engagement",
    description:
      "Increase your reach and engagement with optimized posting times.",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          Our Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <feature.icon className="mb-4 h-12 w-12 text-blue-500" />
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
