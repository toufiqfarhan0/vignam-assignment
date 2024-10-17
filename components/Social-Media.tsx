import { Check } from "lucide-react";
import React from "react";
import MovingCards from "./Moving-Cards";

export default function SocialMedia() {
  return (
    <div className="w-full max-w-7xl mx-auto m-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl font-light text-neutral-800 dark:text-neutral-200 font-sans text-start">
          Optimized for <br className="hidden sm:inline" /> all social media
        </h2>
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8 gap-5">
          <div className="flex-1 text-neutral-600 dark:text-neutral-400 text-sm">
            <p className="whitespace-nowrap">
              We've meticulously designed each template to meet the specific
              guidelines
            </p>
            <p className="whitespace-nowrap">
              and format requirements of all social media platforms. By
              preserving
            </p>
            <p className="whitespace-nowrap">
              safe zones and adhering to platform standards, we ensure that your
            </p>
            <p className="whitespace-nowrap">
              posts will always be visually striking, no matter where you share
              them.
            </p>
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex flex-row md:flex-col md:space-x-0 md:space-y-2">
              <CheckItem text="Readable" />
              <CheckItem text="Visible" />
              <CheckItem text="Accessible" />
            </div>
          </div>
        </div>
      </div>
      <MovingCards />
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1">
      <Check className="w-5 h-5 text-neutral-500" />
      <p className="text-sm text-neutral-700 dark:text-neutral-300">{text}</p>
    </div>
  );
}
