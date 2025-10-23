// Importar o objeto que possui os cards
import { games } from "./objetos.js";

// Pegar no HTML o elemento que recebrá os cards
const gridCards = document.querySelector("#grid-cards");

// Percorrer o objeto e, para cada game existente, montaremos o seu card
games.forEach(game => {
    gridCards.innerHTML += `
    <div class="card-games col-md-6 col-lg-4 col-xl-3 my-2 py-4 text-center">
        <a href="" class="text-decoration-none">
        <div class="card-games">
            <img src="${game.imagem}" class="card-img-top" alt="${game.nome}">
            <div class="card-body card-games-details w-100">
                <h3 class="color-blue-300">${game.nome}</h3>
                <p class="text-light">${game.plataformas}</p>
                <p class="fw-bolder text-light">R$ ${game.preco}</p>
            </div>
        </div>
        </a>
    </div>
    `
})