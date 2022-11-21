function sumBirds(number1, number2, number3) {
    const array = [number1, number2, number3];
    /* write your code here */
    let sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
