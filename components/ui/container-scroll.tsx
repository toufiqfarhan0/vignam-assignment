"use client";
import React, { useRef, useEffect, useState, ReactNode } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";

// ContainerScroll component props
interface ContainerScrollProps {
  titleComponent: string | ReactNode;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = (): [number, number] => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[80rem] flex items-center justify-center relative p-20"
      ref={containerRef}
    >
      <div className="py-40 w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} translate={translate} />
      </div>
    </div>
  );
};

// Header component props
interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: string | ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  translate,
  titleComponent,
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

// Card component props
interface CardProps {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
}

export const Card: React.FC<CardProps> = ({ rotate, scale }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate on the X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-6 bg-[#222222] rounded-[30px]"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl gap-4 overflow-hidden p-4 transition-all">
        <Image
          src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727020129/app-screenshot_uficxp.webp"
          fill
          alt="bannerImage"
          className="object-cover border-8 rounded-2xl"
        />
      </div>
    </motion.div>
  );
};
