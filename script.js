let startOver = document.querySelector(".reset");
let board = document.querySelector(".board");
let tile = document.querySelectorAll(".tile")
for (let i = 0; i < tile.length; i++) {
    tile[i].addEventListener("click", selectTile)
    
    function selectTile() {
        console.log("clicked")
        if ()
        
    }
}
let tiles = document.querySelectorAll(".tile");
let playerTurn = "red";
let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function evaluateBoard() {

}
function isBoardFull() {

}
function selectTile() {
    console.log("clicked")
    tile

}
function resetGame() {
    
}