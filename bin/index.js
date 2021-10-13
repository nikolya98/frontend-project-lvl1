import readlineSync from 'readline-sync';

const getNumber = (min = 1, max = 100) => Math.floor((Math.random() * (max - min)) + min);

const gameFlow = (userName, game, roundsCount = 3) => {
  let attemptsCount = 0;
  do {
    const [question, answer] = [...game()];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
    attemptsCount += 1;
  } while (attemptsCount < roundsCount);
  console.log(`Congratulations, ${userName}`);
  return null;
};

export { getNumber };
export default gameFlow;
