import React from "react";
import StatInput from "./StatInput";

const StatsSection = () => {
  return (
    <form className="flex flex-col gap-6 w-full justify-center items-center">
      <StatInput labelName="Arremessos de 2 pontos" />
      <StatInput labelName="Arremessos de 3 pontos" />
      <StatInput labelName="Lance livre" />
      <StatInput labelName="Rebotes" />
      <StatInput labelName="Roubos de bola" />
      <StatInput labelName="Tocos" />
      <StatInput labelName="Assitencias" />
      <StatInput labelName="Faltas" />
      <div className="flex flex-col gap-4 w-full mt-8">
        <button
          className="bg-white text-black font-bold rounded-xl py-2 shadow-lg"
          type="button"
        >
          Resetar
        </button>
        <button
          className="bg-orange-500 text-black font-bold rounded-xl py-2 shadow-lg"
          type="submit"
        >
          Gerar PDF
        </button>
      </div>
    </form>
  );
};

export default StatsSection;
