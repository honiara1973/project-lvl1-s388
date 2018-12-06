import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../utils';
import gameFlow from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findDivisor = (num1, num2) => {
  let divisor = 1;
  const min = Math.min(num1, num2);

  for (let i = 1; i <= min; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const getData = () => {
  const first = getRandomInt(0, 100);
  const second = getRandomInt(0, 100);
  const question = `${first} ${second}`;

  const correctAnswer = findDivisor(first, second).toString();

  return cons(question, correctAnswer);
};

export default () => {
  gameFlow(description, getData);
};
