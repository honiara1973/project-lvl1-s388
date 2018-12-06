import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../utils';
import gameFlow from '..';

const description = 'Balance the given number.';

const getSumOfElements = (str) => {
  let sumOfElements = 0;

  for (let i = 0; i < str.length; i += 1) {
    sumOfElements += parseInt(str[i], 10);
  }

  return sumOfElements;
};

const getBalanced = (num) => {
  const str = num.toString();
  const sumOfElements = getSumOfElements(str);
  let strBalanced = '';
  let acc = 0;
  let restOfString = str;

  for (let i = 1; i <= str.length; i += 1) {
    const balancedElement = Math.floor((sumOfElements - acc) / restOfString.length);

    acc += balancedElement;

    restOfString = str.substr(i);
    strBalanced += balancedElement.toString();
  }

  return strBalanced;
};

const getData = () => {
  const question = getRandomInt(0, 10000);
  const correctAnswer = getBalanced(question);
  return cons(question, correctAnswer);
};

export default () => {
  gameFlow(description, getData);
};
