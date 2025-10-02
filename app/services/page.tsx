"use client";
import { motion, useMotionValue } from "motion/react";
import Video from "@/components/Server/Video";
import { useEffect } from "react";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import SectionHeader from "@/components/Server/SectionHeader";
import StyledLink from "@/components/Server/StyledLink";

export default function ServicesPage() {
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
          <SectionHeader label="Reviver Studio" title="Services" />
          <motion.div
            style={{ backgroundColor }}
            className="relative z-30 flex flex-col gap-[5vh] overflow-x-clip px-2 pb-[10vh] lg:gap-[15vh] lg:px-[0.46296vw]"
          >
            <div className="grid grid-cols-1 gap-[2vh] lg:grid-cols-3 lg:gap-[1.85185vw]">
              <div>
                <h2 className="text-[32px] leading-[1] font-medium tracking-[-0.02em] lg:text-[2.77778vw]">
                  Design & Branding
                </h2>
                <p className="mt-2 max-w-[60ch] text-[16px] leading-[1.4] text-void-black/70 lg:text-[0.83333vw]">
                  Identity systems, visual language, and brand toolkits crafted for
                  clarity, recognition, and long-term scale.
                </p>
              </div>
              <div>
                <h2 className="text-[32px] leading-[1] font-medium tracking-[-0.02em] lg:text-[2.77778vw]">
                  Web Experiences
                </h2>
                <p className="mt-2 max-w-[60ch] text-[16px] leading-[1.4] text-void-black/70 lg:text-[0.83333vw]">
                  Modern, performant websites and apps with motion-first UX,
                  accessible interactions, and robust SEO.
                </p>
              </div>
              <div>
                <h2 className="text-[32px] leading-[1] font-medium tracking-[-0.02em] lg:text-[2.77778vw]">
                  Content & Production
                </h2>
                <p className="mt-2 max-w-[60ch] text-[16px] leading-[1.4] text-void-black/70 lg:text-[0.83333vw]">
                  End-to-end creative: art direction, video, and campaigns that
                  move audiences and deliver results.
                </p>
              </div>
            </div>

            <div className="mt-[5vh] flex flex-wrap gap-[14px]">
              <StyledLink href="/work">See our work</StyledLink>
              <StyledLink href="/contact">Start a project</StyledLink>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}


