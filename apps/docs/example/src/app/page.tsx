import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Examples } from "@/components/examples";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Features />
      <Examples />
    </div>
  );
}