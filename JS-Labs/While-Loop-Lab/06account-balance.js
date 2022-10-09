function main(array) {
let num = array.shift()
let sum = 0
    while (num !== "End" && num !== undefined) {
        sum +=num
        if (num > 0) {
            console.log(`Increase: ${num.toFixed(2)}`)
        } else if (num < 0 ) {
            console.log (`Decrease: ${Math.abs(num).toFixed(2)}`)
        }
        num = array.shift()
    }
    console.log(`Balance: ${sum.toFixed(2)}`)
}
main([500, 15.50, -80.35, "End"])