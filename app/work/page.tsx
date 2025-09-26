"use client";
import { motion, useMotionValue } from "motion/react";
import Hero from "@/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import HighlightCard from "@/components/HighlightCard";
import Video from "@/components/Server/Video";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect } from "react";

export default function WorkPage() {
  const backgroundColor = useMotionValue("transparent");
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    setNavTheme("dark");
  }, [setNavTheme]);

  const projects = [
    {
      videoSrc: "/assets/videos/projects/the-hex.mp4",
      title: "The Hex - Warframe: 1999",
      linkToProject:
        "https://thelinestudio.com/work/the-hex-warframe-1999-animated-prologue",
    },
    {
      videoSrc: "/assets/videos/projects/azuki-elementals.mp4",
      title: "Azuki Elementals",
      linkToProject: "https://thelinestudio.com/work/azuki",
    },
    {
      videoSrc: "/assets/videos/projects/marvel-snap.mp4",
      title: "Marvel Snap / Hero",
      linkToProject: "https://thelinestudio.com/work/hero-marvel-snap",
    },
    {
      videoSrc: "/assets/videos/projects/the-hex.mp4",
      title: "Project Alpha",
      linkToProject: "#",
    },
    {
      videoSrc: "/assets/videos/projects/azuki-elementals.mp4",
      title: "Creative Vision",
      linkToProject: "#",
    },
    {
      videoSrc: "/assets/videos/projects/marvel-snap.mp4",
      title: "Digital Innovation",
      linkToProject: "#",
    },
  ];

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
          <HighlightCard backgroundColor={backgroundColor} />
          <motion.div
            style={{ backgroundColor }}
            className="relative z-30 flex flex-col gap-[5vh] overflow-x-clip lg:gap-[15vh]"
          >
            {projects.map((eachProject) => (
              <ProjectCard key={eachProject.title} {...eachProject} />
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}