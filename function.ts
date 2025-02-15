// calculate average : input :Array amd return average

const calculateAvg = (arr: number[]): number => {
  let length: number = arr.length;
  let sum: number = 0;
  for (let i = 0; i < length; i++) {
    sum = sum + arr[i];
  }
  return sum / length;
};
console.log(calculateAvg([1, 2, 5, 6]));

//findMaxValue : input : Array of number and return max value from array
const findMaxValue = (arr: number[]): number => {
  const maxValue = Math.max(...arr);
  return maxValue;
};

console.log(findMaxValue([1, 2, 5, 6]));
