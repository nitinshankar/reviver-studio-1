import * as motion from "motion/react-client";
export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 126 126"
      width="126"
      height="126"
      className="h-auto w-full"
    >
      <motion.path
        d="M25,0C16.67,4.12,8.33,8.25,0,12.37v25.02c8.33,4.12,16.67,8.25,25,12.37,8.33-4.12,16.67-8.25,25-12.37V12.37C41.67,8.25,33.33,4.12,25,0ZM44.28,34.35l-19.28,9.54-19.28-9.54v-17.24l19.28,9.54,19.28-9.54v17.24Z"
        variants={{
          light: { fill: "#f8f8f8" },
          dark: { fill: "#0b0b0b" },
        }}
      ></motion.path>
    </svg>
  );
}
