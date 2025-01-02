type Links = {
  id: number;
  text: string;
  path: string;
};

export const navLinks: Links[] = [
  {
    id: 1,
    text: "Início",
    path: "/#home",
  },
  {
    id: 2,
    text: "Quem somos",
    path: "/#about",
  },
  {
    id: 3,
    text: "Como funciona",
    path: "/#how",
  },
  {
    id: 4,
    text: "Estatísticas",
    path: "/game",
  },
  {
    id: 5,
    text: "Sugestões",
    path: "/suggestions",
  },
];
