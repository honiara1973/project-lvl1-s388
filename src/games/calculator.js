import { getRandomInt, cons } from '../math';
import { gameFlow } from '..';

const operators = ['+', '-', '*'];
const multiply = (num1, num2) => num1 * num2;
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;

const chooseFunction = (str, num1, num2) => {
  let result = 0;
  switch (str) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    default:
      return result;
  }

  return result;
};

const description = 'What is the result of the expression?';

const brainCalc = () => {
  const getDates = () => {
    const first = getRandomInt(0, 100);
    const second = getRandomInt(0, 100);
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const question = `${first} ${operator} ${second}`;

    const correctAnswer = chooseFunction(operator, first, second).toString();
    return cons(question, correctAnswer);
  };

  gameFlow(description, getDates);
};

export default brainCalc;
