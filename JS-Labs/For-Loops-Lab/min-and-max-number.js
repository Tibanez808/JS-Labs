// 2. Min and Max Number
// Write a function to find the biggest and the smallest number
// •Input:
// • Integer n: the count of numbers to be read
// • n floating-point numbers (as array)
// • Finds and prints the min and the max number
// Min number: 10
// Max number: 350


function main (n, numbers) {
let max = -Infinity;
let min = Infinity;
for (let i = 1; i <=n; i++) {
    let number = numbers.shift()
    if (number > max) {
        max = number;
    } if (number < min) {
        min = number
    }
}
console.log(`Min number: ${min}`);
console.log(`Max number: ${max}`);
}

main(3, [10, 350, 50])

// function main(n, numbers) {
//     // let numbers = [3, 40, 90, 50]
//         let max = -Infinity;
//         for(let i = 1; i <= n; i++) {
//             let number = numbers.shift();
//             if (number > max) {
//                 max = number;
//             }
//         }
//     }
    
    // main(3, [40, 90, 50])