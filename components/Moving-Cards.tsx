"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { IconBrandFacebook } from "@tabler/icons-react";

const cards = [
  {
    icon: <LinkedInLogoIcon className="w-6 h-6 md:w-8 md:h-8" />,
    title: "LinkedIn Post",
    image:
      "https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp",
  },
  {
    icon: <TwitterLogoIcon className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Twitter Post",
    image:
      "https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp",
  },
  {
    icon: <IconBrandFacebook className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Instagram Post",
    image:
      "https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp",
  },
];

export default function MovingCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          } else {
            entry.target.classList.remove("card-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll(".card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden py-10">
      <div
        ref={containerRef}
        className="flex flex-nowrap gap-6 px-6 md:gap-10 overflow-x-auto overflow-y-hidden md:overflow-visible"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="card flex-shrink-0 w-64 md:w-80 xl:w-96 transition-all duration-700 ease-out opacity-0 translate-x-[-100px]"
          >
            <div className="flex flex-col space-y-2 md:space-y-4 p-4 bg-neutral-500 rounded-xl transform rotate-3">
              <span className="text-sm md:text-xl flex items-center gap-2 font-medium text-white">
                {card.icon} {card.title}
              </span>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  className="object-cover"
                  src={card.image}
                  alt={`${card.title} Texture`}
                  fill
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
}
