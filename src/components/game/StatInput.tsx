"use client";

import { useState } from "react";

interface StatProps {
  labelName: string;
}

const StatInput = ({ labelName }: StatProps) => {
  const [contador, setContador] = useState(0);

  return (
    <div className="flex flex-row justify-start items-center w-full gap-4">
      <label className="w-full" htmlFor="">
        {labelName}
      </label>
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <p>Convertidos</p>
        <div className="flex flex-row justify-center items-center w-full gap-4">
          <button
            className="h-6 w-6 bg-white text-black flex justify-center items-center font-bold rounded-xl"
            onClick={() => setContador(contador - 1)}
          >
            -
          </button>
          <p className="h-8 w-8 p-1 bg-white text-black flex justify-center items-center font-bold rounded-xl">
            {contador}
          </p>
          <button
            className="h-6 w-6 bg-white text-black flex justify-center items-center font-bold rounded-lg"
            onClick={() => setContador(contador + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatInput;
