import readlineSync from 'readline-sync';

import brainEven from './even-numbers';
import brainCalc from './calculator';
import brainDiv from './greatest-divisor';
import brainProgression from './progression';
import brainPrime from './prime-numbers';
import brainBalance from './balanced-numbers';


const chooseGame = (str) => {
  switch (str) {
    case 'brain-even':
      brainEven();
      break;
    case 'brain-calc':
      brainCalc();
      break;
    case 'brain-gcd':
      brainDiv();
      break;
    case 'brain-progression':
      brainProgression();
      break;
    case 'brain-prime':
      brainPrime();
      break;
    case 'brain-balance':
      brainBalance();
      break;
    default:
      break;
  }
};

export default () => {
  const games = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime', 'brain-balance'];

  const index = readlineSync.keyInSelect(games, 'Which game?');

  chooseGame(`${games[index]}`);
};
