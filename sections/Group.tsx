import React from "react";

import Video from "@/components/Server/Video";
import GroupClient from "./GroupClient";
import { ComponentType } from "react";

export default function Group({ Logo, showHighlights = true, showProjects = true, compact = false }: { Logo?: ComponentType<any>; showHighlights?: boolean; showProjects?: boolean; compact?: boolean }) {
  return (
    <div className={"relative max-w-screen overflow-x-clip " + (compact ? "" : "lg:mb-[25vh]")}>
      <div className={"sticky top-0 z-10 " + (compact ? "pb-0" : "pb-[100vh]")}>
        <div className="h-screen">
          <Video src="/assets/videos/hero.mp4" />
        </div>
      </div>
      <GroupClient Logo={Logo} showHighlights={showHighlights} showProjects={showProjects} />
    </div>
  );
}
