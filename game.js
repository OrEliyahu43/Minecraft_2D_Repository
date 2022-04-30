import { currentTool } from "./logic.js";

const gameBoard = document.querySelector('#game-board')
const myArray = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 9, 9, 9],
    [9, 9, 9, 3, 3, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 9, 9, 9],
    [9, 9, 3, 3, 3, 3, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 9, 9, 3],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const elementsObject = {
    0: "ground",
    1: "grass",
    2: "leaves",
    3: "stone",
    4: "tree",
    9: "sky",
};

const inventory = {
    "ground": 0,
    "grass": 0,
    "leaves": 0,
    "stone": 0,
    "tree": 0
}

const rules = {
    shovel: ["ground", "grass"],
    axe: ["leaves", "tree"],
    pickaxe: ["stone"],
};
function createBoard(gameBoard) {
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < myArray[i].length; j++) {
            createElement(gameBoard, myArray[i][j], i + 1, j + 1)
        }
    }


    console.log("work")
}
function createElement(gameBoard, codeValue, row, colum) {
    const gameElement = document.createElement('div');
    gameElement.style.gridRowStart = row;
    gameElement.style.gridColumnStart = colum;
    gameElement.setAttribute('class', elementsObject[codeValue]);
    gameBoard.appendChild(gameElement);
    gameElement.addEventListener('mouseover', hover);
    gameElement.addEventListener('mouseout', unHover);
    gameElement.addEventListener('click', gameCheck)

}
createBoard(gameBoard);


function hover(event) {
    event.target.classList.add("overElemnt");
}

function unHover(event) {
    event.target.classList.remove("overElemnt")
}

function gameCheck(event) {
    let currentClass = event.target.classList[0];
    if (currentTool.id === 'axe' && rules['axe'].includes(currentClass)) {
        event.target.setAttribute("class", "sky");
    }
}

function updateInventory(elemntString){
    inventory[elemntString] += 1;
}