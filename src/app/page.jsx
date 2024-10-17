'use client';

import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "@/components/Hero/page";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="page-content hero">
        <Hero />
      </div>
    </ReactLenis>
  );
}
