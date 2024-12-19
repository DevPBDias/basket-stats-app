import { StaticImageData } from "next/image";
import step1 from "../../public/icons/step1.png";
import step2 from "../../public/icons/step2.png";
import step3 from "../../public/icons/step3.png";
import step4 from "../../public/icons/step4.png";

type HowCardContent = {
  id: number;
  icon: StaticImageData;
  title: string;
  text: string;
};

export const cardContent: HowCardContent[] = [
  {
    id: 1,
    icon: step1,
    title: "Acesse a Partida",
    text: 'Clique no botão "Ir para o Jogo" ou navegue pela aba correspondente no menu para começar.',
  },
  {
    id: 2,
    icon: step2,
    title: "Configure os Participantes",
    text: "Preencha os nomes dos jogadores ou times que você deseja acompanhar. Tudo pronto para registrar a ação!",
  },
  {
    id: 3,
    icon: step3,
    title: "Registre os Lances",
    text: "Anote cada ponto, rebote, assistência e outros dados nos campos corretos enquanto o jogo acontece. Simples e rápido.",
  },
  {
    id: 4,
    icon: step4,
    title: "Gere o Relatório Final",
    text: "Com um clique, transforme todos os dados da partida em um PDF completo e profissional. Perfeito para análise e compartilhamento.",
  },
];
