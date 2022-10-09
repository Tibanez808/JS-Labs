function main(input) {
    if (input == "student") {
        console.log("$1.60")
    } else {
        if (input == "regular") {
            console.log("$1.00")
        } else {
            console.log("Invalid ticket type!")
        }
    }

}

main("student")
main("regular")