'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tab-onesol"
import Image from 'next/image'

type TabKey = 'individual' | 'influencer' | 'business'

type TabContent = {
  title: string
  description: string
  features: string[]
  image: string
}

type TabContentMap = {
  [key in TabKey]: TabContent
}

export default function OneSolution() {
  const [activeTab, setActiveTab] = useState<TabKey>('individual')

  const tabContent: TabContentMap = {
    individual: {
      title: "Individual",
      description: "Postable is perfect for individuals who want to elevate their social media presence without the hassle. Whether you're sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share beautiful, impactful posts from your tweets.",
      features: [
        "Effortless Post Creation",
        "Enhanced Visual Appeal",
        "Easy Sharing Across Platforms",
        "Consistent Social Media Presence"
      ],
      image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061157/Individual_fe1fis.webp"
    },
    influencer: {
      title: "Influencer",
      description: "For influencers, maintaining a consistent and visually appealing social media presence is crucial. Postable empowers you to convert your tweets into captivating images that align with your brand, helping you to keep your content fresh and engaging across all platforms.",
      features: [
        "Quick Post Creation",
        "Boosted Follower Engagement",
        "Consistent Multi-Platform Presence",
        "Content Diversification"
      ],
      image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Influencers_x5kswv.webp"
    },
    business: {
      title: "Business",
      description: "Businesses need to stay agile and maintain a strong social media presence. Postable helps you quickly turn tweets into polished visuals that resonate with your audience, reinforcing your brand and driving engagement without the need for a full design team.",
      features: [
        "Content Repurposing",
        "Cross-Platform Marketing",
        "Easy Sharing Across Platforms",
        "Brand Consistency"
      ],
      image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Businesses_tc1bbp.webp"
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const tabs: TabKey[] = Object.keys(tabContent) as TabKey[]
        const currentIndex = tabs.indexOf(prevTab)
        const nextIndex = (currentIndex + 1) % tabs.length
        return tabs[nextIndex]
      })
    }, 20000)

    return () => clearInterval(interval)
  }, [])

  const handleTabChange = (value: string) => {
    if (isTabKey(value)) {
      setActiveTab(value)
    }
  }

  const isTabKey = (value: string): value is TabKey => {
    return Object.keys(tabContent).includes(value)
  }

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-3xl md:text-5xl max-w-7xl mx-auto font-light text-neutral-800 dark:text-neutral-200 font-sans mt-4">
        One Solution for All!
      </h2>
      <p className="text-md md:text-xl max-w-7xl mx-auto font-bold text-neutral-600 dark:text-neutral-200 font-sans mt-2">
        Postable helps everyone to share their thoughts across multiple
        platforms
      </p>
      <Tabs value={activeTab} className="space-y-4 max-w-7xl mx-auto mt-4" onValueChange={handleTabChange}>
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
                <p className="mb-4">
                  {tabContent[activeTab].description}
                </p>

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
              transition={{ duration: 0.5, type: 'spring' }}
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
    </div>
  )
}