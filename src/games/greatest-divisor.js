import { getRandomInt, cons } from '../math';
import { gameFlow } from '..';

const findDivisor = (num1, num2) => {
  let divisor = 1;
  const min = num1 < num2 ? num1 : num2;

  for (let i = 1; i <= min; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const description = 'Find the greatest common divisor of given numbers.';

const brainDiv = () => {
  const getDates = () => {
    const first = getRandomInt(0, 100);
    const second = getRandomInt(0, 100);
    const question = `${first} ${second}`;

    const correctAnswer = findDivisor(first, second).toString();

    return cons(question, correctAnswer);
  };

  gameFlow(description, getDates);
};

export default brainDiv;
