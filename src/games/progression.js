import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../utils';
import gameFlow from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getData = () => {
  const first = getRandomInt(0, 100);
  const step = getRandomInt(0, 100);
  const progression = [];
  let progressionElement = first;

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionElement = first + step * i;
    progression.push(progressionElement);
  }

  const hiddenElementPosition = getRandomInt(0, progression.length - 1);
  const elementToGuess = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';

  const question = `${progression.join(' ')}`;
  const correctAnswer = elementToGuess.toString();

  return cons(question, correctAnswer);
};

export default () => {
  gameFlow(description, getData);
};
