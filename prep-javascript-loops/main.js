// create your loops here.
function whileLoop1() {
  const array = [];
  let n = 0;
  while (n < 10) {
    array.push(n);
    n++;
  }
  return array;
}

console.log(whileLoop1());

function whileLoop2() {
  const array = [];
  let n = 0;
  while (n < 20) {
    array.push(n);
    n += 2;
  }
  return array;
}
console.log(whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log(forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log(`Time till explosion ${i}!`);
  }
}
forLoop2();

function forInLoop1(object) {
  const array = [];
  for (const property in object) {
    array.push(property);
  }
  return array;
}
console.log(forInLoop1({
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
}));

function forInLoop2(object) {
  const array = [];
  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}
console.log(forInLoop2({
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
}));
