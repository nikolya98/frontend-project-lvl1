import { getNumber } from '../bin/index.js';

const operators = ['+', '-', '*'];

const calculateNumbers = () => {
  const operand1 = getNumber();
  const operand2 = getNumber();
  const operator = operators[getNumber(0, 2)];
  let result = null;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }
  return [`${operand1} ${operator} ${operand2}`, `${result}`];
};

export default calculateNumbers;
