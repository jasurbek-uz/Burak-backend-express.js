
//K-task
// Shunday function yozing, u string qabul qilsin va string 
//     ichidagi unli harflar sonini qaytarsin.
//     MASALAN: countVowels("string") return 1; 

function countVowels(word: string) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const letter of word) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count; // Simply return the vowel count
}

const result = countVowels("string");
console.log(result); // Output: 3 (number of vowels)














// J-TASK:
// Shunday function yozing, u string qabul qilsin va
// string ichidagi eng uzun sozni qaytarsin. MASALAN:
// findLongestWord("I come from Uzbekistan")
// return "Uzbekistan"

// function findLongestWord(str: string) {
// 	const longestWord = str.split(" ").reduce((longest, current) => {
// 		return current.length > longest.length ? current : longest;
// 	}, "");
// 	console.log(longestWord);
// }

// findLongestWord("I come from Uzbekistan");

//TASK I:
// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// const allNumber = (numbers: number[]) => {
//     let count = 0;
//     let candidate = numbers[0];

//     for (const num of numbers) {
//       if (count === 0) {
//         candidate = num;
//       }
//       count += (num === candidate) ? 1 : -1;
//     }
//     // Check  majority after the loop
//     count = 0;
//     for (const num of numbers) {
//       if (num === candidate) {
//         count++;
//       }
//     }
//     if (count > numbers.length / 5) {
//       return candidate;
//     } else {
//       return null;
//     }
//   };

//   const result_2 = allNumber([1, 2, 3, 4, 5, 3, 3]);
//   console.log("result:", result_2); // Output: result: 3

// H2-TASK:
// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"
//  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// function getDigits(str: string){
//     const arr  = str.split ("");
//     return arr.filter(value => digits.includes(value) == true ).join('');

// }

// console.log(getDigits("megamen129as432as8945"));

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

// function getPositive(num: number[]) {
//     let p: string = '';
//     for (let i: number = 0; i < num.length; i++) {
//        if (num[i] > 0) {
//           p += num[i];
//        }
//     }
//     return console.log(p);
//  }
//  getPositive([1, -4, 2, 0, 3]);
