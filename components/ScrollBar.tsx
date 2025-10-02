"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function ScrollBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollBarHeight, setScrollBarHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const height: number = document.documentElement.clientHeight;
        const barHeight: number = (4.62963 * window.innerWidth) / 100;
        setWindowHeight(height);
        setScrollBarHeight(barHeight);
      }
    };

    updateDimensions();
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        scrollY.set(window.scrollY);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollY]);

  const y = useTransform(
    scrollY,
    [0, document.documentElement.scrollHeight - windowHeight],
    [0, windowHeight - scrollBarHeight],
  );

  const windowTop = useTransform(
    y,
    [0, windowHeight - scrollBarHeight],
    [0, document.documentElement.scrollHeight - windowHeight],
  );

  useMotionValueEvent(windowTop, "change", (latest) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: Math.floor(latest),
      });
    }
  });

  return (
    <motion.div
      ref={containerRef}
      className="fixed top-0 right-0 h-screen w-[0.46296vw]"
    >
      <motion.div
        dragConstraints={containerRef}
        style={{ y }}
        drag="y"
        dragMomentum={false}
        dragElastic={false}
        className="h-[4.62963vw] w-full cursor-grab bg-void-black"
      />
    </motion.div>
  );
}