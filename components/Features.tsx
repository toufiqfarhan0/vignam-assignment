"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/featurecard";

export function Features() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl mx-auto text-5xl md:text-6xl font-light text-neutral-800 dark:text-neutral-200 font-sans">
        Our Features
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    src: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-1_zepkcz.webp",
  },
  {
    src: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-2_xfgklf.webp",
  },
  {
    src: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-3_ouj8od.webp",
  },

  {
    src: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-4_xaqpz1.webp",
  },
  {
    src: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-5_ftjick.webp",
  },
];
