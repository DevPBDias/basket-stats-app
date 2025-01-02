"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
interface StatProps {
  labelName: string;
}

const StatInput = ({ labelName }: StatProps) => {
  const [done, setDone] = useState(0);
  const [mistake, setMistake] = useState(0);

  return (
    <div className="flex flex-col justify-center items-start w-full">
      <label className="w-full font-bold text-yellow-400" htmlFor="">
        {labelName}
      </label>
      <section className="flex flex-row justify-between items-center w-full p-2 gap-8">
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-green-600 text-xs">Convertidos</p>
          <div className="flex flex-row justify-start items-center w-full gap-4">
            <button
              className="h-6 w-6 text-black flex justify-center items-center font-bold rounded-md"
              onClick={() => setDone(done - 1)}
            >
              <MinusCircle color="white" size={20} />
            </button>

            <input
              value={done}
              onChange={(e) => setDone(Number(e.target.value))}
              className="h-8 w-8 p-1 bg-white text-black flex justify-center items-center font-bold text-center rounded-lg"
            />
            <button
              className="h-6 w-6 text-black flex justify-center items-center font-bold rounded-md"
              onClick={() => setDone(done + 1)}
            >
              <PlusCircle color="white" size={20} />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-full gap-2">
          <p className="text-red-600 text-xs">Errados</p>
          <div className="flex flex-row justify-start items-center w-full gap-4">
            <button
              className="h-6 w-6 text-black flex justify-center items-center font-bold rounded-md"
              onClick={() => setMistake(mistake - 1)}
            >
              <MinusCircle color="white" size={20} />
            </button>
            <input
              value={mistake}
              onChange={(e) => setMistake(Number(e.target.value))}
              className="h-8 w-8 p-1 bg-white text-black flex justify-center items-center text-center font-bold rounded-lg"
            />
            <button
              className="h-6 w-6 text-black flex justify-center items-center font-bold rounded-md"
              onClick={() => setMistake(mistake + 1)}
            >
              <PlusCircle color="white" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatInput;
