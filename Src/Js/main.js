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
    const filtroCategoria = selectCategoria.value.toLowerCase();
    const filtroPreco = Number(inputPreco.value); 

    let temCartaVisivel = false;

    listaCartas.forEach((carta) => {
      const categoriaCarta = carta.dataset.categoria.toLowerCase();
      const precoCarta = Number(carta.dataset.preco);

      const ehCategoriaValida =
        filtroCategoria === "" || categoriaCarta === filtroCategoria;

      const ehPrecoValido =
        inputPreco.value === "" || precoCarta <= filtroPreco;

      if (ehCategoriaValida && ehPrecoValido) {
        carta.style.display = "";
        temCartaVisivel = true;
      } else {
        carta.style.display = "none";
      }
    });

    if (temCartaVisivel) {
      mensagemSemResultados.style.display = "none";
    } else {
      mensagemSemResultados.style.display = "block";
    }
  }

  // 3. OUVINTE DE EVENTO
  btnFiltrar.addEventListener("click", filtrarCartas);
});
