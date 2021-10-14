import { getNumber } from '../bin/index.js';

const isSimple = (number) => {
  let delimeter = 1;
  for (let i = 1; i <= Math.floor(number) / 2; i += 1) {
    delimeter = number % i === 0 ? i : delimeter;
  }
  const answer = delimeter === 1 ? 'yes' : 'no';
  return answer;
};

const guessSimpleNumber = () => {
  const number = getNumber();
  const answer = isSimple(number);
  return [`${number}`, `${answer}`];
};

export default guessSimpleNumber;
