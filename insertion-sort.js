const numbers = [523, 832, 107, 914, 365, 678, 299, 745, 501, 231];

for (let i = 1; i < numbers.length; i++) {
  let key = numbers[i];
  let j = i - 1;

  while (j >= 0 && numbers[j] > key) {
    numbers[j + 1] = numbers[j];
    j = j - 1;
  }
  numbers[j + 1] = key;
}

console.log(numbers);
