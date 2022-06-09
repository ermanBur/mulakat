var items = [5, 3, 7, 6, 2, 9];
function swap(items, left, right) {
  var temp = items[left];
  items[left] = items[right];
  items[right] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //Ortance
    i = left, //En sol
    j = right; //En sağ
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //İki elementi değiştir
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var i;
  if (items.length > 1) {
    i = partition(items, left, right); //Parçalamadan dönen index
    if (left < i - 1) {
      //Sol tarafta fazla eleman varsa
      quickSort(items, left, i - 1);
    }
    if (i < right) {
      //Sağ tarafta fazla eleman varsa
      quickSort(items, i, right);
    }
  }
  return items;
}
// Quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
