/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/bg.png":
/*!************************!*\
  !*** ./src/img/bg.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "680086542b571fe4ed41acaa2fc5bba3.png");

/***/ }),

/***/ "./src/img/food.png":
/*!**************************!*\
  !*** ./src/img/food.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "02d5e15ac5aad0373ed4affea0ac33d3.png");

/***/ }),

/***/ "./src/img/help.jpg":
/*!**************************!*\
  !*** ./src/img/help.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "81a27f9a15e27ea07a6f791324bc1c01.jpg");

/***/ }),

/***/ "./src/img/juan.png":
/*!**************************!*\
  !*** ./src/img/juan.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7182a451dc5089d64cfe9d545e8732ce.png");

/***/ }),

/***/ "./src/img/mask.png":
/*!**************************!*\
  !*** ./src/img/mask.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79c465015694d6caaf142f4e8a7b91ad.png");

/***/ }),

/***/ "./src/img/menu.jpg":
/*!**************************!*\
  !*** ./src/img/menu.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "045857fbcdc447e7c09ced476a2232cd.jpg");

/***/ }),

/***/ "./src/img/score.jpg":
/*!***************************!*\
  !*** ./src/img/score.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d499924da2e259669a00ee3491dffb5e.jpg");

/***/ }),

/***/ "./src/img/virus_1.png":
/*!*****************************!*\
  !*** ./src/img/virus_1.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a329286f5cfe6334c158a4a54bd170bb.png");

/***/ }),

/***/ "./src/img/virus_2.png":
/*!*****************************!*\
  !*** ./src/img/virus_2.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "45347e28f3715514c8321c8756349bea.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bg.png */ "./src/img/bg.png");
/* harmony import */ var _img_juan_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/juan.png */ "./src/img/juan.png");
/* harmony import */ var _img_virus_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/virus_1.png */ "./src/img/virus_1.png");
/* harmony import */ var _img_virus_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/virus_2.png */ "./src/img/virus_2.png");
/* harmony import */ var _img_food_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/food.png */ "./src/img/food.png");
/* harmony import */ var _img_mask_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/mask.png */ "./src/img/mask.png");
/* harmony import */ var _img_menu_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/menu.jpg */ "./src/img/menu.jpg");
/* harmony import */ var _img_help_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/help.jpg */ "./src/img/help.jpg");
/* harmony import */ var _img_score_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/score.jpg */ "./src/img/score.jpg");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }











var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var powerUpAudio = new Audio("../audio/saiyan.mp3"); // GAME SETTINGS

var scrollOffset, score;
var gameState = "menu";
var genericObjects = [];
canvas.width = 1440;
canvas.height = 768;
c.font = "20px Georgia";

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 85,
      y: 0
    };
    this.speed = 5;
    this.image = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_juan_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
    this.protectionDuration = 0;
    this["protected"] = false;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      switch (this.stance) {
        case "idle":
          this.spritOffsetY = 755;
          this.height = 109;

          if (this.protectionDuration !== 0) {
            this.spritOffsetY = 251;
          }

          break;

        case "down":
          this.spritOffsetY = 861;
          this.height = 109;

          if (this.protectionDuration !== 0) {
            this.spritOffsetY = 503;
          }

          break;

        case "up":
          this.spritOffsetY = 968;
          this.height = 117;

          if (this.protectionDuration !== 0) {
            this.spritOffsetY = 0;
          }

          break;
      }

      if (this.protectionDuration !== 0) {
        this.width = 223;
        this.height = 252;
        this.spritOffsetX = 0;
      } else {
        this.spritOffsetX = 85;
        this.width = 65;
      }

      c.drawImage(this.image, this.spritOffsetX, this.spritOffsetY, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Player;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref) {
    var x = _ref.x,
        y = _ref.y,
        type = _ref.type,
        image = _ref.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.type = type;
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return GenericObject;
}();

