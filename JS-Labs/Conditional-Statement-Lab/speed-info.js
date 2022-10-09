function main(speed) {
    if (speed <= 30) {
        console.log("Slow")
    } else {
        if (speed > 30) {
            console.log("Fast")
        }
    }
}

main(30)
main(60)