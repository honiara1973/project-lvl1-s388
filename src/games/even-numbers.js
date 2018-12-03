import { getRandomInt, cons } from '../math';
import { gameFlow } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const brainEven = () => {
  const getDates = () => {
    const question = getRandomInt(0, 10000);

    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };

  gameFlow(description, getDates);
};

export default brainEven;
