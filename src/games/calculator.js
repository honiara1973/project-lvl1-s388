import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../utils';
import { gameFlow } from '..';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const chooseFunction = (str, num1, num2) => {
  let result = 0;
  switch (str) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return result;
  }

  return result;
};

const getData = () => {
  const first = getRandomInt(0, 100);
  const second = getRandomInt(0, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${first} ${operator} ${second}`;

  const correctAnswer = chooseFunction(operator, first, second).toString();
  return cons(question, correctAnswer);
};

const brainCalc = () => {
  gameFlow(description, getData);
};

export default brainCalc;
