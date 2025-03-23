const body = document.querySelector("body");
let container = document.querySelector("#container");
let gridNumber = 16;

function createCanvas(){
    for (let i = 0; i < gridNumber ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        container.appendChild(square);
    } 
}

createCanvas();

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function colorSquares(){
    const hoverOver = document.querySelectorAll(".square");
    hoverOver.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.setAttribute("style", `background-color: rgb(${randomRgbColor().toString()})`);
        })
    });
}
colorSquares();

/////////////////////////////////////////
const buttonInputGrid = document.querySelector("#gridInput");

buttonInputGrid.addEventListener("click", () => {
const gridInput = prompt("Resize grid to: ");
gridNumber = gridInput;
let gridSize = Number((gridInput * 20) + (gridInput * 4));
    if(gridInput <= 100){
        container.remove();
        container = document.createElement("div");
        container.setAttribute("style",
             `height: ${gridSize}px;
              width: ${gridSize}px;
              display: flex;
              flex-wrap: wrap;
              border: 2px solid bisque;`);
        body.appendChild(container);
        createCanvas();
        colorSquares();
    }
});




