const { readFile } = require('fs');

const calculateScore = (a, b) => {
  const moves = ['A', 'B', 'C'];
  const player1Index = moves.indexOf(a);
  const player2Index = moves.indexOf(b);
  const points = player2Index + 1;

  if (a === b) {
    return points + 3;
  }

  if (player1Index === 2) {
    return player2Index === 0
      ? points + 6
      : points
  } else if (player2Index === 2) {
    return player1Index === 1
      ? points + 6
      : points
  }
  else {
    return (player1Index < player2Index)
      ? points + 6
      : points
  }
};

readFile('input.txt', (err, input) => {
  const rpsData = input.toString();
  let totalScore = 0;

  rpsData.split('\n').forEach(data => {
    let [player1, player2] = data.split(' ');
    totalScore += calculateScore(player1, (String.fromCharCode(player2.charCodeAt(0) - 23)));
  });

  console.log(totalScore);
});
