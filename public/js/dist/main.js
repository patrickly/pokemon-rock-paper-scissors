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
        eval("var gameState = {\n  userPokemon: '',\n  rivalPokemon: ''\n};\nconsole.log(gameState);\nvar pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character');\nconsole.log(pokemonsEl);\nvar battleScreenEl = document.querySelector('#battle-screen');\nconsole.log('bsl', battleScreenEl);\nvar i = 0;\n\nwhile (i < pokemonsEl.length) {\n  pokemonsEl[i].onclick = function () {\n    var pokemonName = this.dataset.pokemon;\n    gameState.userPokemon = pokemonName;\n    cpuPick();\n    battleScreenEl.classList.toggle('active');\n    console.log(gameState);\n  };\n\n  i++;\n}\n\nfunction randomNumber(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n}\n\nfunction cpuPick() {\n  gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon;\n} // // pokemon\n// // create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)\n// var pokemons = [\n// \t{\n// \t\tname: 'charmander',\n// \t\ttype: 'fire',\n// \t\tattack: 52,\n// \t\tstamina: 39,\n// \t\tlevel: 1\n// \t},\n// \t{\n// \t\tname: 'charmander',\n// \t\ttype: 'fire',\n// \t\tattack: 52,\n// \t\tstamina: 39,\n// \t\tlevel: 1\n// \t}\n// ];\n// var attack = 20;\n// var level = 10;\n// var stack = 1.3;\n// var stamina = 39;\n// // create a formula for attacks\n// console.log((attack * level * stack) / 7);\n// // create a formula for health\n// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)\n// console.log(0.2 * Math.sqrt(level) * stamina * 15);\n// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon\n// // p1 vs p2\n// // when one user loses all his health declare a winner\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});