var gameState = {
	userPokemon: '',
	rivalPokemon: ''
};
console.log(gameState);
var pokemonsEl = document
	.querySelector('.select-screen')
	.querySelectorAll('.character');

console.log(pokemonsEl);

var i = 0;
while (i < pokemonsEl.length) {
	pokemonsEl[i].onclick = function() {
		var pokemonName = this.dataset.pokemon;
		gameState.userPokemon = pokemonName;

		cpuPick();
		console.log(gameState);
	};
	i++;
}
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function cpuPick() {
	gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon;
}

// // pokemon
// // create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)
// var pokemons = [
// 	{
// 		name: 'charmander',
// 		type: 'fire',
// 		attack: 52,
// 		stamina: 39,
// 		level: 1
// 	},
// 	{
// 		name: 'charmander',
// 		type: 'fire',
// 		attack: 52,
// 		stamina: 39,
// 		level: 1
// 	}
// ];

// var attack = 20;
// var level = 10;
// var stack = 1.3;
// var stamina = 39;

// // create a formula for attacks
// console.log((attack * level * stack) / 7);

// // create a formula for health
// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(0.2 * Math.sqrt(level) * stamina * 15);

// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// // p1 vs p2

// // when one user loses all his health declare a winner
