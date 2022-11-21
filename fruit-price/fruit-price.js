function fruitPrice(fruit, numberOfItems) {
    /* write your code here */
    let total = 0;

    switch (fruit) {
        case "Apple":
            total = 15 * numberOfItems;
            break;
        case "Banana":
            total = 20 * numberOfItems;
            break;
        case "Mango":
            total = 22 * numberOfItems;
            break;
        case "Kiwi":
            total = 18 * numberOfItems;
            break;
        case "Strawberry":
            total = 20 * numberOfItems;
            break;
    }

    return total;
}
