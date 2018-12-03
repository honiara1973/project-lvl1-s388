export const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;

    case 'cdr':
      return b;

    default:
      return 0;
  }
};
