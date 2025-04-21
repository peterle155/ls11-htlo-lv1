
//  1. f(x) = Ax + B
// 3 tham so dau vao: A, B, x
// 1 dau ra x

// function phuongTrinhBacNhat(A, B, x){
//     let fx;
//     fx = (A * x) + B
//     return fx;
// }

// const result = phuongTrinhBacNhat(3,4,5)
// console.log(result)


// Bai 6
// const tongStartEnd = (start, end) => {
//     let startEnd = 0;
//     for (let i = start; i <= end; i++) {
//         startEnd += i;
//     }
//     return startEnd;
// };

// result = tongStartEnd(5,10)
// console.log(result)



// Bài 8 
// function areAllEven(numbers) {
//   return numbers.every(num => num % 2 === 0);
// } 
// console.log(areAllEven([2, 4, 6, 8, 10, -2]))


// Bai 11 sort

// [12, 33, 45, 7, 89]

// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {

//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }

// const result = sort([12, 33, 45, 7, 89])
// console.log(result)


// const tachTu = (str) => {
//     let words = [];
//     let word = '';
//     for(let char of str){
//         if (char === ' '){
//             if (word) {
//                 words.push(word);
//                 word = '';
//             }
//         } else {
//             word += char;
//         }
//     }
//     if (word) {
//         words.push(word);
//     }
//     return words;
// }


// const result = tachTu("This is a test")
// console.log(result)

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// n :10 -> x 20 so -> 9999999999999999
// 3334
// n:3 -> x 6so -> 345534
// odd numbers khong doi xung <-

const checkDoiXung = (num) => {
    const str = num.toString();
    if (str.length % 2 === 0) {
        // sum(i -> str.length/2) ===  sum(str.length/2 +1 -> str.length)
        for(let i = 0; i < str.length; i++) {
            if (str[i] === str[str.length - 1 - i]) {
                console.log(str)
                return true;
            } return false;
        }
    } else return false;
}
// result = checkDoiXung(1, 100)
// console.log(result)
var countSymmetricIntegers = function (low, high) {
    let count = 0
    for (let i = low; i < high; i++) {
        if(checkDoiXung(i)){
            count++;
            continue
        }
    }
    return count;
};
const result  = countSymmetricIntegers(1000, 1200)
console.log(result)