// a snake needs to have a body, consisting of a list of coordinates
const boardWidth = 21;
const boardHeight = 21;

let foodPos = { x: 15, y: 10 };
const EXPANSION_RATE = 1;

const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    };
}

const getRandomFoodPosition = () => {
    let newFoodPos = randomGridPosition();
    while (onSnake(newFoodPos)) {
        newFoodPos = randomGridPosition();
    }
    return newFoodPos;
}

const updateFood = () => {
    if (onSnake(foodPos)) {
        // update snake length
        increaseSnake(EXPANSION_RATE);

        // move food position
        foodPos = getRandomFoodPosition();
        console.log(foodPos);
    }
}

const drawFood = (gameBoard) => {
    const food = document.createElement("div");
    food.style.gridRowStart = foodPos.y;
    food.style.gridColumnStart = foodPos.x;
    food.classList.add("food");
    gameBoard.appendChild(food);
}
