function main(n, array) {
    let div2 = 0
    let div3 = 0
    let div4 = 0

    for (let i = 1; i <=n ; i++) {
    let num = array.shift()
    if (num % 2 === 0) div2++;
    if (num % 3 === 0) div3++;
    if (num % 4 === 0) div4++;

    }
    let percent2 = (div2 / n * 100).toFixed(2)
    let percent3 = (div3 / n * 100).toFixed(2)
    let percent4 = (div4 / n * 100).toFixed(2)
    console.log(`${percent2}%`)
    console.log(`${percent3}%`)
    console.log(`${percent4}%`)
}
main(3, [3, 6, 9])