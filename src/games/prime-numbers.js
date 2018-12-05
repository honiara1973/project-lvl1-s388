import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../utils';
import { gameFlow } from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getData = () => {
  const question = getRandomInt(-10, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const brainPrime = () => {
  gameFlow(description, getData);
};

export default brainPrime;
