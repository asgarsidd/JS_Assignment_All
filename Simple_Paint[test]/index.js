const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const deleteBtn = document.getElementById('del');
const undoBtn = document.getElementById('undo');
const drawingHistory = [];

let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);

deleteBtn.addEventListener('click', deleteDrawing);
undoBtn.addEventListener('click', undo);

function startDrawing(event) {
  isDrawing = true;
  const currentPosition = getCursorPosition(event);
  context.beginPath();
  context.moveTo(currentPosition.x, currentPosition.y);
  drawingHistory.push(context.getImageData(0, 0, canvas.width, canvas.height));
}

function draw(event) {
  if (!isDrawing) return;
  const currentPosition = getCursorPosition(event);
  context.lineTo(currentPosition.x, currentPosition.y);
  context.stroke();
}

function endDrawing() {
  isDrawing = false;
  context.closePath();
}

function deleteDrawing() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawingHistory.length = 0;
}

function undo() {
  if (drawingHistory.length > 1) {
    drawingHistory.pop();
    context.putImageData(drawingHistory[drawingHistory.length - 1], 0, 0);
  } else {
    deleteDrawing();
  }
}

function getCursorPosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
