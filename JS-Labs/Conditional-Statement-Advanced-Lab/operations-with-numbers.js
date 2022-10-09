function main(num1, num2, operator) {

    switch (operator) {
        case "+":
            answer = num1 + num2
            console.log((`${num1} ${operator} ${num2} = ${answer}`))
            break;
        case "-":
            answer = num1 - num2
            console.log((`${num1} ${operator} ${num2} = ${answer}`))
            break;
        case "*":
            answer = num1 * num2
            console.log((`${num1} ${operator} ${num2} = ${answer}`))
            break;
        case "/":
            answer = num1 / num2
            console.log((`${num1} ${operator} ${num2} = ${answer}`))
            break;
        case "%":
            answer = num1 % num2
            console.log((`${num1} ${operator} ${num2} = ${answer}`))
            break;

    }

}
main(10, 12, "+")
main(10, 5, "-")
main(10, 5, "/")
main(10, 5, "*")
main(10, 5, "%")
