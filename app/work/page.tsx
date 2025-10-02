"use client";
import Group from "@/sections/Group";
import LogoWithWork from "@/components/SVGs/LogoWithWork";
import TheStudio from "@/sections/TheStudio";
import ClientsPlusPartners from "@/sections/ClientsPlusPartners";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect } from "react";

export default function WorkPage() {
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    return () => setNavTheme("dark");
  }, [setNavTheme]);

  return (
    <main>
      <Group Logo={LogoWithWork} showHighlights={false} showProjects={false} compact={true} />
      <div className="relative z-30 flex flex-col gap-[5vh] overflow-x-clip px-2 lg:gap-[10vh] lg:px-[0.46296vw]">
        {[
          { videoSrc: "/assets/videos/projects/the-hex.mp4", title: "Naarigis", linkToProject: "/work/naarigis" },
          { videoSrc: "/assets/videos/projects/azuki-elementals.mp4", title: "IGNOU Galaxy", linkToProject: "/work/ignou-galaxy" },
          { videoSrc: "/assets/videos/projects/marvel-snap.mp4", title: "Galaxy Publications", linkToProject: "/work/galaxy-publications" },
          { videoSrc: "/assets/videos/projects/the-hex.mp4", title: "Sanskeera", linkToProject: "/work/sanskeera" },
          { videoSrc: "/assets/videos/projects/azuki-elementals.mp4", title: "The India Dori", linkToProject: "/work/the-india-dori" },
          { videoSrc: "/assets/videos/projects/marvel-snap.mp4", title: "AVP Entertainments", linkToProject: "/work/avp-entertainments" },
          { videoSrc: "/assets/videos/projects/the-hex.mp4", title: "The1Step Entertainments", linkToProject: "/work/the1step-entertainments" },
          { videoSrc: "/assets/videos/projects/azuki-elementals.mp4", title: "Uptown Entertainments", linkToProject: "/work/uptown-entertainments" },
          { videoSrc: "/assets/videos/projects/marvel-snap.mp4", title: "Victoria Vibes", linkToProject: "/work/victoria-vibes" },
          { videoSrc: "/assets/videos/projects/the-hex.mp4", title: "Crafted Creative", linkToProject: "/work/crafted-creative" },
          { videoSrc: "/assets/videos/projects/azuki-elementals.mp4", title: "Broadridge Client Summit 2024", linkToProject: "/work/broadridge-client-summit-2024" },
          { videoSrc: "/assets/videos/projects/marvel-snap.mp4", title: "Khazana Jewellery – Lookbook", linkToProject: "/work/khazana-jewellery-lookbook" },
          { videoSrc: "/assets/videos/projects/the-hex.mp4", title: "Armexmed Co", linkToProject: "/work/armexmed-co" },
        ].map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
      <TheStudio />
      <ClientsPlusPartners />
      <div className="relative overflow-clip bg-flare-red">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}