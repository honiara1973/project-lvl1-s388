import readlineSync from 'readline-sync';

const attempts = 3;

const car = pair => pair('car');
const cdr = pair => pair('cdr');

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const gameFlow = (rules, func) => {
  welcome();
  console.log(`${rules} \n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const result = func();
    const question = car(result);
    const correctAnswer = cdr(result);
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
