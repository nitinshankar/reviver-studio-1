"use client";
import { useIsDesktop } from "@/app/providers/root/WindowSizeProvider";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ScrollBar = dynamic(() => import("@/components/ScrollBar"), {
  ssr: false,
});

export default function ScrollBarWrapper() {
  const isDesktop = useIsDesktop();
  
  // Wait for hydration to complete before rendering
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted || !isDesktop) {
    return null;
  }
  
  return <ScrollBar />;
}
