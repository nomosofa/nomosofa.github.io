// a snake needs to have a body, consisting of a list of coordinates

const SNAKE_SPEED = 5;
const snakeBody = [
    { x: 11, y: 11 }, // head
    { x: 11, y: 10 }, // snakeBody.length - 2
    { x: 11, y: 9 }, // last element, tail
];

const updateSnake = () => {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        // assign the last into the second last
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    const snakeDirection = getInputDirection();
    snakeBody[0].x += snakeDirection.x;
    snakeBody[0].y += snakeDirection.y;
}

const drawSnake = (gameBoard) => {
    for (let i = 0; i < snakeBody.length; i++) {
        const segment = snakeBody[i];
        const snakeElemnt = document.createElement("div");
        snakeElemnt.style.gridRowStart = segment.y;
        snakeElemnt.style.gridColumnStart = segment.x;
        snakeElemnt.classList.add("snake-segment");
        gameBoard.appendChild(snakeElemnt);
    }
}

const onSnake = (foodPos) => {
    for (let i = 0; i < snakeBody.length; i++) {
        const segment = snakeBody[i];
        if (segment.y === foodPos.y && segment.x === foodPos.x) {
            return true;
        }
    }
    return false;
}

const increaseSnake = (amount) => {
    for (let i = 0; i < amount; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
}

const equalPositions = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

const snakeOutOfBounds = () => {
    return outOfBounds(snakeBody[0]);
}

const snakeIntersectSelf = () => {
    for (let i = 1; i < snakeBody.length; i++) {
        if (equalPositions(snakeBody[0], snakeBody[i])) {
            return true;
        }
    }
    return false;
}
// export { updateSnake, drawSnake };