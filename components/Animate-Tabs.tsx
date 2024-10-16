"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function AnimateTabs() {
  const tabs = [
    {
      title: "Instagram Story",
      value: "instagramstory",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dzv61qpeu/image/upload/v1726501013/textures-2_kglato.webp")',
            opacity: 1,
            willChange: "auto",
          }}
        >
          <p>Instagram Story</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Linkedin Post",
      value: "linkedinpost",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dzv61qpeu/image/upload/v1726501013/textures-2_kglato.webp")',
            opacity: 1,
            willChange: "auto",
          }}
        >
          <p>Linkedin Post</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Facebook Post",
      value: "facebookpost",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dzv61qpeu/image/upload/v1726501013/textures-2_kglato.webp")',
            opacity: 1,
            willChange: "auto",
          }}
        >
          <p>Facebook Post</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Instagram Post",
      value: "instagramost",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dzv61qpeu/image/upload/v1726501013/textures-2_kglato.webp")',
            opacity: 1,
            willChange: "auto",
          }}
        >
          <p>Instagram Post</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start overflow-hidden">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/images/post.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
