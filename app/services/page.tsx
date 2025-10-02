"use client";
import Group from "@/sections/Group";
import LogoWithServices from "@/components/SVGs/LogoWithServices";
import TheStudio from "@/sections/TheStudio";
import ClientsPlusPartners from "@/sections/ClientsPlusPartners";
import News from "@/sections/News";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect } from "react";
import CallToAction from "@/components/Server/CallToAction";
import { motion } from "motion/react";
import Image from "next/image";
import SquareImg from "@/public/assets/images/square.png";

export default function ServicesPage() {
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    return () => setNavTheme("dark");
  }, [setNavTheme]);

  const SERVICES: { title: string; description: string; image: typeof SquareImg }[] = [
    { title: "Brand Strategy", description: "Positioning, naming, messaging, and go‑to‑market foundations.", image: SquareImg },
    { title: "Identity Design", description: "Logos, visual systems, typography, color, and brand guidelines.", image: SquareImg },
    { title: "Packaging", description: "Structural design, artwork systems, and print production support.", image: SquareImg },
    { title: "Motion & 3D", description: "Title sequences, product animations, and dynamic brand assets.", image: SquareImg },
    { title: "Product Design (UI/UX)", description: "Web/app flows, wireframes, design systems, and prototypes.", image: SquareImg },
    { title: "Websites & CMS", description: "Marketing sites, headless CMS, and high‑performance builds.", image: SquareImg },
    { title: "E‑commerce", description: "Storefront UX, PDPs, checkout flows, and conversion optimization.", image: SquareImg },
    { title: "Marketing Creatives", description: "Campaign key visuals, social kits, and ad creatives at scale.", image: SquareImg },
    { title: "Content & Production", description: "Photo/video production, post, and content toolkits.", image: SquareImg },
  ];

  return (
    <main>
      <Group Logo={LogoWithServices} showHighlights={false} showProjects={false} compact={true} />

      {/* Services Section - light design */}
      <div className="relative z-30 flex flex-col gap-[5vh] overflow-x-clip bg-[#f8f8f8] px-2 py-[6vh] text-[#0b0b0b] lg:gap-[10vh] lg:px-[0.46296vw] lg:py-[8vh]">
        <div className="flex flex-col gap-[2vh] lg:gap-[3vh]">
          <h2 className="text-[36px] font-bold leading-[1.1] lg:text-[4vw]">What we do</h2>
          <p className="max-w-[80ch] text-[18px] leading-[1.6] text-[#0b0b0b]/75 lg:text-[1.3vw]">
            We partner across strategy, identity, product, content, and growth to build brands that move.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[2vh] lg:grid-cols-3 lg:gap-[2vw]">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.19, 1, 0.22, 1] }}
              className="group rounded-none border border-[#0b0b0b]/12 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-flare-red/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:p-[1.4vw]"
            >
              <div className="flex flex-col gap-[1.6vh]">
                <div className="text-[22px] font-bold leading-tight lg:text-[1.8vw]">{s.title}</div>
                <div className="text-[16px] leading-[1.7] text-[#0b0b0b]/75 lg:text-[1.05vw]">{s.description}</div>
                <div className="mt-2">
                  <div className="relative w-full overflow-hidden rounded-none">
                    <Image src={s.image} alt={s.title} className="w-full object-cover aspect-square" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp + Email (inline) */}
        <div className="flex flex-col gap-[2vh] pt-[2vh] lg:flex-row lg:gap-[3vw] lg:pt-[3vh]">
          <CallToAction
            href="https://wa.me/+919899706783"
            label="WhatsApp"
            size="sm"
            className="text-[#0b0b0b]"
          />
          <CallToAction
            href="mailto:nitin@reviverstudio.com"
            label="nitin@reviverstudio.com"
            size="sm"
            className="text-[#0b0b0b]"
          />
        </div>
      </div>

      <TheStudio />
      <ClientsPlusPartners />
      <div className="relative overflow-clip bg-flare-red">
        <News />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}