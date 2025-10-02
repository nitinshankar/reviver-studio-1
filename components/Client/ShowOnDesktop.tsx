"use client";

import { useIsDesktop } from "@/app/providers/root/WindowSizeProvider";
import React, { ReactNode, useEffect, useState } from "react";

interface ShowOnDesktopProps {
  children: ReactNode;
  mobileFallBack?: ReactNode;
}

export default function ShowOnDesktop({
  children,
  mobileFallBack,
}: ShowOnDesktopProps) {
  const isDesktop = useIsDesktop();
  
  // Don't render anything during SSR, let client decide after hydration
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null; // Will render after hydration
  }
  
  if (!isDesktop) return mobileFallBack || null;
  return <>{children}</>;
}
