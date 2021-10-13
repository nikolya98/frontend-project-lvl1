import { getNumber } from '../bin/index.js';

const isEven = (num) => {
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return answer;
};

const guessEven = () => {
  const numberForQuestion = getNumber();
  const rightAnswer = isEven(numberForQuestion);
  return [numberForQuestion, rightAnswer];
};

export default guessEven;
