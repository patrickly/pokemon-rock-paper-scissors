// pokemon
// create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)
var pokemonDB = [
	{
		name: 'charmander',
		type: 'fire',
		hp: 39,
		attack: 52,
		defense: 43,
		level: 1,
		img: '/img/charmander.gif'
	},
	{
		name: 'bulbasaur',
		type: 'grass',
		hp: 45,
		attack: 49,
		defense: 49,
		level: 1,
		img: '/img/bulbasaur.gif'
	},
	{
		name: 'squirtle',
		type: 'water',
		hp: 44,
		attack: 48,
		defense: 65,
		level: 1,
		img: '/img/squirtle.gif'
	}
];

var gameState = {
	userPokemon: '',
	rivalPokemon: ''
};
console.log(gameState);
var pokemonsEl = document
	.querySelector('.select-screen')
	.querySelectorAll('.character');

console.log(pokemonsEl);
var battleScreenEl = document.querySelector('#battle-screen');
console.log('bsl', battleScreenEl);
var i = 0;
while (i < pokemonsEl.length) {
	pokemonsEl[i].onclick = function() {
		var pokemonName = this.dataset.pokemon;
		var player1Img = document
			.querySelector('.player1')
			.getElementsByTagName('img');
		var player2Img = document
			.querySelector('.player2')
			.getElementsByTagName('img');

		gameState.userPokemon = pokemonName;

		cpuPick();
		battleScreenEl.classList.toggle('active');

		var currentPokemon = pokemonDB.filter(function(pokemon) {
			return pokemon.name == gameState.userPokemon;
		});

		var currentRivalPokemon = pokemonDB.filter(function(pokemon) {
			return pokemon.name == gameState.rivalPokemon;
		});

		player1Img[0].src = currentPokemon[0].img;
		player2Img[0].src = currentRivalPokemon[0].img;

		console.log(currentPokemon);
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
// 		defense: 39,
// 		level: 1
// 	},
// 	{
// 		name: 'charmander',
// 		type: 'fire',
// 		attack: 52,
// 		defense: 39,
// 		level: 1
// 	}
// ];

// var attack = 20;
// var level = 10;
// var stack = 1.3;
// var defense = 39;

// // create a formula for attacks
// console.log((attack * level * stack) / 7);

// // create a formula for health
// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(0.2 * Math.sqrt(level) * defense * 15);

// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// // p1 vs p2

// // when one user loses all his health declare a winner
