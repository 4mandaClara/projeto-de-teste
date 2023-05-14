const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
      ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

