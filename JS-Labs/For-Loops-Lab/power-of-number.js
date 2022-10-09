function main (n, p) {
let result = 1;
    // if( p = 1) {
    //     console.log(n)
    // }
    for (let i = 0; i < p ; i++) {
       result *= n;
   
       
    }
    console.log(result)
}

main(2, 5)
main(3, 4)
main(2.5, 3)
main(5, 1)

// function main (n) {

//     for(let i=7; i <= n; i+=10)
//     console.log(i)
// }

// main(99)