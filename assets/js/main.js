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
		attackBtnsEl: document.querySelectorAll('.attack'),
		p1NameEl: document.querySelector('.player1').querySelector('.name'),
		p2NameEl: document.querySelector('.player2').querySelector('.name'),
		bannerEl: document.querySelector('.fight-btn'),
		rematchEl: document.querySelector('.rematch-btn'),
		userHpEl: document
			.querySelector('.player1')
			.querySelector('.health-bar')
			.querySelector('.inside'),
		cpuHpEl: document
			.querySelector('.player2')
			.querySelector('.health-bar')
			.querySelector('.inside')
	},
	init: function() {
		// this is the initial loop
		// gameState.elements.bannerEl.style.fontSize = '120px';
		console.log('rem ', gameState.elements.rematchEl);

		gameState.elements.userHpEl.style.width = '100%';
		gameState.elements.cpuHpEl.style.width = '100%';
		gameState.elements.rematchEl.classList.remove('active');
		gameState.elements.bannerEl.innerText = 'fight !';
		gameState.elements.userHpEl.style.background = '#70F8A8';
		gameState.elements.cpuHpEl.style.background = '#70F8A8';

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
				gameState.cpuPick();

				gameState.elements.p1NameEl.innerText = gameState.userPokemon;

				gameState.elements.p2NameEl.innerText = gameState.rivalPokemon;

				// change screen to battle scene
				gameState.elements.battleScreenEl.classList.toggle('active');

				// select data from current user pokemon
				gameState.currentPokemon = gameState.pokemonDB.filter(function(
					pokemon
				) {
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
				gameState.currentPokemon[0].health = gameState.calculateInitialHealth(
					gameState.currentPokemon
				);
				gameState.currentPokemon[0].originalHealth = gameState.calculateInitialHealth(
					gameState.currentPokemon
				);
				gameState.currentRivalPokemon[0].health = gameState.calculateInitialHealth(
					gameState.currentRivalPokemon
				);
				gameState.currentRivalPokemon[0].originalHealth = gameState.calculateInitialHealth(
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

				gameState.play(attackName, gameState.cpuAttack());
			};
			a++;
		}
		gameState.elements.rematchEl.onclick = function() {
			console.log('$$ it works');
			gameState.elements.battleScreenEl.classList.toggle('active');
			gameState.init();
		};
	},
	play: function(userAttack, cpuAttack) {
		console.log('cpuA', cpuAttack);
		var currentPokemon = gameState.currentPokemon[0];
		var currentRivalPokemon = gameState.currentRivalPokemon[0];
		currentPokemon.owner = 'user';
		currentRivalPokemon.owner = 'cpu';

		switch (userAttack) {
			case 'rock':
				if (cpuAttack == 'paper') {
					if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {
						// user
						gameState.attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);

						if (currentRivalPokemon.health > 0) {
							// cpu
							gameState.attackMove(
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
						gameState.attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							1.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							gameState.attackMove(
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
						gameState.attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							gameState.attackMove(
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
						gameState.attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							gameState.attackMove(
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
						gameState.attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							gameState.attackMove(
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
						gameState.attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							1.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							gameState.attackMove(
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
						gameState.attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							1.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							gameState.attackMove(
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
						gameState.attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							gameState.attackMove(
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
						gameState.attackMove(
							currentPokemon.attack,
							currentPokemon.level,
							0.8,
							currentRivalPokemon,
							currentPokemon
						);
						if (currentRivalPokemon.health > 0) {
							// cpu
							gameState.attackMove(
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
	},
	cpuAttack: function() {
		var attacks = ['rock', 'paper', 'scissors'];
		return attacks[this.randomNumber(0, 3)];
	},
	calculateInitialHealth: function(user) {
		return 0.2 * Math.sqrt(user[0].level) * user[0].defense * user[0].hp;
	},
	attackMove: function(attack, level, stack, enemy, attacker) {
		console.log(enemy.name, ' before: ', enemy.health);

		var attackAmount = attack * level * stack;
		enemy.health -= attackAmount;

		if (enemy.owner == 'user') {
			var minusPercent = (enemy.health * 100) / enemy.originalHealth;
			gameState.elements.userHpEl.style.width =
				(minusPercent < 0 ? 0 : minusPercent) + '%';
			if (minusPercent < 50 && minusPercent > 20) {
				gameState.elements.userHpEl.style.background = '#F6BF4E';
			} else if (minusPercent < 20) {
				gameState.elements.userHpEl.style.background = '#EB4931';
			}
		} else {
			var minusPercent = (enemy.health * 100) / enemy.originalHealth;
			gameState.elements.cpuHpEl.style.width =
				(minusPercent < 0 ? 0 : minusPercent) + '%';
			if (minusPercent < 50 && minusPercent > 20) {
				gameState.elements.cpuHpEl.style.background = '#F6BF4E';
			} else if (minusPercent < 20) {
				gameState.elements.cpuHpEl.style.background = '#EB4931';
			}
		}
		// console.log('atkAMt ', attackAmount);
		gameState.checkWinner(enemy, attacker);
		console.log(enemy.name, ' after: ', enemy.health);
	},
	checkWinner: function(enemy, attacker) {
		if (enemy.health <= 0) {
			console.log('HEY WINNERRRRR' + attacker.name);
			gameState.elements.bannerEl.innerText = attacker.name + ' wins!';
			gameState.elements.rematchEl.classList.add('active');
		}
	},
	randomNumber: function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	},
	cpuPick: function() {
		do {
			gameState.rivalPokemon =
				gameState.elements.pokemonsEl[
					gameState.randomNumber(0, 3)
				].dataset.pokemon;
			console.log('looping ', this.rivalPokemon);
		} while (gameState.userPokemon == gameState.rivalPokemon);
	}
};

gameState.init();
