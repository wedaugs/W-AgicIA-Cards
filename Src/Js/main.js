document.addEventListener("DOMContentLoaded", () => {
  const selectCategoria = document.getElementById("categoria");
  const inputPreco = document.getElementById("preco");
  const btnFiltrar = document.querySelector(".btn-filtrar");
  const listaCartas = document.querySelectorAll(".carta"); // Pega todas as <li>
  const mensagemSemResultados = document.getElementById(
    "mensagem-sem-resultados"
  );

  function filtrarCartas() {
    const filtroCategoria = selectCategoria.value.toLowerCase(); // Pega o valor selecionado no select de categoria
    const filtroPreco = Number(inputPreco.value); // Pega o valor do input de preço
    let temCartaVisivel = false;

    listaCartas.forEach((carta) => {
      const categoriaCarta = carta.dataset.categoria.toLowerCase();
      const precoCarta = Number(carta.dataset.preco);

      const ehCategoriaValida =
        filtroCategoria === "" || categoriaCarta === filtroCategoria;

      const ehPrecoValido =
        inputPreco.value === "" || precoCarta <= filtroPreco;

      if (ehCategoriaValida && ehPrecoValido) {
        carta.style.display = ""; // Mostra a carta
        temCartaVisivel = true;
      } else {
        carta.style.display = "none"; // Esconde a carta
      }
    });

    if (temCartaVisivel) {
      mensagemSemResultados.style.display = "none";
    } else {
      mensagemSemResultados.style.display = "block";
    }
  }

  btnFiltrar.addEventListener("click", filtrarCartas);
});
