const array_1: number[] = [5, 21, 12, 21, 8];

const getHighestIndex_1 = (numbers: number[]) => {
  return numbers.indexOf(Math.max(...numbers));
};

const result_1 = getHighestIndex_1(array_1);
console.log("(method one) The first max value's index is:", result_1);