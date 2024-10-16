"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import SocialMedia from "./Social-Media";

export function HowItWorks() {
  const steps = [
    {
      label: "Step 1",
      title: "Copy tweet's link",
      description:
        "On X/Twitter, click the share icon at the bottom-right of the tweet and select 'Copy Link.' Then, paste the link into the box above.",
      image:
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-1_grbgfh.webp",
    },
    {
      label: "Step 2",
      title: "Customize Design",
      description:
        "Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click.",
      image:
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-2_n2egsf.webp",
    },
    {
      label: "Step 3",
      title: "Export!",
      description:
        "Simply export and publish your meticulously crafted posts, tailored to meet each social media's standards and format.",
      image:
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-3_d477fk.webp",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-light text-neutral-800 dark:text-neutral-200 font-sans text-start">
        How it works?
      </h2>

      {/* Carousel - Visible only on small screens */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:hidden max-w-fit">
        {steps.map((step, index) => (
          <CardContainer key={index} className="snap-center min-w-[80%]">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border md:h-[25rem] overflow-hidden flex flex-col items-start justify-start">
              <CardItem translateZ="100" className="w-full">
                <Image
                  src={step.image}
                  height={1000}
                  width={1000}
                  className="h-48 w-full object-cover rounded-xl"
                  alt={`Step ${index + 1} thumbnail`}
                />
              </CardItem>
              <CardItem className="mt-4 font-bold text-neutral-400">
                {step.label}
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-2"
              >
                {step.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
              >
                {step.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Grid layout - Visible on larger screens */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <CardContainer key={index}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border md:h-[25rem] overflow-hidden flex flex-col items-start justify-start">
              <CardItem translateZ="100" className="w-full">
                <Image
                  src={step.image}
                  height={1000}
                  width={1000}
                  className="h-48 w-full object-cover rounded-xl"
                  alt={`Step ${index + 1} thumbnail`}
                />
              </CardItem>
              <CardItem className="mt-4 font-bold text-neutral-400">
                {step.label}
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-2"
              >
                {step.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
              >
                {step.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div>
        <SocialMedia />
      </div>
    </div>
  );
}
