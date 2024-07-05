
  // TASK-Q
// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.
 
const objectCar = {
  name: "BMW",
  model: "M3"
};
const check = "model";

function hasProperty(object:any, str:any) {
  return object.hasOwnProperty(str);
}
console.log(hasProperty(objectCar, check)); // true
console.log(hasProperty(objectCar, "year")); // false




  
  
  
  
  
  
  
  // P - task
// Shunday function yozing, u object qabul qilsin va arrayni object 
//    arrayga otkazib arrayni qaytarsin qaytarsin.
//    MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(object:any) {
// 	return Object.entries(object);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

// TASK O:
// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// function calculateSumOfNumbers(arr: any[]) {
// 	return arr.reduce((sum, ele) => {
// 		if (typeof ele === "number") {
// 			return sum + ele;
// 		}
// 		return sum;
// 	}, 0);
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

// N-TASK:
// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// const word:string ="dad";

// function checkPalindrome(word: string) {
// 	const reversed = word.split("").reverse().join("");
// 	return word === reversed;
// }

// const result = checkPalindrome(word);
// console.log("result:", result);

//  M-TASK:
// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// const getSquareNumbers = (arr: number[]) => {
// 	return arr.map((num) => ({ number: num, square: num * num }));
// };

// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);

// L-TASK:
// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
// function reverseSentence(str: string){
//   let words = str.split(' ');
//   let reversedWords = words.map(word => word.split('').reverse().join(''));
//   return reversedWords.join(' ');
// }

// console.log(reverseSentence("we like coding!"));
// function reverseString(parametr: string): string {
// 	return parametr.split("").reverse().join("");
// }

// console.log(reverseString("we like coding"));

// K - task
// Shunday function yozing, u string qabul qilsin va string
//     ichidagi unli harflar sonini qaytarsin.
//     MASALAN: countVowels("string") return 1;

// function countVowels(word: string) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (const letter of word) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }

//   return count; // Simply return the vowel count
// }

// const result = countVowels("string");
// console.log(result); // Output: 3 (number of vowels)

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
