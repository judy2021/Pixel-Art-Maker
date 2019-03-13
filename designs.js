// Select color input
let color = document.getElementById("colorPicker");
// Select size input
let height= document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
// Select the canves
let designCanvas = document.getElementById("pixelCanvas");
// Select the form
let gridSize = document.getElementById("sizePicker");
// added EventListner
gridSize.addEventListener("submit", makeGrid);

// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
  e.preventDefault();
  designCanvas.innerHTML = "";
  for(let row = 1; row <= height.value; row++ ) {
    const tableRow = document.createElement("TR");
    tableRow.setAttribute("id",row);
    designCanvas.appendChild(tableRow);
    for(let col = 1; col <= width.value; col ++){
      const tableCol = document.createElement("TD");
      tableCol.addEventListener("mousedown", fillSquare);
      document.getElementById(row).appendChild(tableCol);
    }
  }
}

// Color the pixel when the user clicks on it
function fillSquare () {
  this.setAttribute("style", `background-color: ${color.value}`);
}
