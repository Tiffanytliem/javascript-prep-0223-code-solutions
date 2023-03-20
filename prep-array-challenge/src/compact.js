/* exported compact */
function compact(array) {
  const compactArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== null && array[i] !== false && array[i] !== undefined && array[i] !== 0 && array[i] !== '' && !(Number.isNaN(array[i]))) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
