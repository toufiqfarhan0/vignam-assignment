import React from 'react'
import { AnimateTabs } from './Animate-Tabs'


export default function AnimateCard () {
  return (
    <div
    className="mx-auto mb-5 w-fit max-w-full rounded-[16px] bg-cover bg-top pt-8 sm:mb-16 sm:rounded-[32px] md:mb-24 md:rounded-[64px] md:px-12 lg:px-20 lg:pt-10"
    style={{
      backgroundImage: 'url("/images/section-bg.webp")',
      backgroundSize: "100% 300%",
      backgroundRepeat: "no-repeat",
    }}
  >
    <header className="px-4 sm:px-8 md:px-12">
      <h3
        style={{
          fontFamily: "Aspekta",
          fontWeight: 850,
        }}
        className="mx-auto max-w-sm text-balance text-center text-xl leading-[28px] text-white sm:max-w-md sm:text-3xl sm:leading-[36px] md:max-w-2xl md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[54px]"
      >
        Share Your Voice Beyond Just a Tweet
      </h3>
      <p className="mx-auto my-2 max-w-xs text-balance text-center text-sm font-normal leading-[18px] text-white sm:my-5 sm:max-w-sm md:my-8 md:max-w-xl md:text-base lg:my-12 lg:text-lg">
        Keep your online presence steady and growing by creating customizable images from your tweets, perfect for Instagram, Facebook, and more.
      </p>
    </header>
    <div className="scrollbar-hide mx-auto my-4 flex max-w-full items-center justify-start gap-3 overflow-x-auto px-4 sm:justify-center sm:gap-4 md:my-8 md:gap-5">
      <AnimateTabs/>
    </div>
  </div>
  )
}

