//2.1: Looping a Triangle
for(let line = '#'; line.length < 8; line +='#' ){
    console.log(line);
}

//2.2: FizzBuzz
for(i=1; i < 101; i++){
    if(i%3 === 0 && i%5 === 0){
    console.log('FizzBuzz');
    }else if(i%3 === 0){
    console.log('Fizz');
    }else if(i%5 === 0){
    console.log('Buzz')
    }else{
    console.log(i);
    }
    }

//2.3 Chessboard
const size = 8;
let grid = '';

for(let y = 0; y <= size; y++){
  for (let x = 0; x <= size; x++){
    if((x+y)%2 === 0){
      grid += ' ';
    }else{ grid += '#';}
  }
  grid += '\n';
}

console.log(grid);

//3.1 Minimum
function min(x, y){
    return Math.min(x, y);
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10

//3.2 Recursion
// Your code here.
function isEven(x){
  if (x === 0){
    return true;
  }else if(x === 1){
    return false;
  }else if (x < 0) {
    return isEven(-x);
  }else{
    return isEven(x-2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Code 3.3: Bean Counting
function countBs(word){
	return countChar(word, 'B');
}

function countChar(word, letter){
  let count = 0;
  for (let i = 0; i < word.length; i++){
  	if(word.charAt(i) == letter) count += 1;
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

//Code 4.1: The sum of a range
function range(start, end, direction){
  const array = new Array();
  if (direction < 0) {
     for (let i = start; i >= end; i--){
    	array.push(i);
  	}
  }else {
  	for (let i = start; i <= end; i++){
    	array.push(i);
  	}
  }
  return array;
}

function sum(array){
  let sum = 0;
  for(let i=0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//Code 4.2: Reversing an Array
function reverseArray(array){
  let newArray = [];    
  for(let i = 0; i < array.length; i++){
    newArray.unshift(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array){
  for(let i = 0; i <= Math.floor(array.length/2); i++){
    let hold = array[array.length-1-i];
    array[array.length-1-i] = array[i];
    array[i] = hold;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]