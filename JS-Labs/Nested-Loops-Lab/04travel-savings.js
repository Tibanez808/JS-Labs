function main(input) {
// get the first destination
    let dest = input.shift()
while (dest !== "End") {
    let moneyNeeded = Number(input.shift());
    let sum = 0;
    // loop until i collect the money needed
    while (sum <= moneyNeeded) {
        sum += Number(input.shift());
        console.log(`Collected: ${sum}`)
    }
    console.log(`Going to ${dest}!`)
    dest = input.shift()
}
}
main( ["Bali", 3500, 800, 1800, 1000, "Brazil", 4600, 5000, "End"])