import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../utils';
import gameFlow from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getData = () => {
  const question = getRandomInt(0, 10000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  gameFlow(description, getData);
};
