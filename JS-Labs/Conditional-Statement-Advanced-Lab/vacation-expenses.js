function main(season, type, days) {

    switch (season) {
        case "Spring": 
        if (type == "Hotel") {
            expense = 30 * days * 0.8
            console.log(expense.toFixed(2));
    
        } else if (type == "Camping") {
            expense = 10 * days * 0.8
            console.log(expense.toFixed(2));
        } break;
        case "Summer": 
        if (type == "Hotel") {
            expense = 50 * days
            console.log(expense.toFixed(2));

        } else if (type == "Camping") {
            expense = 30 * days
            console.log(expense.toFixed(2));
        } break;
        case "Autumn": 
        if (type == "Hotel") {
            expense = 20 * days * 0.7
            console.log(expense.toFixed(2));

        } else if (type == "Camping") {
            expense = 15 * days * 0.7
            console.log(expense.toFixed(2));
        } break;
        case "Winter": 
        if (type == "Hotel") {
            expense = 40 * days * 0.9
            console.log(expense.toFixed(2));
        
        } else if (type == "Camping") {
            expense = 10 * days * 0.9
            console.log(expense.toFixed(2));
        } break;
    }
}

main("Winter", "Hotel", 5)
main("Winter", "Camping", 5)
main("Summer", "Camping", 6)
main("Spring", "Camping", 6)
main("Autumn", "Camping", 6)