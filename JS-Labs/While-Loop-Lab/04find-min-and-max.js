function main(array) {
let num = array.shift()
let max = -Infinity
let min = Infinity
    while (num !== "End" && num !== undefined) {
        if (num > max) {
            max = num
        }
        if (num < min) {
            min = num
        }
        num = array.shift()
    }
    console.log(`Min number: ${min}`)
    console.log(`Max number: ${max}`)
}
// main([10, 20, 304, 0, 50, "END"])
main([10,20,304,50,'END'])