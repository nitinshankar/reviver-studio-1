"use client";
import { motion, useMotionValue } from "motion/react";
import Hero from "@/sections/Hero";
import Video from "@/components/Server/Video";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect } from "react";
import FlickerText from "@/components/FlickerText";
import Button from "@/components/Client/Button";

export default function ShopPage() {
  const backgroundColor = useMotionValue("transparent");
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    setNavTheme("dark");
  }, [setNavTheme]);

  const shopItems = [
    {
      title: "Studio Merchandise",
      description: "Official Reviver Studio branded items",
      price: "From $25",
      image: "/assets/images/shop/merch.jpg",
    },
    {
      title: "Art Prints",
      description: "Limited edition prints from our projects",
      price: "From $45",
      image: "/assets/images/shop/prints.jpg",
    },
    {
      title: "Digital Assets",
      description: "Templates, brushes, and creative resources",
      price: "From $15",
      image: "/assets/images/shop/digital.jpg",
    },
    {
      title: "Collaboration Kits",
      description: "Everything you need to start your creative journey",
      price: "From $99",
      image: "/assets/images/shop/kits.jpg",
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
            {/* Shop Header */}
            <div className="flex h-screen items-center justify-center">
              <FlickerText>SHOP</FlickerText>
            </div>

            {/* Shop Items */}
            <div className="grid gap-[5vh] lg:grid-cols-2 lg:gap-[10vh]">
              {shopItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-cool-gray">
                    <div className="aspect-[4/3] bg-void-black/10" />
                    <div className="p-6 lg:p-[1.38889vw]">
                      <h3 className="mb-2 text-[24px] leading-[0.9] font-[470] tracking-[-0.03em] text-void-black lg:text-[2.31481vw] lg:leading-[0.85]">
                        {item.title}
                      </h3>
                      <p className="mb-4 text-[16px] leading-[1.4] font-light text-void-black/80 lg:text-[1.15741vw]">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[18px] leading-[1.2] font-[440] text-flare-red lg:text-[1.38889vw]">
                          {item.price}
                        </span>
                        <Button href="#" className="group-hover:opacity-100 opacity-60 transition-opacity duration-300">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col items-center justify-center py-[10vh] text-center">
              <h3 className="mb-4 text-[24px] leading-[1.2] font-[470] tracking-[-0.03em] text-void-black lg:text-[2.31481vw]">
                Stay Updated
              </h3>
              <p className="mb-8 text-[18px] leading-[1.4] font-light text-void-black/80 lg:text-[1.38889vw]">
                Get notified about new products and exclusive offers
              </p>
              <div className="flex w-full max-w-md gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-none border-b border-void-black/20 bg-transparent px-2 py-3 text-void-black placeholder-void-black/60 focus:border-flare-red focus:outline-none lg:px-4 lg:py-4"
                />
                <Button href="#">Subscribe</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
