function randomPositionX(maxWidth) {
  return maxWidth + Math.floor(Math.random() * maxWidth);
}

function randomPositionY(objectHeight, maxHeight) {
  return Math.floor(Math.random() * (maxHeight - objectHeight));
}

function checkCollision(object1, objectsToCollideWith) {
  return objectsToCollideWith.some((objectToCollideWith) => {
    return (
      object1.position.x + object1.width >= objectToCollideWith.position.x &&
      object1.position.x <=
        objectToCollideWith.position.x + objectToCollideWith.width &&
      object1.position.y + object1.height >= objectToCollideWith.position.y &&
      object1.position.y <=
        objectToCollideWith.position.y + objectToCollideWith.height
    );
  });
}

function randomPosition(object, maxWidth, maxHeight, objectsToCollideWith) {
  let position = { x: 0, y: 0 };
  const tempObject = object;
  do {
    position = {
      x: randomPositionX(maxWidth),
      y: randomPositionY(object.height, maxHeight),
    };
    tempObject.position = position;
  } while (checkCollision(tempObject, objectsToCollideWith));
  return tempObject.position;
}

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

module.exports = {
  randomPosition,
  checkCollision,
  createImage,
};
