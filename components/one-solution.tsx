"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tab-onesol";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll";
import { Button } from "./ui/button";

type TabKey = "individual" | "influencer" | "business";

type TabContent = {
  title: string;
  description: string;
  features: string[];
  image: string;
};

type TabContentMap = {
  [key in TabKey]: TabContent;
};

export default function OneSolution() {
  const [activeTab, setActiveTab] = useState<TabKey>("individual");

  const tabContent: TabContentMap = {
    individual: {
      title: "Individual",
      description:
        "Postable is perfect for individuals who want to elevate their social media presence without the hassle. Whether you're sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share beautiful, impactful posts from your tweets.",
      features: [
        "Effortless Post Creation",
        "Enhanced Visual Appeal",
        "Easy Sharing Across Platforms",
        "Consistent Social Media Presence",
      ],
      image:
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061157/Individual_fe1fis.webp",
    },
    influencer: {
      title: "Influencer",
      description:
        "For influencers, maintaining a consistent and visually appealing social media presence is crucial. Postable empowers you to convert your tweets into captivating images that align with your brand, helping you to keep your content fresh and engaging across all platforms.",
      features: [
        "Quick Post Creation",
        "Boosted Follower Engagement",
        "Consistent Multi-Platform Presence",
        "Content Diversification",
      ],
      image:
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Influencers_x5kswv.webp",
    },
    business: {
      title: "Business",
      description:
        "Businesses need to stay agile and maintain a strong social media presence. Postable helps you quickly turn tweets into polished visuals that resonate with your audience, reinforcing your brand and driving engagement without the need for a full design team.",
      features: [
        "Content Repurposing",
        "Cross-Platform Marketing",
        "Easy Sharing Across Platforms",
        "Brand Consistency",
      ],
      image:
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Businesses_tc1bbp.webp",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const tabs: TabKey[] = Object.keys(tabContent) as TabKey[];
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [tabContent]);

  const handleTabChange = (value: string) => {
    if (isTabKey(value)) {
      setActiveTab(value);
    }
  };

  const isTabKey = (value: string): value is TabKey => {
    return Object.keys(tabContent).includes(value);
  };

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-3xl md:text-5xl max-w-7xl mx-auto font-light text-neutral-800 dark:text-neutral-200 font-sans mt-4">
        One Solution for All!
      </h2>
      <p className="text-md md:text-xl max-w-7xl mx-auto font-bold text-neutral-600 dark:text-neutral-200 font-sans mt-2">
        Postable helps everyone to share their thoughts across multiple
        platforms
      </p>
      <Tabs
        value={activeTab}
        className="space-y-4 max-w-7xl mx-auto mt-4"
        onValueChange={handleTabChange}
      >
        <TabsList>
          {(Object.keys(tabContent) as TabKey[]).map((tab) => (
            <TabsTrigger key={tab} value={tab}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tabContent[tab].title}
              </motion.div>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <TabsContent value={activeTab}>
              <div>
                <p className="mb-4">{tabContent[activeTab].description}</p>

                <ol className="list-decimal pl-5 space-y-2">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ol>
              </div>
            </TabsContent>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex-1 flex justify-center items-center"
            >
              <Image
                src={tabContent[activeTab].image}
                alt={`Postable for ${tabContent[activeTab].title}`}
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-12 md:gap-12 md:py-24 xl:pe-4 xl:ps-0">
        <p className="relative max-w-4xl text-balance text-3xl font-normal tracking-[-0.4px] text-neutral-400 md:text-[40px] md:leading-[42px]">
          <span className="text-neutral-800">
            Grow your audience with powerful visuals{" "}
          </span>
          shared across all your social media platforms.
        </p>
      </div>
      <div>
        {" "}
        <Image
          src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726913723/engaging_uhqrqs.webp"
          alt=""
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
        <ContainerScroll
          titleComponent={
            <div className="flex items-center flex-col">
              <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-black to-purple-600 font-sans font-bold">
                One-Click to Create
              </h1>
              <p>
                Postable is built with simplicity and fun at its core. No design
                skills? No problem. We handle the heavy lifting so you can
                effortlessly create stunning posts.
              </p>
              <Button
                size={"lg"}
                className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-gray-500 group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-neutral-400  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                  Get Started For Free
                </span>
              </Button>
            </div>
          }
        />
      </div>
    </div>
  );
}
