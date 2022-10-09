function main(n) {

    for (let d1 = 1; d1 <= 9; d1++) {

        for (let d2 = 1; d2 <= 9; d2++) {

            for (let d3 = 1; d3 <= 9; d3++) {
                if (d1 * d2 * d3 ===n) {
                    console.log(`${d1} ${d2} ${d3}`)

                }
            }
        }
    }
}
main(3)