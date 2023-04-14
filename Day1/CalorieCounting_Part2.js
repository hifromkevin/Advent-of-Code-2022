const { readFile } = require('fs');

readFile('input.txt', (err, input) => {
  // RETURN THE SUM OF THE TOP THREE ELVES' CALORIES

  if (err) throw err;
  let elfData = input.toString();
  let elfStorage = 0;
  let topThreeStorageAmounts = [];

  elfData.split('\n').forEach(data => {
    if (data !== '') {
      elfStorage += Number(data);
    } else {
      if (topThreeStorageAmounts.length < 3) {
        topThreeStorageAmounts = [...topThreeStorageAmounts, elfStorage];

        if (topThreeStorageAmounts.length === 3) {
          topThreeStorageAmounts = simpleInsertSort(topThreeStorageAmounts);
        }
      } else {
        if (topThreeStorageAmounts[2] < elfStorage) {
          topThreeStorageAmounts = simpleInsertSort([...topThreeStorageAmounts.slice(0, 2), elfStorage]);
        };
      }

      elfStorage = 0;
    };
  });

  console.log(topThreeStorageAmounts.reduce((accumulator, currentValue) => accumulator + currentValue));
});

const simpleInsertSort = (arr) => {
  let passes = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && (arr[i] < arr[i + 1])) {
      const val = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = val;
      passes = true;
    }
  }

  return passes ? simpleInsertSort(arr) : arr;
}