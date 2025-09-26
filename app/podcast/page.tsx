"use client";
import { motion, useMotionValue } from "motion/react";
import Hero from "@/sections/Hero";
import Video from "@/components/Server/Video";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect } from "react";
import FlickerText from "@/components/FlickerText";
import Button from "@/components/Client/Button";

export default function PodcastPage() {
  const backgroundColor = useMotionValue("transparent");
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    setNavTheme("dark");
  }, [setNavTheme]);

  const podcastEpisodes = [
    {
      title: "The Creative Process",
      guest: "Sarah Johnson",
      duration: "45 min",
      date: "2024-01-15",
      description: "Exploring the creative process behind successful animation projects.",
    },
    {
      title: "Future of Entertainment",
      guest: "Mike Chen",
      duration: "52 min",
      date: "2024-01-08",
      description: "Discussing emerging trends in the entertainment industry.",
    },
    {
      title: "Design Thinking",
      guest: "Emma Rodriguez",
      duration: "38 min",
      date: "2024-01-01",
      description: "How design thinking shapes our approach to creative challenges.",
    },
    {
      title: "Technology & Art",
      guest: "Alex Thompson",
      duration: "41 min",
      date: "2023-12-25",
      description: "The intersection of technology and artistic expression.",
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
          <motion.div
            style={{ backgroundColor }}
            className="relative z-30 flex flex-col gap-[5vh] overflow-x-clip lg:gap-[15vh] px-2 lg:px-[1.27315vw]"
          >
            {/* Podcast Header */}
            <div className="flex h-screen items-center justify-center">
              <FlickerText>PODCAST</FlickerText>
            </div>

            {/* Podcast Episodes */}
            <div className="space-y-[10vh] lg:space-y-[20vh]">
              {podcastEpisodes.map((episode, index) => (
                <motion.article
                  key={episode.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="grid gap-4 lg:grid-cols-3 lg:gap-[2.31481vw]">
                    <div className="lg:col-span-2">
                      <div className="mb-2 text-sm font-light text-void-black/60 lg:text-[0.92593vw]">
                        Episode {index + 1} • {episode.duration} • {episode.date}
                      </div>
                      <h2 className="mb-2 text-[32px] leading-[0.9] font-[470] tracking-[-0.03em] text-void-black lg:text-[3.7037vw] lg:leading-[0.85]">
                        {episode.title}
                      </h2>
                      <div className="mb-4 text-[18px] leading-[1.4] font-light text-flare-red lg:text-[1.38889vw]">
                        with {episode.guest}
                      </div>
                      <p className="text-[18px] leading-[1.4] font-light text-void-black/80 lg:text-[1.38889vw]">
                        {episode.description}
                      </p>
                    </div>
                    <div className="flex items-end justify-end">
                      <Button href="#" className="group-hover:opacity-100 opacity-60 transition-opacity duration-300">
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Subscribe Section */}
            <div className="flex flex-col items-center justify-center py-[10vh] text-center">
              <h3 className="mb-4 text-[24px] leading-[1.2] font-[470] tracking-[-0.03em] text-void-black lg:text-[2.31481vw]">
                Subscribe to Our Podcast
              </h3>
              <p className="mb-8 text-[18px] leading-[1.4] font-light text-void-black/80 lg:text-[1.38889vw]">
                Never miss an episode of our creative conversations
              </p>
              <div className="flex gap-4">
                <Button href="#">Apple Podcasts</Button>
                <Button href="#">Spotify</Button>
                <Button href="#">Google Podcasts</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