var player = new Player();
var keys = {
  up: {
    pressed: false
  },
  down: {
    pressed: false
  }
};
var background = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_bg_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var enemies = [_utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_virus_1_png__WEBPACK_IMPORTED_MODULE_3__["default"]), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_virus_1_png__WEBPACK_IMPORTED_MODULE_3__["default"]), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_virus_2_png__WEBPACK_IMPORTED_MODULE_4__["default"]), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_virus_2_png__WEBPACK_IMPORTED_MODULE_4__["default"]), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_virus_1_png__WEBPACK_IMPORTED_MODULE_3__["default"]), _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_virus_2_png__WEBPACK_IMPORTED_MODULE_4__["default"])];
var objective = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_food_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var powerUp = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_mask_png__WEBPACK_IMPORTED_MODULE_6__["default"]); // CONTROLS

addEventListener("keydown", function (_ref2) {
  var key = _ref2.key;

  switch (key) {
    case "ArrowUp":
      keys.up.pressed = true;
      break;

    case "ArrowDown":
      keys.down.pressed = true;
      break;
  }
});
addEventListener("keyup", function (_ref3) {
  var key = _ref3.key;

  switch (key) {
    case "ArrowUp":
      keys.up.pressed = false;
      break;

    case "ArrowDown":
      keys.down.pressed = false;
      break;
  }
});
addEventListener("mousedown", function (e) {
  switch (gameState) {
    case "menu":
      if (e.clientX > 865 && e.clientX < 1020 && e.clientY > 470 && e.clientY < 500) {
        gameState = "init";
      } else if (e.clientX > 865 && e.clientX < 1020 && e.clientY > 514 && e.clientY < 542) {
        gameState = "tips";
      }

      break;

    case "tips":
      if (e.clientX > 997 && e.clientX < 1079 && e.clientY > 347 && e.clientY < 376) {
        gameState = "menu";
      }

      break;

    case "end":
      if (e.clientX > 905 && e.clientX < 987 && e.clientY > 503 && e.clientY < 531) {
        score = 0;
        gameState = "menu";
      }

  }
}); // GAME LOOP

function animate() {
  clearCanvas();
  requestAnimationFrame(animate);

  switch (gameState) {
    case "menu":
      showMenu();
      break;

    case "init":
      gameInit();
      break;

    case "start":
      gameStart();
      break;

    case "end":
      gameEnd();
      break;

    case "tips":
      gameTips();
      break;
  }
} // GAME MENU


function showMenu() {
  var menuImage = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_menu_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]);
  c.drawImage(menuImage, 0, 0);
} // CLEAR SCREEN


function clearCanvas() {
  // START: CLEAR CANVAS
  c.fillStyle = "#000";
  c.fillRect(0, 0, canvas.width, canvas.height); // END: CLEAR CANVAS
} // GAME INITIALIZATION


function gameInit() {
  scrollOffset = 2;
  score = 0; // START: OBJECT GENERATION

  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    type: "background",
    image: background
  }), new GenericObject({
    x: background.width,
    y: 0,
    type: "background",
    image: background
  })]; // END: OBJECT GENERATION
  // START: ENEMY GENERATION

  enemies.forEach(function (e) {
    genericObjects.push(new GenericObject(_objectSpread(_objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomPosition({
      height: e.height,
      width: e.width
    }, canvas.width, canvas.height, genericObjects.filter(function (_ref4) {
      var type = _ref4.type;
      return type !== "background";
    }))), {}, {
      type: "enemy",
      image: e
    })));
  }); // END: ENEMY GENERATION
  // START: POWER-UP GENERATION

  genericObjects.push(new GenericObject(_objectSpread(_objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomPosition({
    height: powerUp.height,
    width: powerUp.width
  }, canvas.width, canvas.height, genericObjects.filter(function (_ref5) {
    var type = _ref5.type;
    return type !== "background";
  }))), {}, {
    type: "powerUp",
    image: powerUp
  })), new GenericObject(_objectSpread(_objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomPosition({
    height: objective.height
  }, canvas.width, canvas.height, genericObjects.filter(function (_ref6) {
    var type = _ref6.type;
    return type !== "background";
  }))), {}, {
    type: "objective",
    image: objective
  }))); // END: POWER-UP GENERATION

  gameState = "start";
} // GAME START


