"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const suggestionSchema = z.object({
  name: z.string().min(3, "Nome curto!"),
  message: z.string().min(10, "Mensagem curta!"),
});

type SuggestionData = z.infer<typeof suggestionSchema>;

const SuggestionForm = () => {
  const registerForm = useForm<SuggestionData>({
    resolver: zodResolver(suggestionSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = registerForm;

  const onSubmit = async (data: SuggestionData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col justify-center items-center gap-6"
    >
      <fieldset className="flex flex-col gap-2 w-full">
        <label htmlFor="" className="font-bold">
          Nome
        </label>
        <input
          type="text"
          {...register("name")}
          className="rounded-xl opacity-85 w-full h-9 text-[#0B1D51] p-2"
        />
        {errors.name && <span className="text-sm">{errors.name.message}</span>}
      </fieldset>
      <fieldset className="w-full flex flex-col gap-2">
        <label htmlFor="" className="font-bold">
          Deixe aqui a sua sugestão
        </label>
        <textarea
          {...register("message")}
          className="rounded-xl w-full h-64 text-[#0B1D51] p-2 opacity-85"
        />
        {errors.message && (
          <span className="text-sm">{errors.message.message}</span>
        )}
      </fieldset>
      <button
        type="submit"
        className="font-bold text-[#0B1D51] text-lg md:max-w-64 flex flex-row w-full lg:w-60 justify-center items-center gap-3 bg-[#F26419] hover:scale-105 hover:border-2 hover:border-[#0B1D51] rounded-xl py-[6px] lg:py-2 shadow-lg mt-5"
      >
        Enviar
      </button>
    </form>
  );
};

export default SuggestionForm;
