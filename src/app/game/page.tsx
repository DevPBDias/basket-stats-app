import StatInput from "@/components/game/StatInput";
import StatsSection from "@/components/game/StatsSection";
import Titles from "@/components/game/Titles";

export default function Game() {
  return (
    <main className="w-full h-screen relative flex justify-center items-center bg-[#0B1D51]">
      <section className="absolute w-full px-4 top-20 flex flex-col gap-9 lg:w-2/3 lg:top-40 bg-[#0B1D51] py-8">
        <Titles />
        <StatsSection />
      </section>
    </main>
  );
}
