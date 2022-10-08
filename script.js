const grid = document.getElementById("grid");
const rangeInput = document.getElementById("range-input");

let gridNumber;

grid.addEventListener("mouseover", updateColor);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function updateColor(e){
    if(e.type === "mouseover" && !mouseDown) return;
    else{
            e.target.style.backgroundColor = "black"
    }
    // if(e.type === "mousedown" && )

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
    updateGrid(16)
})