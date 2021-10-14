import { getNumber } from '../bin/index.js';

const getProgression = (numbersCount = 10) => {
  const [startNumber, step] = [getNumber(), getNumber()];
  const numbers = [startNumber];
  for (let i = 0; i < numbersCount - 1; i += 1) {
    numbers[i + 1] = numbers[i] + step;
  }
  return numbers;
};

const guessProgressionElem = () => {
  const progression = getProgression();
  const randomIndex = getNumber(0, progression.length);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  return [progression.join(' '), `${answer}`];
};

export default guessProgressionElem;
