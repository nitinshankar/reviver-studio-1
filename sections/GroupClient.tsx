"use client";
import { motion, useMotionValue } from "motion/react";
import Hero from "@/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import HighlightCard from "@/components/HighlightCard";
import { ComponentType } from "react";

export default function SectionOfSectionsClient({ Logo, showHighlights = true, showProjects = true }: { Logo?: ComponentType<any>; showHighlights?: boolean; showProjects?: boolean }) {
  const backgroundColor = useMotionValue("transparent");
  const projects = [
    {
      videoSrc: "/assets/videos/projects/the-hex.mp4",
      title: "The Hex - Warframe: 1999",
      linkToProject: "/work/the-hex-warframe-1999-animated-prologue",
    },
    {
      videoSrc: "/assets/videos/projects/azuki-elementals.mp4",
      title: "Azuki Elementals",
      linkToProject: "/work/azuki",
    },
    {
      videoSrc: "/assets/videos/projects/marvel-snap.mp4",
      title: "Marvel Snap / Hero",
      linkToProject: "/work/hero-marvel-snap",
    },
  ];
  return (
    <>
      <Hero Logo={Logo} />
      {showHighlights && <HighlightCard backgroundColor={backgroundColor} />}
      {showProjects && (
        <motion.div
          style={{ backgroundColor }}
          className="relative z-30 flex flex-col gap-[5vh] overflow-x-clip lg:gap-[10vh]"
        >
          {projects.map((eachProject) => (
            <ProjectCard key={eachProject.title} {...eachProject} />
          ))}
        </motion.div>
      )}
    </>
  );
}
