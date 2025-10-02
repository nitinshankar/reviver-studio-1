"use client";

import LogoWithTrademark from "@/components/SVGs/LogoWithTrademark";
import { ComponentType } from "react";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
type HeroProps = {
  Logo?: ComponentType<any>;
};

export default function Hero({ Logo = LogoWithTrademark }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // While Hero is in view (progress < 1), keep nav light; otherwise dark
      setNavTheme(value < 1 ? "light" : "dark");
    });
    return () => unsubscribe();
  }, [scrollYProgress, setNavTheme]);
  return (
    <>
      <motion.div
        ref={ref}
        style={{ x, rotate }}
        className="absolute inset-x-0 top-0 z-20 h-screen origin-bottom-left bg-[#ff0000] [mix-blend-mode:multiply]"
      />
      <motion.div
        style={{ x, rotate }}
        className="absolute inset-0 z-20 flex h-screen origin-bottom-left flex-col justify-end px-2 pb-2 lg:px-[1.27315vw] lg:pb-[1.27315vw]"
      >
        <Logo fill="#f8f8f8" />
      </motion.div>
    </>
  );
}
