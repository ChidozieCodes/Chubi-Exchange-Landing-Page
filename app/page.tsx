import Image from "next/image";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import PoweredBy from "@/components/PoweredBy";

export default function Home() {
  return (
    <main>
      <Hero />
      <FAQ />
      <PoweredBy />
    </main>
  );
}
