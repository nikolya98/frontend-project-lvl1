#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const name = greetUser();

const getRandomInt = (min = 1, max = 100) => Math.floor((Math.random() * (max - min)) + min);

const getNumbersForPrediction = (len = 3) => {
  const numbers = [];
  for (let i = 0; i < len; i += 1) {
    numbers[i] = getRandomInt();
  }
  return numbers;
};

const isEven = (num) => {
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return answer;
};

const guessEven = (attempts = 3) => {
  const numbers = getNumbersForPrediction();
  let currentAttempt = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  do {
    const currentNumber = numbers[currentAttempt];
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = isEven(currentNumber);
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return null;
    }
    console.log('Correct!');
    currentAttempt += 1;
  } while (currentAttempt < attempts);
  console.log(`Congratulations, ${name}!`);
  return null;
};

guessEven();

export default guessEven;
