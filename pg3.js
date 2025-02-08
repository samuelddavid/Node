//add element in array and check the number is integer or not.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [1, 2, 3, 4, 5];
console.log('Initial Array: ', array);

rl.question('Enter a number to add to the array: ', (newElement) => {
  const num = parseInt(newElement);

  if (!isNaN(num)) {
    array.push(num);
    console.log('Updated Array: ', array);

    rl.question('Enter an index to retrieve the value from the array: ', (input) => {
      const index = parseInt(input);

      if (!isNaN(index) && index >= 0 && index < array.length) {
        console.log(`Value at index ${index}: ${array[index]}`);
      } else {
        console.log('Invalid index.');
      }

      rl.close();
    });
  } else {
    console.log('Invalid number entered.');
    rl.close();
  }
});
