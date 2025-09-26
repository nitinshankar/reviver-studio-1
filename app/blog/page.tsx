"use client";
import { motion, useMotionValue } from "motion/react";
import Hero from "@/sections/Hero";
import Video from "@/components/Server/Video";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect } from "react";
import FlickerText from "@/components/FlickerText";
import Button from "@/components/Client/Button";

export default function BlogPage() {
  const backgroundColor = useMotionValue("transparent");
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    setNavTheme("dark");
  }, [setNavTheme]);

  const blogPosts = [
    {
      title: "The Future of Animation",
      excerpt: "Exploring new trends in digital animation and storytelling.",
      date: "2024-01-15",
      category: "Animation",
    },
    {
      title: "Creative Process Deep Dive",
      excerpt: "Behind the scenes of our latest project development.",
      date: "2024-01-10",
      category: "Process",
    },
    {
      title: "Technology in Entertainment",
      excerpt: "How technology is reshaping the entertainment industry.",
      date: "2024-01-05",
      category: "Technology",
    },
    {
      title: "Design Thinking Workshop",
      excerpt: "Key insights from our recent design thinking session.",
      date: "2023-12-28",
      category: "Design",
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
            {/* Blog Header */}
            <div className="flex h-screen items-center justify-center">
              <FlickerText>BLOG</FlickerText>
            </div>

            {/* Blog Posts */}
            <div className="space-y-[10vh] lg:space-y-[20vh]">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="grid gap-4 lg:grid-cols-3 lg:gap-[2.31481vw]">
                    <div className="lg:col-span-2">
                      <div className="mb-2 text-sm font-light text-void-black/60 lg:text-[0.92593vw]">
                        {post.category} • {post.date}
                      </div>
                      <h2 className="mb-4 text-[32px] leading-[0.9] font-[470] tracking-[-0.03em] text-void-black lg:text-[3.7037vw] lg:leading-[0.85]">
                        {post.title}
                      </h2>
                      <p className="text-[18px] leading-[1.4] font-light text-void-black/80 lg:text-[1.38889vw]">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-end justify-end">
                      <Button href="#" className="group-hover:opacity-100 opacity-60 transition-opacity duration-300">
                        Read More
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center py-[10vh]">
              <Button href="#">Load More Posts</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
