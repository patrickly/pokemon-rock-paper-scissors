(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("// This is the database\nvar pokemonDB = [{\n  name: 'charmander',\n  type: 'fire',\n  hp: 39,\n  attack: 52,\n  defense: 43,\n  level: 1,\n  img: '/img/charmander.gif'\n}, {\n  name: 'bulbasaur',\n  type: 'grass',\n  hp: 45,\n  attack: 49,\n  defense: 49,\n  level: 1,\n  img: '/img/bulbasaur.gif'\n}, {\n  name: 'squirtle',\n  type: 'water',\n  hp: 44,\n  attack: 48,\n  defense: 65,\n  level: 1,\n  img: '/img/squirtle.gif'\n}]; // State\n\nvar gameState = {\n  userPokemon: '',\n  rivalPokemon: ''\n};\nconsole.log(gameState); // elements\n\nvar pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character');\nconsole.log(pokemonsEl);\nvar battleScreenEl = document.querySelector('#battle-screen');\nvar attackBtnsEl = document.querySelectorAll('.attack');\nconsole.log(attackBtnsEl); // this is the initial loop\n\nvar i = 0;\n\nwhile (i < pokemonsEl.length) {\n  // add function to all characters on screen select\n  pokemonsEl[i].onclick = function () {\n    // current selected pokemons name\n    var pokemonName = this.dataset.pokemon; // elements for images on battle screen\n\n    var player1Img = document.querySelector('.player1').getElementsByTagName('img');\n    var player2Img = document.querySelector('.player2').getElementsByTagName('img'); // we save the current pokemon\n\n    gameState.userPokemon = pokemonName; // cpu picks a pokemon\n\n    cpuPick(); // change screen to battle scene\n\n    battleScreenEl.classList.toggle('active'); // select data from current user pokemon\n\n    gameState.currentPokemon = pokemonDB.filter(function (pokemon) {\n      return pokemon.name == gameState.userPokemon;\n    });\n    player1Img[0].src = gameState.currentPokemon[0].img; // select data from current cpu pokemon\n\n    gameState.currentRivalPokemon = pokemonDB.filter(function (pokemon) {\n      return pokemon.name == gameState.rivalPokemon;\n    });\n    player2Img[0].src = gameState.currentRivalPokemon[0].img; // current user and cpu pokemon initial health\n\n    gameState.currentPokemon[0].health = calculateInitialHealth(gameState.currentPokemon);\n    gameState.currentRivalPokemon[0].health = calculateInitialHealth(gameState.currentRivalPokemon);\n    console.log('h', gameState); // user chooses attack\n    // cpu health goes down\n    // cpu attacks\n    // user health goes down\n    // rock > scissors\n    // paper > rock\n    // scissors > paper\n    // depending on pokemon type and defense is how hard\n    // the attack is going to be and how much health it will take out\n    // then who ever gets to health <= 0 loses\n  };\n\n  i++;\n}\n\nvar a = 0;\n\nwhile (a < attackBtnsEl.length) {\n  attackBtnsEl[a].onclick = function () {\n    var attackName = this.dataset.attack;\n    gameState.currentUserAttack = attackName;\n    play(attackName, cpuAttack());\n  };\n\n  a++;\n}\n\nvar cpuAttack = function cpuAttack() {\n  var attacks = ['rock', 'paper', 'scissors'];\n  return attacks[randomNumber(0, 3)];\n};\n\nvar calculateInitialHealth = function calculateInitialHealth(user) {\n  return 0.2 * Math.sqrt(user[0].level) * user[0].defense * user[0].hp;\n};\n\nvar attackMove = function attackMove(attack, level, stack, enemy) {\n  console.log(enemy.name, ' before: ', enemy.health);\n  var attackAmount = attack * level * stack;\n  enemy.health -= attackAmount; // console.log('atkAMt ', attackAmount);\n\n  checkWinner(enemy);\n  console.log(enemy.name, ' after: ', enemy.health);\n};\n\nvar checkWinner = function checkWinner(enemy) {\n  if (enemy.health <= 0) {\n    console.log('HEY WINNERRRRR');\n  }\n};\n\nvar play = function play(userAttack, cpuAttack) {\n  console.log('cpuA', cpuAttack);\n  var currentPokemon = gameState.currentPokemon[0];\n  var currentRivalPokemon = gameState.currentRivalPokemon[0];\n\n  switch (userAttack) {\n    case 'rock':\n      if (cpuAttack == 'paper') {\n        // user\n        attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon);\n\n        if (currentRivalPokemon.health > 0) {\n          // cpu\n          attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 1.8, currentPokemon);\n        }\n      }\n\n      if (cpuAttack == 'scissors') {\n        // user\n        attackMove(currentPokemon.attack, currentPokemon.level, 1.8, currentRivalPokemon); // cpu\n\n        attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon);\n      }\n\n      if (cpuAttack == 'rock') {\n        // user\n        attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon); // cpu\n\n        attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon);\n      }\n\n      break;\n\n    case 'paper':\n      if (cpuAttack == 'paper') {\n        // user\n        attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon); // cpu\n\n        attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon);\n      }\n\n      if (cpuAttack == 'scissors') {\n        // user\n        attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon); // cpu\n\n        attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 1.8, currentPokemon);\n      }\n\n      if (cpuAttack == 'rock') {\n        // user\n        attackMove(currentPokemon.attack, currentPokemon.level, 1.8, currentRivalPokemon); // cpu\n\n        attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon);\n      }\n\n      break;\n\n    case 'scissors':\n      if (cpuAttack == 'paper') {\n        // user\n        attackMove(currentPokemon.attack, currentPokemon.level, 1.8, currentRivalPokemon); // cpu\n\n        attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon);\n      }\n\n      if (cpuAttack == 'scissors') {\n        // user\n        attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon); // cpu\n\n        attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon);\n      }\n\n      if (cpuAttack == 'rock') {\n        // user\n        attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon); // cpu\n\n        attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 1.8, currentPokemon);\n      }\n\n      break;\n  }\n};\n\nvar randomNumber = function randomNumber(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n};\n\nvar cpuPick = function cpuPick() {\n  gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon;\n}; // // pokemon\n// // create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)\n// var pokemons = [\n// \t{\n// \t\tname: 'charmander',\n// \t\ttype: 'fire',\n// \t\tattack: 52,\n// \t\tdefense: 39,\n// \t\tlevel: 1\n// \t},\n// \t{\n// \t\tname: 'charmander',\n// \t\ttype: 'fire',\n// \t\tattack: 52,\n// \t\tdefense: 39,\n// \t\tlevel: 1\n// \t}\n// ];\n// var attack = 20;\n// var level = 10;\n// var stack = 1.3;\n// var defense = 39;\n// // create a formula for attacks\n// console.log((attack * level * stack) / 7);\n// // create a formula for health\n// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)\n// console.log(0.2 * Math.sqrt(level) * defense * 15);\n// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon\n// // p1 vs p2\n// // when one user loses all his health declare a winner\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});