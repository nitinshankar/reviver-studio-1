"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utils/cn";
import Arrow from "@/components/SVGs/Arrow";

type CarouselProps = {
  items: ReactNode[];
  className?: string;
};

export default function Carousel({ items, className }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const dots = useMemo(() => new Array(items.length).fill(0), [items.length]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // subtle autoplay
    intervalRef.current = window.setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [items.length]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="w-full"
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
      <div className="mt-3 flex items-center justify-between">
        <button onClick={prev} className="group inline-flex items-center gap-2 text-sm uppercase tracking-[-0.01em]">
          <Arrow className="h-3 w-3 rotate-180 transition-transform group-hover:-translate-x-1" /> Prev
        </button>
        <div className="flex items-center gap-2">
          {dots.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-[6px] w-[6px] rounded-full transition-colors",
                i === index ? "bg-void-black" : "bg-void-black/30 hover:bg-void-black/60",
              )}
            />
          ))}
        </div>
        <button onClick={next} className="group inline-flex items-center gap-2 text-sm uppercase tracking-[-0.01em]">
          Next <Arrow className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}


