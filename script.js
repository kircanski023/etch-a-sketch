const container = document.querySelector("#container");
let i = 0;
for (let i = 0; i < 16 ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    container.appendChild(square);
    console.log(i);
} 

const hoverOver = document.querySelectorAll(".square");

hoverOver.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.add("color-change");
    })
});





