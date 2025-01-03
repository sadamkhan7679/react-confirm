"use client";
import { Hero } from "@/components/modules/hero";
import { Features } from "@/components/modules/features";
import { Examples } from "@/components/modules/examples";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Features />

      <Examples />
    </div>
  );
}
