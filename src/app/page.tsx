import HeroText from "@/components/hero/HeroText";
import CtaBtn from "@/components/hero/CtaBtn";
import HeroImage from "@/components/hero/HeroImage";
import ScrollDownBtn from "@/components/hero/ScrollDownBtn";

export default function Home() {
  return (
    <main className="relative w-full h-[90dvh]">
      <HeroImage />
      <section className="absolute top-1/4 left-0 w-full px-4 flex flex-col gap-4 justify-center items-center">
        <HeroText />
        <CtaBtn />
      </section>
      <ScrollDownBtn />
    </main>
  );
}
