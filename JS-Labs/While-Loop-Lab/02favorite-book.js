function main (fave, books) {
    let book = books.shift()
    while (book !== fave) {

        console.log(`Invalid book: ${book}`)
        book = books.shift()

    }
    console.log(`Book found!`)
}
main("Alice in Wonderland", ["Winnie the Pooh", "Alice in Wonderland"])