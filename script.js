// div*5#$ this creates five div

var shipData = [
  [null, null, null, 'X', 'X', 'X', null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, 'X', null, null, null, null, 'X'],
  [null, null, null, null, 'X', null, null, null, null, 'X'],
  [null, null, null, null, null, null, null, null, null, 'X'],
  [null, null, null, null, null, null, null, null, null, 'X'],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];

/*
Carrier - 5
Battleship -4
Submarine - 3
Patrol Boat - 2
*/

function createGameBoard() {
  var gameBoard = document.getElementById('gameBoard');
  for (var i = 0; i < 10; i++) {
    var tableRow = document.createElement('tr');
    tableRow.setAttribute('row', i);
    for (var j = 0; j < 10; j++) {
      var tableData = document.createElement('td');
      tableData.setAttribute('col', j);
      tableData.innerHTML = shipData[i][j];
      tableRow.appendChild(tableData);
    }
    gameBoard.appendChild(tableRow);
  }
}
window.onload = function() {
  createGameBoard();
};
