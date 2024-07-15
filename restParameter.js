// function addNumbers(n1, n2) {
//   console.log(n1 + n2);
// }
// addNumbers(10, 20);

//DISPLAY AS ARRAY

// function addNumber(...numbers) {
//   console.log(numbers);
// }

// addNumber(10, 20, 30);

//ADD NUMBERS

function addNumbers(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  console.log(total);
}

addNumbers(10, 30, 70);
