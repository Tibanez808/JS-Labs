function main(num) {
let sum = 0
    while (num !== 0) {
        digit = num % 10
        sum += Math.abs(digit)
        num = num / 10
        num = Math.trunc(num)
        num = Math.abs(num)
    }
    console.log(sum)
}
main(-532)