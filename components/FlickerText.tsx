"use client";
import { useIsInitialRender } from "@/hooks/useIsInitialRender";
import { useIsMouseIn } from "@/hooks/useIsMouseIn";
import { cubicBezier } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";
export default function FlickerText({
  children,
  size = "lg",
}: {
  children: string;
  size?: "lg" | "sm";
}) {
  const isInitialRender = useIsInitialRender();
  const { containerRef, mouseIn } = useIsMouseIn<HTMLDivElement>();
  const x = 0.08;
  return (
    <>
      <style>
        {`
        #cta{
            --cta-x:58px;
         }
        @media (min-width:1024px){
            #cta{
             --cta-x:12.70602vw;
            }
        }
        #cta-sm{
            --cta-x:34px;
        }
        @media (min-width:1024px){
            #cta-sm{
              --cta-x:4.5vw;
            }
        }
         `}
      </style>
      <div ref={containerRef} className="w-full">
        <div className="relative w-fit">
          <motion.div
            id={size === "sm" ? "cta-sm" : "cta"}
            suppressHydrationWarning={true}
            variants={{
              initial: {
                x: "0px",
                transition: {
                  duration: 0.8,
                  ease: cubicBezier(0.19, 1, 0.22, 1),
                },
              },
              whileHover: {
                x: "var(--cta-x)",
                transition: {
                  duration: 0.5,
                  ease: cubicBezier(0.19, 1, 0.22, 1),
                },
              },
            }}
            className={cn(
              "leading-[0.95] font-medium tracking-[-0.04em] text-void-black",
              size === "sm"
                ? "text-[32px] lg:text-[3.2vw]"
                : "text-[72px] lg:indent-[-0.90vw] lg:text-[12.15278vw]",
            )}
          >
            {children.split("").map((eachLetter, i) => (
              <motion.span
                key={`children[${i}]`}
                initial="initial"
                animate={mouseIn ? "animate" : "initial"}
                variants={{
                  initial: {
                    opacity: isInitialRender ? 1 : [0, 1, 0, 0, 1, 1],
                    transition: {
                      duration: (children.length - 1) * (x / 2) + 2 * x,
                      times: [
                        0,
                        i * (x / 2),
                        i * (x / 2) + (2 * x) / 5,
                        i * (x / 2) + (2 * x) / 5 + (6 / 5) * x,
                        i * (x / 2) + (4 * x) / 5 + (6 / 5) * x,
                        (children.length - 1) * (x / 2) + 2 * x,
                      ].map(
                        (eachTimeStamp) =>
                          eachTimeStamp /
                          ((children.length - 1) * (x / 2) + 2 * x),
                      ),
                    },
                  },
                  animate: {
                    opacity: isInitialRender ? 1 : [1, 1, 0, 0, 1, 1],
                    transition: {
                      duration: (children.length - 1) * (x / 2) + 2 * x,
                      times: [
                        0,
                        i * (x / 2),
                        i * (x / 2) + x / 2,
                        i * (x / 2) + x / 2 + x,
                        i * (x / 2) + 2 * x,
                        (children.length - 1) * (x / 2) + 2 * x,
                      ].map(
                        (eachTimeStamp) =>
                          eachTimeStamp /
                          ((children.length - 1) * (x / 2) + 2 * x),
                      ),
                      repeat: 1,
                    },
                  },
                }}
                className="last:tracking-wider"
              >
                {eachLetter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="absolute bottom-0 h-[1.5px] bg-void-black"
            variants={{
              whileHover: {
                width: "0%",
                right: "0%",
                left: "auto",
              },
              initial: {
                width: "100%",
                left: "0px",
                right: "auto",
              },
            }}
            transition={{
              left: {
                duration: 0,
              },
              right: {
                duration: 0,
              },
              default: {
                duration: 0.8,
                ease: cubicBezier(0.19, 1, 0.22, 1),
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
