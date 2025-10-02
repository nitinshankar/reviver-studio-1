"use client";
import FlickerText from "@/components/FlickerText";
import Arrow from "@/components/SVGs/Arrow";
import { cn } from "@/utils/cn";
import { cubicBezier } from "motion";
import { motion } from "motion/react";
import Link from "next/link";
export default function CallToAction({
  className,
  label = "Let's talk",
  href,
  size = "lg",
}: {
  className?: string;
  label?: string;
  href?: string;
  size?: "lg" | "sm";
}) {
  const smallContent = (
    <motion.div initial="initial" whileHover="whileHover" className="flex items-center gap-2">
      <FlickerText size="sm">{label}</FlickerText>
      <motion.div
        variants={{ initial: { x: 0, opacity: 1 }, whileHover: { x: 10, opacity: 0 } }}
        transition={{ duration: 0.35, ease: cubicBezier(0.19, 1, 0.22, 1) }}
        className="relative h-[16px] w-[26px] overflow-visible lg:h-[1.25vw] lg:w-[2.2vw]"
      >
        <Arrow />
      </motion.div>
    </motion.div>
  );

  const content = size === "sm" ? smallContent : (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className={cn(
        "relative flex cursor-pointer items-center justify-between pt-[178px] lg:px-[0.46296vw] lg:pt-[18.51852vw]",
        className,
      )}
    >
      <Arrow
        variants={{
          initial: {
            x: "-100%",
          },
          whileHover: {
            x: "0%",
          },
        }}
        transition={{
          duration: 0.8,
          ease: cubicBezier(0.19, 1, 0.22, 1),
        }}
        className="absolute left-0 h-[50px] w-[58px] lg:left-[0.5787vw] lg:h-[8.96991vw] lg:w-[10.70602vw]"
      />
      <FlickerText size={size}>{label}</FlickerText>
      <Arrow
        className="right-0 h-[50px] w-[58px] lg:left-[0.5787vw] lg:h-[8.96991vw] lg:w-[10.70602vw]"
        variants={{
          initial: {
            x: "0%",
          },
          whileHover: {
            x: "100%",
          },
        }}
        transition={{
          duration: 0.8,
          ease: cubicBezier(0.19, 1, 0.22, 1),
        }}
      />
    </motion.div>
  );

  if (!href) return content;

  if (size === "sm") {
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer py-1 px-1 lg:px-[0.3vw]",
          className,
        )}
      >
        {smallContent}
      </Link>
    );
  }

  return (
    <Link href={href} className={cn("block cursor-pointer", className)}>
      {content}
    </Link>
  );
}
