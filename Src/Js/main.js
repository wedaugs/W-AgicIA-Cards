document.addEventListener("DOMContentLoaded", () => {
  // 1. SELEÇÃO DOS ELEMENTOS
  const selectCategoria = document.getElementById("categoria");
  const inputPreco = document.getElementById("preco");
  const btnFiltrar = document.querySelector(".btn-filtrar");
  const listaCartas = document.querySelectorAll(".carta"); // Pega todas as <li>
  const mensagemSemResultados = document.getElementById(
    "mensagem-sem-resultados"
  );

  // 2. FUNÇÃO DE FILTRAGEM
  function filtrarCartas() {
    // Pega os valores digitados/selecionados pelo usuário
    const filtroCategoria = selectCategoria.value.toLowerCase(); // ex: 'épica'
    const filtroPreco = Number(inputPreco.value); // ex: 3000 (ou 0 se vazio)

    let temCartaVisivel = false; // começa assumindo que nao tem nada

    // Passa por CADA carta da lista
    listaCartas.forEach((carta) => {
      // A. Ler os dados direto do HTML (data-categoria e data-preco)
      // .dataset acessa os atributos 'data-*'
      const categoriaCarta = carta.dataset.categoria.toLowerCase();
      const precoCarta = Number(carta.dataset.preco);

      // B. Validação (Lógica Boolena)

      // A categoria bate? (Ou se o usuário não selecionou nada, aceita todas)
      const ehCategoriaValida =
        filtroCategoria === "" || categoriaCarta === filtroCategoria;

      // O preço é menor ou igual? (Ou se o campo estiver vazio, aceita qualquer preço)
      // Se o input estiver vazio, filtroPreco será 0.
      const ehPrecoValido =
        inputPreco.value === "" || precoCarta <= filtroPreco;

      // C. Ação: Mostrar ou Esconder
      if (ehCategoriaValida && ehPrecoValido) {
        carta.style.display = ""; // Mostra a carta (ou "flex" dependendo do seu CSS)
        temCartaVisivel = true;
      } else {
        carta.style.display = "none"; // Esconde a carta
      }
    });

    if (temCartaVisivel) {
      // Se tem carta, esconde a mensagem de erro
      mensagemSemResultados.style.display = "none";
    } else {
      // Se nenhuma carta, mostra a mensagem de erro
      mensagemSemResultados.style.display = "block";
    }
  }

  // 3. OUVINTE DE EVENTO
  btnFiltrar.addEventListener("click", filtrarCartas);
});
