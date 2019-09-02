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
        eval("// State\nvar gameState = {\n  userPokemon: '',\n  rivalPokemon: '',\n  pokemonDB: [{\n    name: 'charmander',\n    type: 'fire',\n    hp: 39,\n    attack: 52,\n    defense: 43,\n    level: 1,\n    img: '/img/charmander.gif'\n  }, {\n    name: 'bulbasaur',\n    type: 'grass',\n    hp: 45,\n    attack: 49,\n    defense: 49,\n    level: 1,\n    img: '/img/bulbasaur.gif'\n  }, {\n    name: 'squirtle',\n    type: 'water',\n    hp: 44,\n    attack: 48,\n    defense: 65,\n    level: 1,\n    img: '/img/squirtle.gif'\n  }],\n  elements: {\n    // elements\n    pokemonsEl: document.querySelector('.select-screen').querySelectorAll('.character'),\n    battleScreenEl: document.querySelector('#battle-screen'),\n    attackBtnsEl: document.querySelectorAll('.attack')\n  },\n  init: function init() {\n    // this is the initial loop\n    var i = 0;\n\n    while (i < gameState.elements.pokemonsEl.length) {\n      // add function to all characters on screen select\n      gameState.elements.pokemonsEl[i].onclick = function () {\n        // current selected pokemons name\n        var pokemonName = this.dataset.pokemon; // elements for images on battle screen\n\n        var player1Img = document.querySelector('.player1').getElementsByTagName('img');\n        var player2Img = document.querySelector('.player2').getElementsByTagName('img'); // we save the current pokemon\n\n        gameState.userPokemon = pokemonName; // cpu picks a pokemon\n\n        gameState.cpuPick(); // change screen to battle scene\n\n        gameState.elements.battleScreenEl.classList.toggle('active'); // select data from current user pokemon\n\n        gameState.currentPokemon = gameState.pokemonDB.filter(function (pokemon) {\n          return pokemon.name == gameState.userPokemon;\n        });\n        player1Img[0].src = gameState.currentPokemon[0].img; // select data from current cpu pokemon\n\n        gameState.currentRivalPokemon = gameState.pokemonDB.filter(function (pokemon) {\n          return pokemon.name == gameState.rivalPokemon;\n        });\n        player2Img[0].src = gameState.currentRivalPokemon[0].img; // current user and cpu pokemon initial health\n\n        gameState.currentPokemon[0].health = gameState.calculateInitialHealth(gameState.currentPokemon);\n        gameState.currentPokemon[0].originalHealth = gameState.calculateInitialHealth(gameState.currentPokemon);\n        gameState.currentRivalPokemon[0].health = gameState.calculateInitialHealth(gameState.currentRivalPokemon);\n        gameState.currentRivalPokemon[0].originalHealth = gameState.calculateInitialHealth(gameState.currentRivalPokemon);\n        console.log('h', gameState);\n      };\n\n      i++;\n    }\n\n    var a = 0;\n\n    while (a < gameState.elements.attackBtnsEl.length) {\n      gameState.elements.attackBtnsEl[a].onclick = function () {\n        var attackName = this.dataset.attack;\n        gameState.currentUserAttack = attackName;\n        gameState.play(attackName, gameState.cpuAttack());\n      };\n\n      a++;\n    }\n  },\n  play: function play(userAttack, cpuAttack) {\n    console.log('cpuA', cpuAttack);\n    var currentPokemon = gameState.currentPokemon[0];\n    var currentRivalPokemon = gameState.currentRivalPokemon[0];\n    currentPokemon.owner = 'user';\n    currentRivalPokemon.owner = 'cpu';\n\n    switch (userAttack) {\n      case 'rock':\n        if (cpuAttack == 'paper') {\n          if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {\n            // user\n            gameState.attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon, currentPokemon);\n\n            if (currentRivalPokemon.health > 0) {\n              // cpu\n              gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 1.8, currentPokemon, currentRivalPokemon);\n            }\n          }\n        }\n\n        if (cpuAttack == 'scissors') {\n          if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {\n            // user\n            gameState.attackMove(currentPokemon.attack, currentPokemon.level, 1.8, currentRivalPokemon, currentPokemon);\n\n            if (currentRivalPokemon.health > 0) {\n              // cpu\n              gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon, currentRivalPokemon);\n            }\n          }\n        }\n\n        if (cpuAttack == 'rock') {\n          if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {\n            // user\n            gameState.attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon, currentPokemon);\n\n            if (currentRivalPokemon.health > 0) {\n              // cpu\n              gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon, currentRivalPokemon);\n            }\n          }\n        }\n\n        break;\n\n      case 'paper':\n        if (cpuAttack == 'paper') {\n          if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {\n            // user\n            gameState.attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon, currentPokemon);\n\n            if (currentRivalPokemon.health > 0) {\n              // cpu\n              gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon, currentRivalPokemon);\n            }\n          }\n        }\n\n        if (cpuAttack == 'scissors') {\n          if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {\n            // user\n            gameState.attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon, currentPokemon);\n\n            if (currentRivalPokemon.health > 0) {\n              // cpu\n              gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 1.8, currentPokemon, currentRivalPokemon);\n            }\n          }\n        }\n\n        if (cpuAttack == 'rock') {\n          if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {\n            // user\n            gameState.attackMove(currentPokemon.attack, currentPokemon.level, 1.8, currentRivalPokemon, currentPokemon);\n\n            if (currentRivalPokemon.health > 0) {\n              // cpu\n              gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon, currentRivalPokemon);\n            }\n          }\n        }\n\n        break;\n\n      case 'scissors':\n        if (cpuAttack == 'paper') {\n          if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {\n            // user\n            gameState.attackMove(currentPokemon.attack, currentPokemon.level, 1.8, currentRivalPokemon, currentPokemon);\n\n            if (currentRivalPokemon.health > 0) {\n              // cpu\n              gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon, currentRivalPokemon);\n            }\n          }\n        }\n\n        if (cpuAttack == 'scissors') {\n          if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {\n            // user\n            gameState.attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon, currentPokemon);\n\n            if (currentRivalPokemon.health > 0) {\n              // cpu\n              gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 0.8, currentPokemon, currentRivalPokemon);\n            }\n          }\n        }\n\n        if (cpuAttack == 'rock') {\n          if (currentPokemon.health > 0 && currentRivalPokemon.health > 0) {\n            // user\n            gameState.attackMove(currentPokemon.attack, currentPokemon.level, 0.8, currentRivalPokemon, currentPokemon);\n\n            if (currentRivalPokemon.health > 0) {\n              // cpu\n              gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, 1.8, currentPokemon, currentRivalPokemon);\n            }\n          }\n        }\n\n        break;\n    }\n  },\n  cpuAttack: function cpuAttack() {\n    var attacks = ['rock', 'paper', 'scissors'];\n    return attacks[this.randomNumber(0, 3)];\n  },\n  calculateInitialHealth: function calculateInitialHealth(user) {\n    return 0.2 * Math.sqrt(user[0].level) * user[0].defense * user[0].hp;\n  },\n  attackMove: function attackMove(attack, level, stack, enemy, attacker) {\n    console.log(enemy.name, ' before: ', enemy.health);\n    var attackAmount = attack * level * stack;\n    enemy.health -= attackAmount;\n    var userHP = document.querySelector('.player1').querySelector('.health-bar').querySelector('.inside');\n    var cpuHP = document.querySelector('.player2').querySelector('.health-bar').querySelector('.inside');\n\n    if (enemy.owner == 'user') {\n      var minusPercent = enemy.health * 100 / enemy.originalHealth;\n      userHP.style.width = (minusPercent < 0 ? 0 : minusPercent) + '%';\n    } else {\n      var minusPercent = enemy.health * 100 / enemy.originalHealth;\n      cpuHP.style.width = (minusPercent < 0 ? 0 : minusPercent) + '%';\n    } // console.log('atkAMt ', attackAmount);\n\n\n    gameState.checkWinner(enemy, attacker);\n    console.log(enemy.name, ' after: ', enemy.health);\n  },\n  checkWinner: function checkWinner(enemy, attacker) {\n    if (enemy.health <= 0) {\n      console.log('HEY WINNERRRRR' + attacker.name);\n    }\n  },\n  randomNumber: function randomNumber(min, max) {\n    return Math.floor(Math.random() * (max - min)) + min;\n  },\n  cpuPick: function cpuPick() {\n    gameState.rivalPokemon = gameState.elements.pokemonsEl[gameState.randomNumber(0, 3)].dataset.pokemon;\n  }\n};\ngameState.init();\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});