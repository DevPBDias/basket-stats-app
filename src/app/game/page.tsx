import StatInput from "@/components/game/StatInput";
import Titles from "@/components/game/Titles";

export default function Game() {
  return (
    <main className="w-full h-screen relative flex justify-center items-center bg-black">
      <section className="absolute w-full px-4 top-20 flex flex-col gap-9 lg:w-2/3 lg:top-40 bg-black py-8">
        <Titles />
        <StatInput labelName="Arremessos de 2 pontos" />
        <StatInput labelName="Arremessos de 2 pontos" />
        <StatInput labelName="Arremessos de 2 pontos" />
        <StatInput labelName="Arremessos de 2 pontos" />
        <StatInput labelName="Arremessos de 2 pontos" />
        <StatInput labelName="Arremessos de 2 pontos" />
        <StatInput labelName="Arremessos de 2 pontos" />
        <StatInput labelName="Arremessos de 2 pontos" />
        <StatInput labelName="Arremessos de 2 pontos" />
      </section>
    </main>
  );
}
