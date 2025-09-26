"use client";
import { motion, useMotionValue } from "motion/react";
import Hero from "@/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import HighlightCard from "@/components/HighlightCard";
import Video from "@/components/Server/Video";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect } from "react";

export default function EntertainmentPage() {
  const backgroundColor = useMotionValue("transparent");
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    setNavTheme("dark");
  }, [setNavTheme]);

  const entertainmentProjects = [
    {
      videoSrc: "/assets/videos/projects/marvel-snap.mp4",
      title: "Marvel Entertainment",
      linkToProject: "#",
    },
    {
      videoSrc: "/assets/videos/projects/the-hex.mp4",
      title: "Gaming Cinematics",
      linkToProject: "#",
    },
    {
      videoSrc: "/assets/videos/projects/azuki-elementals.mp4",
      title: "Animated Series",
      linkToProject: "#",
    },
    {
      videoSrc: "/assets/videos/projects/marvel-snap.mp4",
      title: "Film Production",
      linkToProject: "#",
    },
    {
      videoSrc: "/assets/videos/projects/the-hex.mp4",
      title: "Streaming Content",
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
            {entertainmentProjects.map((eachProject) => (
              <ProjectCard key={eachProject.title} {...eachProject} />
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
