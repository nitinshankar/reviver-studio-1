"use client";
import Group from "@/sections/Group";
import LogoWithAbout from "@/components/SVGs/LogoWithAbout";
import TheStudio from "@/sections/TheStudio";
import ClientsPlusPartners from "@/sections/ClientsPlusPartners";
import News from "@/sections/News";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { useSetNavTheme } from "@/app/providers/root/NavThemeProvider";
import { useEffect } from "react";
import { motion } from "motion/react";

export default function AboutPage() {
  const setNavTheme = useSetNavTheme();

  useEffect(() => {
    // Allow Hero to drive theme; ensure cleanup on unmount
    return () => setNavTheme("dark");
  }, [setNavTheme]);

  return (
    <main>
      <Group Logo={LogoWithAbout} showHighlights={false} showProjects={false} compact={true} />

      {/* About content */}
      <section className="relative z-30 overflow-x-clip bg-[#f8f8f8] px-2 py-[6vh] text-[#0b0b0b] lg:px-[0.46296vw] lg:py-[8vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-[1200px]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className="mb-[2vh] text-[32px] font-bold leading-[1.1] lg:mb-[1.2vw] lg:text-[3.6vw]"
          >
            About Reviver Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-[6vh] max-w-[90ch] text-[16px] leading-[1.75] text-[#0b0b0b]/80 lg:mb-[3vw] lg:text-[1.1vw]"
          >
            Reviver Studio is a multidisciplinary design and motion practice crafting brand systems, digital products, and content that move people. We blend strategy with execution — from identity and product to films and campaigns — to help founders and teams launch, evolve, and scale confident brands.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 gap-[3vh] lg:grid-cols-3 lg:gap-[2.5vw]"
          >
            {[
              {
                title: "Approach",
                body:
                  "Strategy-first, craft-obsessed. We simplify the complex, build clear narratives, and design systems that scale across every touchpoint.",
              },
              {
                title: "Capabilities",
                body:
                  "Brand strategy, identity, product (UI/UX), motion/3D, web builds, content production, and marketing creatives.",
              },
              {
                title: "Partners",
                body:
                  "We collaborate with startups to enterprises — embedding with teams to ship fast, iterate, and grow with measurable impact.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="rounded-[16px] border border-[#0b0b0b]/10 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-colors duration-300 hover:border-[#ff0000]/60 lg:p-[1.4vw]"
              >
                 <div className="mb-[1.8vh] text-[20px] font-bold leading-tight text-[#0b0b0b] lg:mb-[0.8vw] lg:text-[1.5vw]">
                  {item.title}
                </div>
                <div className="text-[15px] leading-[1.7] text-[#0b0b0b]/80 lg:text-[1.0vw]">
                  {item.body}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

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
