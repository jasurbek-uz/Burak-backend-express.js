// G-TASK: 
// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// const array_1: number[] = [5, 21, 12, 21, 8];
// const getHighestIndex_1 = (numbers: number[]) => {
//   return numbers.indexOf(Math.max(...numbers));
// };
// const result_1 = getHighestIndex_1(array_1);


// H-TASK: 
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(num: number[]) {
    let p: string = '';
    for (let i: number = 0; i < num.length; i++) {
       if (num[i] > 0) {
          p += num[i];
       }
    }
    return console.log(p);
 }
 getPositive([1, -4, 2, 0, 3]);
 
