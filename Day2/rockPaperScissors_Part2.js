const { readFile } = require('fs');

const calculateScore = (player1, finalResult) => {
  const plays = ['A', 'B', 'C'];
  const player1Index = plays.indexOf(player1);

  if (finalResult === 'Y') {
    return 3 + (player1Index + 1);
  } else if (finalResult === 'Z') {
    if (player1 === 'C') {
      return 6 + (player1Index - 1)
    } else {
      return 6 + (player1Index + 2)
    }
  } else {
    if (player1 === 'A') {
      return player1Index + 3
    } else {
      return player1Index
    }
  }
}

readFile('input.txt', (err, input) => {
  if (err) console.error(err);

  const rpsData = input.toString();
  let totalScore = 0;

  rpsData.split('\n').forEach(data => {
    let [player1, finalResult] = data.split(' ');
    totalScore += calculateScore(player1, finalResult);
  });

  console.log(totalScore);
});