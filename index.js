// initial grid values
var gridHeight = 16;
var gridWidth = 16;
var grid = document.querySelector(".grid");

// generate initial grid
createGrid();

// function for grid generating
function createGrid() {

  for (var i = 0; i < gridHeight * gridWidth; i++) {

    var gridElement = document.createElement("div");
    gridElement.style.opacity = 1;
    grid.appendChild(gridElement);
    gridElement.addEventListener("mousemove", function() {
      if (this.style.opacity > 0) {
        this.style.opacity -= 0.20;
      }
    })
  }

  grid.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
}

// function for clearing grid and generating a new one
function clearGrid() {

  grid.textContent = "";

  gridHeight = parseInt(prompt("Please set grid height (in number of squares)"));
  gridWidth = parseInt(prompt("Please set grid width (in number of squares)"));

  if (gridHeight > 0 && gridHeight <= 50 && gridWidth > 0 && gridWidth <= 50) {
    createGrid();
  } else {
    alert("Please only use numbers between 1 and 50");
    clearGrid();
  }
}
