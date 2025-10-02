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
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const height = document.documentElement.clientHeight;
        const barHeight = (4.62963 * window.innerWidth) / 100;
        const docHeight = document.documentElement.scrollHeight;
        setWindowHeight(height);
        setScrollBarHeight(barHeight);
        setDocumentHeight(docHeight);
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

  const maxScroll = Math.max(documentHeight - windowHeight, 1);
  const maxY = Math.max(windowHeight - scrollBarHeight, 0);

  const y = useTransform(scrollY, [0, maxScroll], [0, maxY]);

  const windowTop = useTransform(y, [0, maxY], [0, maxScroll]);

  useMotionValueEvent(windowTop, "change", (latest) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: Math.floor(latest) });
    }
  });

  // Don’t render until we have initial sizes to avoid hydration diffs
  const isReady = windowHeight > 0 && documentHeight > 0;

  if (!isReady) {
    return null;
  }

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