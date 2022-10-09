function main(num1, num2, num3) {
let x = num1 * num2 * num3
if (x == 0) {
    console.log("Zero")
} else if (x > 0) {
    console.log ("Positive")
} else if (x < 0) {
    console.log ("Negative")
}
}
main(2, 3, -1)
main(-2, 3, -1)
main(-2, -3, -1)
