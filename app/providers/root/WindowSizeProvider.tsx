"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const WindowSizeContext = createContext<boolean>(true);

export const WindowSizeProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  // Start with a mobile-first default to match SSR
  const [isMobile, setIsMobile] = useState<boolean>(true);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 1024);
    };
    handleResize(); // Will update on client after hydration
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={isMobile}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useIsDesktop = () => useContext(WindowSizeContext);
