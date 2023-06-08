'use strict';

// Task #1 =============================

// DOM Elements

const display = document.querySelector('.display');

function posting(value) {
  let cssClass = `${value}`.toLowerCase();
  return display.insertAdjacentHTML('beforeend',`<p class="${cssClass}"> ${value} </p>`);
};


//# Iterator

let range = {
  from: 1,
  to: 100
}

range[Symbol.iterator] = function() {

  let current = this.from;
  let last = this.to;

  return {
    next() {
      if (current <= last) {
        let result = {
          done: false,
          value: ''
        }

        if (current % 15 === 0) {
          result.value = 'FizzBuzz';

        } else if (current % 3 === 0) {
          result.value = 'Fizz';

        }else if (current % 5 === 0) {
          result.value = 'Buzz';

        } else {
          result.value = current;

        }

        current++;

        return result;
      } else {
        return {
          done: true
        }
      }
    }
  }
};

for (let value of range) {
  posting(value);
}



//#Generator

// function* generator(start, end) {

//   for (let i = start; i <= end; i++) {
//     if (i % 15 === 0) {
//       yield 'FizzBuzz';

//     }else if (i % 3 === 0) {
//       yield 'Fizz';

//     }else if (i % 5 === 0) {
//       yield 'Buzz';
  

//     } else {
//       yield i;
//     }
    
//   }

// }

// let numbersFromGenerator = generator(1, 100);

// for (let number of numbersFromGenerator) {
//   posting(number)
// }




// Task #2

// function* generateRandomNumbers(max, quantity) {

//   for (let i = 1; i <= quantity; i++) {
//     let random = 1 + Math.random() * (max + 1 - 1);
//     let randomNumber = Math.floor(random);
//     yield randomNumber;
//   }
// }

// let randomNumbers = [... generateRandomNumbers(10, 20)]
// console.log(randomNumbers)


// тут виклик та ітерування в циклі