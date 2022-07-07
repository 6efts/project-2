import utils from "./utils";
import bg from "../img/bg.png";
import playerSprite from "../img/juan.png";
import virus1 from "../img/virus_1.png";
import virus2 from "../img/virus_2.png";
import food from "../img/food.png";
import mask from "../img/mask.png";
import menu from "../img/menu.jpg";
import help from "../img/help.jpg";
import end from "../img/score.jpg";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
var powerUpAudio = new Audio("../audio/saiyan.mp3");


// GAME SETTINGS
let scrollOffset, score;
let gameState = "menu";
let genericObjects = [];
canvas.width = 1440;
canvas.height = 768;
c.font = "20px Georgia";

class Player {
  constructor() {
    this.position = {
      x: 85,
      y: 0,
    };
    this.speed = 5;
    this.image = utils.createImage(playerSprite);
    this.protectionDuration = 0;
    this.protected = false;
  }

  draw() {
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

    c.drawImage(
      this.image,
      this.spritOffsetX,
      this.spritOffsetY,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();
  }
}

class GenericObject {
  constructor({ x, y, type, image }) {
    this.position = { x, y };
    this.type = type;
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
  }
}

const player = new Player();
const keys = {
  up: { pressed: false },
  down: { pressed: false },
};
const background = utils.createImage(bg);
const enemies = [
  utils.createImage(virus1),
  utils.createImage(virus1),
  utils.createImage(virus2),
  utils.createImage(virus2),
  utils.createImage(virus1),
  utils.createImage(virus2),
];
const objective = utils.createImage(food);
const powerUp = utils.createImage(mask);

// CONTROLS
addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "ArrowUp":
      keys.up.pressed = true;
      break;
    case "ArrowDown":
      keys.down.pressed = true;
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "ArrowUp":
      keys.up.pressed = false;
      break;
    case "ArrowDown":
      keys.down.pressed = false;
      break;
  }
});

addEventListener("mousedown", (e) => {
  switch (gameState) {
    case "menu":
      if (
        e.clientX > 865 &&
        e.clientX < 1020 &&
        e.clientY > 470 &&
        e.clientY < 500
      ) {
        gameState = "init";
      } else if (
        e.clientX > 865 &&
        e.clientX < 1020 &&
        e.clientY > 514 &&
        e.clientY < 542
      ) {
        gameState = "tips";
      }
      break;
    case "tips":
      if (
        e.clientX > 997 &&
        e.clientX < 1079 &&
        e.clientY > 347 &&
        e.clientY < 376
      ) {
        gameState = "menu";
      }
      break;
    case "end":
      if (
        e.clientX > 905 &&
        e.clientX < 987 &&
        e.clientY > 503 &&
        e.clientY < 531
      ) {
        score = 0;
        gameState = "menu";
      }
  }
});

// GAME LOOP
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
}

// GAME MENU
function showMenu() {
  const menuImage = utils.createImage(menu);
  c.drawImage(menuImage, 0, 0);
}

// CLEAR SCREEN
function clearCanvas() {
  // START: CLEAR CANVAS
  c.fillStyle = "#000";
  c.fillRect(0, 0, canvas.width, canvas.height);
  // END: CLEAR CANVAS
}

// GAME INITIALIZATION
function gameInit() {
  scrollOffset = 2;
  score = 0;
  // START: OBJECT GENERATION
  genericObjects = [
    new GenericObject({ x: 0, y: 0, type: "background", image: background }),
    new GenericObject({
      x: background.width,
      y: 0,
      type: "background",
      image: background,
    }),
  ];
  // END: OBJECT GENERATION
  // START: ENEMY GENERATION
  enemies.forEach((e) => {
    genericObjects.push(
      new GenericObject({
        ...utils.randomPosition(
          { height: e.height, width: e.width },
          canvas.width,
          canvas.height,
          genericObjects.filter(({ type }) => type !== "background")
        ),
        type: "enemy",
        image: e,
      })
    );
  });
  // END: ENEMY GENERATION
  // START: POWER-UP GENERATION
  genericObjects.push(
    new GenericObject({
      ...utils.randomPosition(
        { height: powerUp.height, width: powerUp.width },
        canvas.width,
        canvas.height,
        genericObjects.filter(({ type }) => type !== "background")
      ),
      type: "powerUp",
      image: powerUp,
    }),
    new GenericObject({
      ...utils.randomPosition(
        { height: objective.height },
        canvas.width,
        canvas.height,
        genericObjects.filter(({ type }) => type !== "background")
      ),
      type: "objective",
      image: objective,
    })
  );
  // END: POWER-UP GENERATION
  gameState = "start";
}

// GAME START
function gameStart() {
  // START: OBJECT MOVEMENT
  genericObjects.forEach((object, index) => {
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
          const otherObjects = genericObjects.filter(
            (o, i) => i !== index && o.type !== "background"
          );
          object.position = utils.randomPosition(
            object,
            canvas.width,
            canvas.height,
            otherObjects
          );
          break;
      }
    }
    // END: OBJECT MOVEMENT

    // START: COLLISION CHECKER
    if (
      utils.checkCollision(
        player,
        genericObjects.filter(({ type }) => type === "powerUp")
      )
    ) {
      player.spritOffsetX = 0;
      player.protectionDuration = 10000;
      if (player.protectionDuration > 0 && !player.protected) {
        player.position.x = player.position.x - 85;
        player.position.y = player.position.y - 127;
        player.transformDuration = 1000;
        powerUpAudio.play();
      }
      player.protected = true;
    } else {
      if (player.protectionDuration > 0) {
        player.protectionDuration = player.protectionDuration - 1;
      } else if (player.protectionDuration === 0 && player.protected) {
        player.protected = false;
        player.position.x = player.position.x + 85;
        player.position.y = player.position.y + 127;
      }
    }

    score = utils.checkCollision(
      player,
      genericObjects.filter(({ type }) => type === "objective")
    )
      ? score + (scrollOffset * 30) / 100
      : score;

    if (player.protectionDuration === 0) {
      const isDead = utils.checkCollision(
        player,
        genericObjects.filter(({ type }) => type === "enemy")
      );
      if (isDead) {
        gameState = "end";
      }
    }
    // END: COLLISION CHECKER

    genericObjects.forEach((object) => object.update());
    if (player.transformDuration > 0) {
      clearCanvas();
      player.transformDuration -= 1;
    }
    player.update();

    score = score + scrollOffset / 100;
    c.fillStyle = "red";
    c.fillText(`Score: ${Math.floor(score)}`, canvas.width - 200, 50);
  });
  // END: BACKGROUND SCROLL

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
  }
  // END: PLAYER MOVEMENT
}

// GAME END
function gameEnd() {
  const scoreImage = utils.createImage(end);
  c.drawImage(scoreImage, 0, 0);
  c.fillStyle = "white";
  c.fillText(`${Math.floor(score)}`, canvas.width / 2 - 25, canvas.height / 2);
}

// GAME TIPS
function gameTips() {
  const helpImage = utils.createImage(help);
  c.drawImage(helpImage, 0, 0);
}

animate();
