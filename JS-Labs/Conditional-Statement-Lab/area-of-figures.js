function main(str, num) {

    if (str == "circle") {
        area = Math.PI * num * num;
        console.log(area.toFixed(2));
    } else {
        if (str == "square") {
            area = num * num;
            console.log(area.toFixed(2));
        }
    }
}

main("square", 5)
main("circle", 3)