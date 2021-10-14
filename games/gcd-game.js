import { getNumber } from '../bin/index.js';

const getGcd = () => {
  const numbers = [getNumber(), getNumber()];
  let [a, b] = [Math.max(...numbers), Math.min(...numbers)];
  let remainder = null;
  do {
    remainder = Math.trunc(a % b);
    a = b;
    b = remainder;
  } while (remainder !== 0);
  return [numbers.join(' '), `${a}`];
};

export default getGcd;
