const { readFile } = require('fs');

readFile('input.txt', (err, input) => {
  if (err) throw err;

  const elfData = input.toString();
  let elfStorage = 0;
  let maxElfStorageAmount = -Infinity;

  elfData.split('\n').forEach(data => {
    if (data !== '') {
      elfStorage += Number(data);
    } else {
      maxElfStorageAmount = Math.max(maxElfStorageAmount, elfStorage);
      elfStorage = 0;
    };
  });

  console.log(maxElfStorageAmount);
});