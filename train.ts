// G-TASK: 
// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

@MITASK
const array_1: number[] = [5, 21, 12, 21, 8];
const getHighestIndex_1 = (numbers: number[]) => {
  return numbers.indexOf(Math.max(...numbers));
};
const result_1 = getHighestIndex_1(array_1);
