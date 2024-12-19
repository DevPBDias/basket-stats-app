const TextContent = () => {
  return (
    <section className="flex flex-col justify-center items-start w-full">
      <h2 className="w-full font-bold text-2xl">
        Transformando Dados em Insights, Play by Play
      </h2>
      <h4 className="w-full font-semibold text-lg mt-6">
        Foque no Jogo: Nossa interface intuitiva permite que você registre tudo
        rapidamente, sem complicações.
      </h4>
      <p className="w-full mt-6">
        No BasketStats, acreditamos que cada detalhe de uma partida conta.
        Queremos tornar o
        <strong className="font-bold">
          {" "}
          registro de estatísticas fácil e acessível{" "}
        </strong>
        para técnicos, fãs e analistas esportivos.
      </p>
      <p className="w-full mt-4 font-bold">No BasketStats, você pode:</p>
      <ul>
        <li>📊 Registrar estatísticas detalhadas de jogadores e equipes.</li>
        <li>💻 Usar a plataforma em qualquer dispositivo, de forma simples.</li>
        <li>📄 Gerar relatórios profissionais em PDF com um clique.</li>
        <li>✨ Focar no que realmente importa: o jogo!</li>
      </ul>
      <p className="w-full mt-4">
        Seja para acompanhar a evolução de um jogador ou traçar a estratégia
        perfeita, o BasketStats é o parceiro ideal para
        <strong className="font-bold"> transformar números em insights.</strong>
      </p>
    </section>
  );
};

export default TextContent;
