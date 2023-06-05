'use strict';

// Task #1 =============================

// DOM Elements

const display = document.querySelector('.display');

function calculating(numbers) {
  let result = [];
  for (let num of numbers) {
    if (num % 3 === 0 && num % 15 !== 0) {
        result.push(`<p class="fizz"> Fizz </p>`)
      } else if (num % 5 === 0 && num % 15 !== 0) {
        result.push(`<p class="buzz"> Buzz </p>`);
    } else if (num % 15 === 0) {
      result.push(`<p class="fizzbuzz"> FizzBuzz </p>`);
    } else {
      result.push(`<p> ${num} </p>`)
    }
  }
  display.insertAdjacentHTML('beforeend',`${result}`);

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
        return {
          done: false,
          value: current++
        };
      } else {
        return {
          done: true
        };
      }
    }
  }
};


calculating(range);

// #Generator

// function* generator(start, end) {

//   for (let i = start; i <= end; i++) {
//     yield i;
//   }

// }

// let numbersFromGenerator = [...generator(1, 100)];

// calculating(numbersFromGenerator);

// Task #2

function* generateRandomNumbers(max, quantity) {

  for (let i = 1; i <= quantity; i++) {
    let random = 1 + Math.random() * (max + 1 - 1);
    let randomNumber = Math.floor(random);
    yield randomNumber;
  }
}

let randomNumbers = [... generateRandomNumbers(10, 20)]
console.log(randomNumbers)


// тут виклик та ітерування в циклі