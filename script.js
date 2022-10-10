const grid = document.getElementById("grid");
const rangeInput = document.getElementById("range-input");

const penColorInput = document.getElementById("pen-color");
const backgroundColorInput = document.getElementById("background-color");
const rainbowBtn = document.getElementById("rainbow");
const colorBtn = document.getElementById("color");
const eraserBtn = document.getElementById("eraser");
const toggleBtn = document.getElementById("toggle-grid");
const clearBtn = document.getElementById("clear");


let gridNumber;
let currentMode;

grid.style.backgroundColor = backgroundColorInput.value


grid.addEventListener("mouseover", updateColor);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


backgroundColorInput.addEventListener("change", () => {
    grid.style.backgroundColor = backgroundColorInput.value
})

rainbowBtn.addEventListener("click", () => {
    currentMode = "rainbow"
    rainbowBtn.classList.add("active")
    eraserBtn.classList.remove("active")
    colorBtn.classList.remove("active")
});
eraserBtn.addEventListener("click", () => {
    currentMode = "eraser"
    eraserBtn.classList.add("active")
    rainbowBtn.classList.remove("active")
    colorBtn.classList.remove("active")
});
colorBtn.addEventListener("click", () => {
    currentMode = "color"
    colorBtn.classList.add("active")
    eraserBtn.classList.remove("active")
    rainbowBtn.classList.remove("active")
})


function colorMode(){
    if (currentMode === "rainbow"){
        const R = Math.floor(Math.random()* 256);
        const G = Math.floor(Math.random()* 256);
        const B = Math.floor(Math.random()* 256);
        return `rgb(${R}, ${G}, ${B})`;
    } else if(currentMode === "eraser"){
        return "transparent";
    } else{
        return penColorInput.value;
    }

}

function updateColor(e){
    if(e.type === "mouseover" && !mouseDown) return;
    else{
        e.target.style.backgroundColor = colorMode();
    }
}


function updateGrid (gridNumber){
    grid.innerHTML = ""
    grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    for(let i = 0; i < gridNumber ** 2; i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        grid.appendChild(gridElement);
    }
}

rangeInput.addEventListener("change", ()=>{
    gridNumber = rangeInput.value
    updateGrid(gridNumber)
})

window.addEventListener("load", () => {
    currentMode = "color"
    updateGrid(16)
})