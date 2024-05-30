// Khan academy exercise from Algorithm course
var getPosition = function (array, xOffset, y, charWidth, elementSpacing) {
  var positions = [];
  var x = xOffset;

  for (var i = 0; i < array.length; i++) {
    positions.push({ x: x, y: y });
    x += array[i].toString().length * charWidth + elementSpacing;
  }
  return positions;
};

var displayArray = function (array, y) {
  var xOffset = 50;
  var charWidth = 12;
  var elementSpacing = 2;

  textFont(createFont("monospace"), 12);
  text(array, xOffset, y);
  return getPosition(array, xOffset, y, charWidth, elementSpacing);
};

var selectionSort = function (array) {
  fill(0, 0, 0);
  var y = 50;
  var positions = displayArray(array, y);

  for (var i = 0; i < array.length - 1; i++) {
    var minInd = i;
    y = y + 40;

    for (var j = i + 1; j < array.length; j++) {
      if (array[minInd] > array[j]) {
        minInd = j;
      }
    }

    line(positions[minInd].x, positions[minInd].y, positions[i].x, y - 10);

    var temp = array[i];
    array[i] = array[minInd];
    array[minInd] = temp;

    positions = displayArray(array, y);
  }
};

var array = [2, 5, 1, 9, 4, -3, 2, 5];
selectionSort(array);
