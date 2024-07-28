
// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan
// sonlar orasidan random raqam return qilsin MASALAN: randomBetween(30, 50)
// return 45

const randomBetween = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomBetween(30, 50));









// Z-TASK:

//   Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. 
//   Function arraydagi juft sonlarni yigindisini qaytarsin
//   MASALAN: sumEvens([1,2,3]) return 2 

// function sumEvens(arr:any) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			sum += arr[i];
// 		}
// 	}
// 	return sum;
// }

// console.log(sumEvens([2, 4, 6, 7, 8, 9, 45]));


// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. 
//Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]


// const findIntersection = (arr1:any, arr2:any) => {
//   return arr1.filter((num: any) => arr2.includes(num));
// };

// console.log(findIntersection([1, 2, 3, 0], [3, 2, 0]));

// X-TASK:

//  Shunday function yozing, uni object va string parapetrlari bolsin.
// Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin(nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

  // const countOccurrences = (obj:any, str:any) => {
	// 	let count = 0;
	// 	const traverse = (currentObj:any) => {
	// 		for (const key in currentObj) {
	// 			if (key === str) count++;
	// 			if (typeof currentObj[key] === "object" && currentObj[key] !== null) {
	// 				traverse(currentObj[key]);
	// 			}
	// 		}
	// 	};
	// 	traverse(obj);
	// 	return count;
	// };

// console.log(countOccurrences({model: "Bugatti",steer: { model: "HANKOOK", size: 30, type: { model: "34" } },},"model"));
  
  // W - TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray(arr:any, chunkSize:any) {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     chunks.push(arr.slice(i, i + chunkSize));
//   }
//   return chunks;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); 

// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}


// function countChars(str: string): Record<string, number> {
//   const charCounts: Record<string, number> = {}; 
//   for (const char of str) {
//     charCounts[char] = (charCounts[char] || 0) + 1; 
//   }
//   return charCounts;
// }

// console.log(countChars("hello")); 

// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// const sumOdda = (num: number): number => {
// 	let sum = 0;
// 	for (let i = 1; i <= num; i += 2) {
// 		sum += i;
// 	}
// 	return sum;
// };

// console.log(sumOdda(5));

// T - TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [0,3,4,3]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1:any, arr2:any) {
// 	const merged = [];
// 	let i = 0;
// 	let j = 0;

// 	while (i < arr1.length && j < arr2.length) {
// 		merged.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
// 	}
// 	return merged.concat(arr1.slice(i), arr2.slice(j));
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// S - TASK:
// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function findMissingNumbers(arr:number[]) {
// 	const missingNumbers = [1, 3, 4, 5, 7, 10];
// 	let expected = arr[0];

// 	for (let i = 0; i < arr.length; i++) {

// 		while (arr[i] > expected) {
// 			missingNumbers.push(expected);
// 			expected++;
// 		}
// 		expected = arr[i] + 1;
// 	}

// 	return missingNumbers.length ? missingNumbers : "1, 3, 4, 5, 7, 10";
// }

// const arr = [1, 3, 4, 5, 7, 10];
// const missingNumbers = findMissingNumbers(arr);
// console.log(missingNumbers);

//R-task
// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// const calculate = (str: string): number => {
//   const fn = new Function('return ' + str);
//   return fn();
// };

// console.log(calculate('1+3')); // Output: 3

// TASK-Q
// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// const objectCar = {
//   name: "BMW",
//   model: "M3"
// };
// const check = "model";

// function hasProperty(object:any, str:any) {
//   return object.hasOwnProperty(str);
// }
// console.log(hasProperty(objectCar, check)); // true
// console.log(hasProperty(objectCar, "year")); // false

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
