function main(num) {
    let numCopy = num;
    let isSpecial = true;

    while(num != 0) {
        let lastDigit = num % 10;
        if (lastDigit !== 0 && numCopy % lastDigit !== 0) {
            isSpecial = false;
            break;
        }
        num = Math.floor(num / 10);
    }
    if (isSpecial) {
        console.log(`${numCopy} is special`)
    } else {

        console.log(`${numCopy} is not special`)
    }
}
main(204)