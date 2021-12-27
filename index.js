let gridSize;

do {
    gridSize= prompt("enter grid size");
} while (gridSize < 1 || gridSize > 100)

document.querySelector(".grid").style.setProperty('grid-template-columns', 'repeat(' + gridSize + ', 1fr)');
document.querySelector(".grid").style.setProperty('grid-template-rows', 'repeat(' + gridSize + ', 1fr)');

for (i = 0; i <gridSize*gridSize; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    document.querySelector(".grid").appendChild(cell);
}

document.querySelectorAll(".cell").forEach( cell => {
    cell.addEventListener("mouseover", function(c) {
        c.target.style.backgroundColor = "black";
    })
})

document.querySelector(".clear-btn").addEventListener("click", function() {
    document.querySelectorAll(".cell").forEach( cell => {
        cell.style.backgroundColor = "grey"
    })
})