"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Header from "@/components/Server/SectionHeader";
import Image from "next/image";
import TheLineCollections from "@/public/assets/images/the-studio/the-line-collections.png";
import Desk from "@/public/assets/images/the-studio/desk.png";
import Label from "@/components/Label";
import StyledLink from "@/components/Server/StyledLink";
import { cn } from "@/utils/cn";

export default function TheStudio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["50vh end", "100vh end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["50vh", "0vh"]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], ["7deg", "0deg"]);
  const x = useTransform(scrollYProgress, [0, 0.3], ["-10%", "0%"]);
  const awards = [
    { label: "Brand Strategy & Positioning", href: "" },
    { label: "Identity Systems & Guidelines", href: "" },
    { label: "Motion & 3D Design", href: "" },
    { label: "UI/UX & Product Design", href: "" },
    { label: "Websites & Headless CMS", href: "" },
    { label: "Content & Production", href: "" },
    { label: "E‑commerce & Conversion", href: "" },
    { label: "Campaigns & Creatives", href: "" },
  ];
  const mediaFeatures = [
    "AWWWARDS",
    "IT'S NICE THAT",
    "CREATIVE REVIEW",
    "DESIGN WEEK",
    "FAST COMPANY",
    "FORBES",
    "TECHCRUNCH",
    "THE GUARDIAN",
    "BLOOMBERG",
    "WIRED (JP)",
    "DEZEEN",
    "DESIGNBOOM",
    "YANKO DESIGN",
    "ADOBE BLOG",
    "BEHANCE EDITORIAL",
    "DRIBBBLE INSPIRATION",
  ];

  return (
    <div ref={ref} className="pointer-events-none relative z-40">
      <motion.div
        style={{ x, y, rotate }}
        className="pointer-events-auto origin-[0%_0%] overflow-hidden bg-off-white max-lg:pt-2 lg:origin-[0%_50%]"
      >
        <Header label="Make your mark" title="The Reviver Studio" />
        <div className="mt-[158px] flex flex-col lg:mt-[18.5182vw] lg:flex-row lg:px-[0.46296vw]">
          <ImageContainer className="lg:flex-[0.55]" />
          <div className="max-lg:px-2 max-lg:pt-20 lg:flex-[0.45]">
            <Label className="slash-before mb-4 lg:mb-[0.92592vw]">
              The lowdown
            </Label>
            <p className="mb-16 text-[24px] leading-[1.1] font-[470] tracking-[-0.01em] lg:mb-[3.7037vw] lg:max-w-[37.26852vw] lg:text-[1.62037vw] lg:font-normal">
              Reviver Studio is a design, motion, and product partner helping brands launch, evolve,
              and grow. We blend strategy with craft to build identities, digital experiences, and
              content that perform across every touchpoint.
            </p>
            <Label className="slash-before mb-4 lg:mb-[0.92592vw]">
              What we do & where we're featured
            </Label>
            <div className="grid grid-rows-[auto_auto] gap-2 text-base leading-[1.1] font-[440] tracking-[-0.01em] lg:grid-cols-2 lg:gap-[0.46296vw] lg:text-[0.92593vw]">
              {/* Increased text size */}
              <div className="space-y-[.11574vw] text-[20px] lg:text-[1.15vw]">
                {[
                  { label: "Brand strategy & positioning", href: "" },
                  { label: "Identity & design systems", href: "" },
                  { label: "Campaigns & content", href: "" },
                  { label: "Film, motion & 3D", href: "" },
                  { label: "Websites & digital products", href: "" },
                  { label: "E‑commerce & conversion", href: "" },
                  { label: "Social, growth & assets", href: "" },
                  { label: "Production & post", href: "" },
                ].map(({ label, href }, i) => (
                  <StyledLink key={`awards[${i}]`} href={href}>
                    {label}
                  </StyledLink>
                ))}
              </div>
              <div className="space-y-[.11574vw] text-[20px] lg:text-[1.15vw]">
                {[
                  "ADWEEK",
                  "CAMPAIGN",
                  "SHOTS",
                  "IT'S NICE THAT",
                  "CREATIVE REVIEW",
                  "AWWWARDS",
                  "BEHANCE EDITORIAL",
                  "DRIBBBLE INSPIRATION",
                  "DESIGN WEEK",
                  "WIRED",
                  "FORBES",
                  "TECHCRUNCH",
                  "THE GUARDIAN",
                  "DEZEEN",
                ].map((feature, i) => (
                  <div key={`mediaFeatures[${i}]`}>{feature}</div>
                ))}
              </div>
            </div>
            <div className="mt-16 space-y-[3px] lg:mt-[3.7037vw] lg:space-y-[0.34722vw]">
              <p className="text-[36px] leading-[0.95] font-[600] tracking-[-0.03em] lg:text-[2.6vw]">
                “Design is not just what it looks like and feels like. Design is how it works.”
              </p>
              <p className="pl-[15px] text-sm leading-[1.2] font-[500] tracking-[-0.01em] lg:pl-[0.86806vw] lg:text-[0.85vw]">
                – Steve Jobs
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ImageContainer({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "0.8 end"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["25%", "45%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], ["8deg", "4.89deg"]);

  const x2 = useTransform(scrollYProgress, [0, 1], ["-45%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], ["4.89deg", "0deg"]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <motion.div
        style={{ x: x1, y: y1, rotate: rotate1 }}
        className="max-w-4/5 lg:max-w-3/5"
      >
        <Image src={Desk} alt="desk" className="h-auto w-full" />
      </motion.div>
      <motion.div
        style={{ x: x2, y: y2, rotate: rotate2 }}
        className="absolute top-0 w-full max-w-4/5 lg:max-w-3/5"
      >
        <Image
          src={TheLineCollections}
          alt="the-line-collections"
          className="h-auto w-full"
        />
      </motion.div>
    </div>
  );
}
