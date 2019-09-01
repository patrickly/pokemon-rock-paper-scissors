// State
var gameState = {
	userPokemon: '',
	rivalPokemon: '',
	pokemonDB: [
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
	],
	elements: {
		// elements
		pokemonsEl: document
			.querySelector('.select-screen')
			.querySelectorAll('.character'),
		battleScreenEl: document.querySelector('#battle-screen'),
		attackBtnsEl: document.querySelectorAll('.attack')
	},
	play: function(userAttack, cpuAttack) {
		console.log('cpuA', cpuAttack);
		var currentPokemon = gameState.currentPokemon[0];
		var currentRivalPokemon = gameState.currentRivalPokemon[0];

		switch (userAttack) {
			case 'rock':
				if (cpuAttack == 'paper') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);

						if (currentRivalPokemon.health > 0) {
							// cpu
							attackMove(
								currentRivalPokemon.attack,
								currentRivalPokemon.level,
								1.8,
								currentPokemon,
								currentRivalPokemon
							);
						}
					}
				}
				if (cpuAttack == 'scissors') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							1.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							attackMove(
								currentRivalPokemon.attack,
								currentRivalPokemon.level,
								0.8,
								currentPokemon,
								currentRivalPokemon
							);
						}
					}
				}
				if (cpuAttack == 'rock') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							attackMove(
								currentRivalPokemon.attack,
								currentRivalPokemon.level,
								0.8,
								currentPokemon,
								currentRivalPokemon
							);
						}
					}
				}
				break;
			case 'paper':
				if (cpuAttack == 'paper') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							attackMove(
								currentRivalPokemon.attack,
								currentRivalPokemon.level,
								0.8,
								currentPokemon,
								currentRivalPokemon
							);
						}
					}
				}
				if (cpuAttack == 'scissors') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							attackMove(
								currentRivalPokemon.attack,
								currentRivalPokemon.level,
								1.8,
								currentPokemon,
								currentRivalPokemon
							);
						}
					}
				}
				if (cpuAttack == 'rock') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							1.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							attackMove(
								currentRivalPokemon.attack,
								currentRivalPokemon.level,
								0.8,
								currentPokemon,
								currentRivalPokemon
							);
						}
					}
				}
				break;
			case 'scissors':
				if (cpuAttack == 'paper') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							1.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							attackMove(
								currentRivalPokemon.attack,
								currentRivalPokemon.level,
								0.8,
								currentPokemon,
								currentRivalPokemon
							);
						}
					}
				}
				if (cpuAttack == 'scissors') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							attackMove(
								currentRivalPokemon.attack,
								currentRivalPokemon.level,
								0.8,
								currentPokemon,
								currentRivalPokemon
							);
						}
					}
				}
				if (cpuAttack == 'rock') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							attackMove(
								currentRivalPokemon.attack,
								currentRivalPokemon.level,
								1.8,
								currentPokemon,
								currentRivalPokemon
							);
						}
					}
				}
				break;
		}
	}
};

// this is the initial loop
var i = 0;
while (i < gameState.elements.pokemonsEl.length) {
	// add function to all characters on screen select
	gameState.elements.pokemonsEl[i].onclick = function() {
		// current selected pokemons name
		var pokemonName = this.dataset.pokemon;

		// elements for images on battle screen
		var player1Img = document
			.querySelector('.player1')
			.getElementsByTagName('img');
		var player2Img = document
			.querySelector('.player2')
			.getElementsByTagName('img');

		// we save the current pokemon
		gameState.userPokemon = pokemonName;

		// cpu picks a pokemon
		cpuPick();
		// change screen to battle scene
		gameState.elements.battleScreenEl.classList.toggle('active');

		// select data from current user pokemon
		gameState.currentPokemon = gameState.pokemonDB.filter(function(pokemon) {
			return pokemon.name == gameState.userPokemon;
		});
		player1Img[0].src = gameState.currentPokemon[0].img;

		// select data from current cpu pokemon
		gameState.currentRivalPokemon = gameState.pokemonDB.filter(function(
			pokemon
		) {
			return pokemon.name == gameState.rivalPokemon;
		});
		player2Img[0].src = gameState.currentRivalPokemon[0].img;

		// current user and cpu pokemon initial health
		gameState.currentPokemon[0].health = calculateInitialHealth(
			gameState.currentPokemon
		);
		gameState.currentRivalPokemon[0].health = calculateInitialHealth(
			gameState.currentRivalPokemon
		);

		console.log('h', gameState);
	};
	i++;
}

var a = 0;

while (a < gameState.elements.attackBtnsEl.length) {
	gameState.elements.attackBtnsEl[a].onclick = function() {
		var attackName = this.dataset.attack;
		gameState.currentUserAttack = attackName;

		gameState.play(attackName, cpuAttack());
	};
	a++;
}

var cpuAttack = function() {
	var attacks = ['rock', 'paper', 'scissors'];
	return attacks[randomNumber(0, 3)];
};

var calculateInitialHealth = function(user) {
	return 0.2 * Math.sqrt(user[0].level) * user[0].defense * user[0].hp;
};

var attackMove = function(attack, level, stack, enemy, attacker) {
	console.log(enemy.name, ' before: ', enemy.health);

	var attackAmount = attack * level * stack;
	enemy.health -= attackAmount;
	// console.log('atkAMt ', attackAmount);
	checkWinner(enemy, attacker);
	console.log(enemy.name, ' after: ', enemy.health);
};

var checkWinner = function(enemy, attacker) {
	if (enemy.health <= 0) {
		console.log('HEY WINNERRRRR' + attacker.name);
	}
};

var randomNumber = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

var cpuPick = function() {
	gameState.rivalPokemon =
		gameState.elements.pokemonsEl[randomNumber(0, 3)].dataset.pokemon;
};

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
