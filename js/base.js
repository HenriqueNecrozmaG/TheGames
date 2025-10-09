//Usando o console
console.log("Usando Javascript");
console.log("Hello World");
console.log("Outra mensagem");

const objetoPokemon = {
    nome: "Pikachu",
    hp: 35,
    attack: 55,
    defense: 40,
    sAttack: 50,
    sDefense: 50,
    speed: 90,
    isLegend: false
}

console.table(objetoPokemon);


document.getElementById("nomePokemon").textContent = `Pokémon: ${objetoPokemon.nome}`;
document.getElementById("hpPokemon").textContent = `HP: ${objetoPokemon.hp}`;
document.getElementById("attackPokemon").textContent = `Attack: ${objetoPokemon.attack}`;
document.getElementById("defensePokemon").textContent = `Defense: ${objetoPokemon.defense}`;
document.getElementById("sAttackPokemon").textContent = `S. Attack: ${objetoPokemon.sAttack}`;
document.getElementById("sDefensePokemon").textContent = `S. Defense: ${objetoPokemon.sDefense}`;
document.getElementById("speedPokemon").textContent = `Speed: ${objetoPokemon.speed}`;
document.getElementById("legendPokemon").textContent = `É lendário: ${objetoPokemon.isLegend}`;
