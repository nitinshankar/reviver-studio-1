import { cn } from "@/utils/cn";
// import { MotionValue } from "motion";
import * as motion from "motion/react-client";
import { CSSProperties, ReactNode } from "react";

interface ListProps {
  children: (ReactNode | string)[];
  className?: string;
  style?: CSSProperties;
}

export default function List({ children, className, style }: ListProps) {
  return (
    <motion.div
      style={{ ...style }}
      initial="initial"
      whileInView="whileInView"
      variants={{
        whileInView: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
      viewport={{ once: true }}
      className={cn("flex cursor-default items-center", className)}
    >
      {children.map((child, index) => (
        <div
          key={`listItem[${index}]`}
          className="flex items-center first:[&>:first-child]:hidden group"
        >
          <span className="font-light">/&nbsp;</span>
          <motion.span
            variants={{
              initial: { opacity: 0 },
              whileInView: { opacity: 1, transition: { duration: 0 } },
            }}
            className="transition-colors duration-200 hover:text-[#ff0000]"
          >
            {typeof child === 'string' ? (
              child.split('').map((letter, i) => (
                <motion.span
                  key={`letter[${i}]`}
                  className="inline-block"
                  whileHover={{
                    opacity: [1, 0, 1],
                    transition: {
                      duration: 0.1,
                      repeat: 2,
                      delay: i * 0.02,
                    },
                  }}
                >
                  {letter}
                </motion.span>
              ))
            ) : (
              child
            )}
          </motion.span>
          &nbsp;
        </div>
      ))}
    </motion.div>
  );
}
