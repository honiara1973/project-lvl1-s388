import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attempts = 3;

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const gameFlow = (description, getData) => {
  welcome();
  console.log(`${description} \n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const gameData = getData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    const answer = readlineSync.question(`Question: ${question} \nYour answer: `);

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
