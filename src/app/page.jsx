'use client';

import { useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "@/components/Hero/page";
import Preloader from "@/components/Preloader/page";

export default function Home() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {!isPreloaderComplete && (
        <Preloader onPreloaderComplete={() => setIsPreloaderComplete(true)} />
      )}
      <div className="page-content hero">
        <Hero isPreloaderComplete={isPreloaderComplete} />
      </div>
    </ReactLenis>
  );
}