function gameStart() {
  // START: OBJECT MOVEMENT
  genericObjects.forEach(function (object, index) {
    if (object.position.x + object.image.width - scrollOffset > 0) {
      object.position.x -= scrollOffset;
    } else {
      switch (object.type) {
        case "background":
          object.position.x = object.image.width;
          break;

        case "enemy":
        case "powerUp":
        case "objective":
          var otherObjects = genericObjects.filter(function (o, i) {
            return i !== index && o.type !== "background";
          });
          object.position = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomPosition(object, canvas.width, canvas.height, otherObjects);
          break;
      }
    } // END: OBJECT MOVEMENT
    // START: COLLISION CHECKER


    if (_utils__WEBPACK_IMPORTED_MODULE_0___default.a.checkCollision(player, genericObjects.filter(function (_ref7) {
      var type = _ref7.type;
      return type === "powerUp";
    }))) {
      player.spritOffsetX = 0;
      player.protectionDuration = 10000;

      if (player.protectionDuration > 0 && !player["protected"]) {
        player.position.x = player.position.x - 85;
        player.position.y = player.position.y - 127;
        player.transformDuration = 1000;
        powerUpAudio.play();
      }

      player["protected"] = true;
    } else {
      if (player.protectionDuration > 0) {
        player.protectionDuration = player.protectionDuration - 1;
      } else if (player.protectionDuration === 0 && player["protected"]) {
        player["protected"] = false;
        player.position.x = player.position.x + 85;
        player.position.y = player.position.y + 127;
      }
    }

    score = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.checkCollision(player, genericObjects.filter(function (_ref8) {
      var type = _ref8.type;
      return type === "objective";
    })) ? score + scrollOffset * 30 / 100 : score;

    if (player.protectionDuration === 0) {
      var isDead = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.checkCollision(player, genericObjects.filter(function (_ref9) {
        var type = _ref9.type;
        return type === "enemy";
      }));

      if (isDead) {
        gameState = "end";
      }
    } // END: COLLISION CHECKER


    genericObjects.forEach(function (object) {
      return object.update();
    });

    if (player.transformDuration > 0) {
      clearCanvas();
      player.transformDuration -= 1;
    }

    player.update();
    score = score + scrollOffset / 100;
    c.fillStyle = "red";
    c.fillText("Score: ".concat(Math.floor(score)), canvas.width - 200, 50);
  }); // END: BACKGROUND SCROLL
  // START: PLAYER MOVEMENT

  if (keys.up.pressed) {
    if (player.position.y - player.speed >= 0) {
      player.position.y -= player.speed;
      player.stance = "up";
    }
  } else if (keys.down.pressed) {
    if (player.position.y + player.height + player.speed <= canvas.height) {
      player.position.y += player.speed;
      player.stance = "down";
    }
  } else {
    player.stance = "idle";
  } // END: PLAYER MOVEMENT

} // GAME END


function gameEnd() {
  var scoreImage = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_score_jpg__WEBPACK_IMPORTED_MODULE_9__["default"]);
  c.drawImage(scoreImage, 0, 0);
  c.fillStyle = "white";
  c.fillText("".concat(Math.floor(score)), canvas.width / 2 - 25, canvas.height / 2);
} // GAME TIPS


function gameTips() {
  var helpImage = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.createImage(_img_help_jpg__WEBPACK_IMPORTED_MODULE_8__["default"]);
  c.drawImage(helpImage, 0, 0);
}

animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomPositionX(maxWidth) {
  return maxWidth + Math.floor(Math.random() * maxWidth);
}

function randomPositionY(objectHeight, maxHeight) {
  return Math.floor(Math.random() * (maxHeight - objectHeight));
}

function checkCollision(object1, objectsToCollideWith) {
  return objectsToCollideWith.some(function (objectToCollideWith) {
    return object1.position.x + object1.width >= objectToCollideWith.position.x && object1.position.x <= objectToCollideWith.position.x + objectToCollideWith.width && object1.position.y + object1.height >= objectToCollideWith.position.y && object1.position.y <= objectToCollideWith.position.y + objectToCollideWith.height;
  });
}

function randomPosition(object, maxWidth, maxHeight, objectsToCollideWith) {
  var position = {
    x: 0,
    y: 0
  };
  var tempObject = object;

  do {
    position = {
      x: randomPositionX(maxWidth),
      y: randomPositionY(object.height, maxHeight)
    };
    tempObject.position = position;
  } while (checkCollision(tempObject, objectsToCollideWith));

  return tempObject.position;
}

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

module.exports = {
  randomPosition: randomPosition,
  checkCollision: checkCollision,
  createImage: createImage
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map