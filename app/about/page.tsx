"use client";
import { motion, useMotionValue } from "motion/react";
import Hero from "@/sections/Hero";
import Video from "@/components/Server/Video";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect } from "react";
import TheStudio from "@/sections/TheStudio";
import ClientsPlusPartners from "@/sections/ClientsPlusPartners";
import News from "@/sections/News";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function AboutPage() {
  const backgroundColor = useMotionValue("transparent");
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    setNavTheme("dark");
  }, [setNavTheme]);

  return (
    <main>
      <div className="relative max-w-screen overflow-x-clip lg:mb-[25vh]">
        <div className="sticky top-0 z-10 pb-[100vh]">
          <div className="h-screen">
            <Video src="/assets/videos/hero.mp4" />
          </div>
        </div>
        <div className="relative z-30">
          <Hero />
          <motion.div
            style={{ backgroundColor }}
            className="relative z-30 flex flex-col gap-[5vh] overflow-x-clip lg:gap-[15vh]"
          >
            <TheStudio />
            <ClientsPlusPartners />
            <div className="relative overflow-clip bg-flare-red">
              <News />
              <Contact />
              <Footer />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
